import {Attributes} from "./attributes.js";
import {gl} from "../gl.js";

export class AttributesTunnel extends Attributes {
    constructor() {
        super([
            gl.FLOAT,
            gl.FLOAT,
            gl.FLOAT,
            gl.FLOAT,
            gl.FLOAT,
            gl.FLOAT
        ]);
    }

    push(vertex, u, v, a) {
        this.array.push(vertex.x, vertex.y, vertex.z, u, v, a);
    }
}