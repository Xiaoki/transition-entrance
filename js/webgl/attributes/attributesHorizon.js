import {Attributes} from "./attributes.js";
import {gl} from "../gl.js";

export class AttributesHorizon extends Attributes {
    constructor() {
        super([
            gl.FLOAT,
            gl.FLOAT,
            gl.FLOAT,
            gl.FLOAT
        ]);
    }

    push(vertex, distance, u) {
        this.array.push(vertex.x, vertex.y, distance, u);
    }
}