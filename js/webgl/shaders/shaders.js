import {ShaderTunnel} from "./shaderTunnel.js";
import {ShaderHorizon} from "./shaderHorizon.js";
import {ShaderOverlay} from "./shaderOverlay.js";

export class Shaders {
    static TUNNEL = new ShaderTunnel();
    static HORIZON = new ShaderHorizon();
    static OVERLAY = new ShaderOverlay();
}