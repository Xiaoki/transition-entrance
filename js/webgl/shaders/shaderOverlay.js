import {Shader} from "./shader.js";
import {glslGlobals} from "../uniforms/uniformBlockGlobals.js";

export class ShaderOverlay extends Shader {
    static VERTEX = `
        #define OVEREXPOSE 1.65
    
        in vec2 vertex;
        
        void main() {
            gl_Position = vec4(vertex, 0., 1.);
        }
        `;

    static FRAGMENT = glslGlobals + `
        out vec4 color;
        
        void main() {
            color = vec4(vec3(1. - fadeout), 1.);
        }
        `;

    constructor() {
        super(ShaderOverlay.VERTEX, ShaderOverlay.FRAGMENT);
    }
}