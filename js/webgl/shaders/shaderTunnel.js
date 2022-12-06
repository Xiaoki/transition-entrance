import {glslGlobals, UniformBlockGlobals} from "../uniforms/uniformBlockGlobals.js";
import {Shader} from "./shader.js";
import {gl} from "../gl.js";
import {Color} from "../../math/color.js";

export class ShaderTunnel extends Shader {
    static COLOR_EDGE_1 = new Color("#288be1");
    static COLOR_EDGE_15 = new Color("#3a1646");
    static COLOR_EDGE_2 = new Color("#eab044");
    static COLOR_EDGE_25 = new Color("#d03d3d");
    static COLOR_CENTER = new Color("#050c11");
    static TEXTURE = `
        uniform float animationTime;

        #define EPSILON .000001
        #define CELL_DEVIATION .4
        
        vec2 hash2(vec2 p, float repeat)
        {
            p = mod(p / repeat, 1.);
            
            vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
            
            p3 += dot(p3, p3.yzx + 19.19);
            
            vec2 o = fract(vec2((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y));

            o = .5 + CELL_DEVIATION * sin(animationTime + o * 6.2831853);
   
            return o;
        }
        
        vec3 voronoi(in vec2 x, in float repeat) {
            vec2 n = floor(x * repeat);
            vec2 f = fract(x * repeat);
            vec2 mr;
        
            float md = 8.0;
            for(int j=-1; j<=1; j++) for(int i=-1; i<=1; i++) {
                vec2 g = vec2(float(i), float(j));
                vec2 o = hash2(n + g, repeat);
                vec2 r = g + o - f;
                float d = dot(r, r);
        
                if(d < md)
                {
                    md = d;
                    mr = r;
                }
            }
        
            md = 8.0;
            
            for(int j=-1; j<=1; j++) for(int i=-1; i<=1; i++) {
                vec2 g = vec2(float(i), float(j));
                vec2 o = hash2(n + g, repeat);
                vec2 r = g + o - f;
        
                if (dot(mr - r, mr - r) > EPSILON)
                    md = min(md, dot(.5 * (mr + r), normalize(r - mr)));
            }
        
            return vec3(md, mr);
        }
        
        #define EDGE_POWER .25
        #define EDGE_MULTIPLIER 2.5
        
        vec3 mix3(const vec3 a, const vec3 b, const vec3 c, const float m) {
            const float mid = .2;
            
            return mix(mix(a, b, smoothstep(0., mid, m)), c, smoothstep(mid, 1., m));
        }

        vec3 sampleTunnel(const vec2 uv) {
            return mix3(
                COLOR_EDGE_1,
                COLOR_EDGE_15,
                COLOR_CENTER,
                pow(min(1., voronoi(uv, 12.).x * EDGE_MULTIPLIER), .62)) +
            mix3(
                COLOR_EDGE_2,
                COLOR_EDGE_25,
                COLOR_CENTER,
                pow(min(1., voronoi(uv, 3.).x * EDGE_MULTIPLIER), .55));
        }
        `;

    static VERTEX = glslGlobals + `
        in vec3 vertex;
        in vec3 uva;
        
        out vec3 iUva;
        
        void main() {
            iUva = vec3(uva.x, uva.y + scroll + time * scrollSpeed, uva.z);
        
            gl_Position = vp * vec4(vertex, 1.);
        }
        `;

    static FRAGMENT = glslGlobals + ShaderTunnel.TEXTURE + `
        #define END_FADE 5.
        
        in vec3 iUva;
        
        out vec4 color;
        
        void main() {
            float lighting = iUva.z * (1. - clamp((finish - iUva.z + 1. / END_FADE) * END_FADE, 0., 1.));
            
            color = vec4(mix(vec3(1.), sampleTunnel(mod(iUva.xy, 1.)), lighting), 1.);
        }
        `;

    uniformTime;

    constructor() {
        super(ShaderTunnel.VERTEX, ShaderTunnel.FRAGMENT, [
            ["COLOR_EDGE_1", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_1)],
            ["COLOR_EDGE_2", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_2)],
            ["COLOR_EDGE_15", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_15)],
            ["COLOR_EDGE_25", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_25)],
            ["COLOR_CENTER", Shader.makeVec3(ShaderTunnel.COLOR_CENTER)]
        ]);

        this.use();
        this.bindUniformBlock(UniformBlockGlobals.NAME, UniformBlockGlobals.BINDING);

        this.uniformTime = this.uniformLocation("animationTime");
    }

    setTime(time) {
        gl.uniform1f(this.uniformTime, time);
    }
}