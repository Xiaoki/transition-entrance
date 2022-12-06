import {Shader} from "./shader.js";
import {glslGlobals} from "../uniforms/uniformBlockGlobals.js";
import {ShaderTunnel} from "./shaderTunnel.js";
import {gl} from "../gl.js";

export class ShaderHorizon extends Shader {
    static VERTEX = glslGlobals + `
        #define MAGNITUDE .5

        in vec4 vertex;
        
        out vec2 uv;
        out float d;
        
        void main() {
            uv = vec2(vertex.w, scroll + time * scrollSpeed);
            d = vertex.z;
            
            gl_Position = vp * vec4(vertex.xy * (1. + vertex.z * MAGNITUDE), 0., 1.);
        }
        `;

    static FRAGMENT = glslGlobals + ShaderTunnel.TEXTURE + `
        out vec4 color;
        
        in vec2 uv;
        in float d;
        
        void main() {
            color = vec4(mix(sampleTunnel(uv), vec3(0.), d), 1.);
        }
        `;

    uniformTime;

    constructor() {
        super(ShaderHorizon.VERTEX, ShaderHorizon.FRAGMENT, [
            ["COLOR_EDGE_1", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_1)],
            ["COLOR_EDGE_2", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_2)],
            ["COLOR_EDGE_15", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_15)],
            ["COLOR_EDGE_25", Shader.makeVec3(ShaderTunnel.COLOR_EDGE_25)],
            ["COLOR_CENTER", Shader.makeVec3(ShaderTunnel.COLOR_CENTER)]
        ]);

        this.uniformTime = this.uniformLocation("animationTime");
    }

    setTime(time) {
        gl.uniform1f(this.uniformTime, time);
    }
}