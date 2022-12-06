import {UniformBlock} from "./uniformBlock.js";

export class UniformBlockGlobals extends UniformBlock {
    static BINDING = 0;
    static NAME = "Globals";

    floats;

    constructor() {
        super(84, UniformBlockGlobals.BINDING);

        this.floats = new Float32Array(this.bytes);
    }

    setVP(vp) {
        this.floats.set(vp.buffer);
    }

    setTime(time) {
        this.floats[16] = time;
    }

    setScroll(scroll, scrollSpeed) {
        this.floats[17] = scroll;
        this.floats[18] = scrollSpeed;
    }

    setFinish(finish) {
        this.floats[19] = finish;
    }

    setFadeout(fadeout) {
        this.floats[20] = fadeout;
    }
}

export const glslGlobals = `
    uniform ` + UniformBlockGlobals.NAME + ` {
        mat4 vp;
        float time;
        float scroll;
        float scrollSpeed;
        float finish;
        float fadeout;
    };`;