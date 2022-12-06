import {gl} from "./webgl/gl.js";
import {Vector2} from "./math/vector2.js";
import {AttributesHorizon} from "./webgl/attributes/attributesHorizon.js";
import {AttributesIndices} from "./webgl/attributes/attributesIndices.js";
import {Tunnel} from "./tunnel.js";
import {Buffer} from "./webgl/buffer.js";

export class Horizon {
    vao = gl.createVertexArray();
    vertices;
    indices;
    indexCount;

    constructor() {
        const vertex = new Vector2();
        const vertices = new AttributesHorizon();
        const indices = new AttributesIndices();

        for (let radial = 0; radial < Tunnel.STEPS_RADIUS; ++radial) {
            const angle = Math.PI * 2 * radial / (Tunnel.STEPS_RADIUS - 1);
            const radialNext = (radial + 1) % Tunnel.STEPS_RADIUS;

            vertex.x = Math.cos(angle) * Tunnel.RADIUS;
            vertex.y = Math.sin(angle) * Tunnel.RADIUS;

            vertices.push(vertex, 0, radial / (Tunnel.STEPS_RADIUS - 1));
            vertices.push(vertex, 1, radial / (Tunnel.STEPS_RADIUS - 1));

            indices.push(radial << 1);
            indices.push((radial << 1) + 1);
            indices.push(((radialNext) << 1) + 1);
            indices.push(((radialNext) << 1) + 1);
            indices.push((radialNext) << 1);
            indices.push(radial << 1);
        }

        this.vertices = new Buffer(gl.ARRAY_BUFFER, gl.STATIC_DRAW, vertices.format());
        this.indices = new Buffer(gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW, indices.format());
        this.indexCount = indices.count;

        gl.bindVertexArray(this.vao);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertices.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);

        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 16, 0);

        gl.bindVertexArray(null);
    }

    draw() {
        gl.bindVertexArray(this.vao);
        gl.drawElementsInstanced(gl.TRIANGLES, this.indexCount, gl.UNSIGNED_SHORT, 0, 1);
    }
}