import {AttributesTunnel} from "./webgl/attributes/attributesTunnel.js";
import {AttributesIndices} from "./webgl/attributes/attributesIndices.js";
import {gl} from "./webgl/gl.js";
import {Vector3} from "./math/vector3.js";
import {Buffer} from "./webgl/buffer.js";

export class Tunnel {
    static RADIUS = 1;
    static STEPS_RADIUS = 128;

    vao = gl.createVertexArray();
    vertices;
    indices;
    indexCount;
    radius;

    constructor(
        radius = Tunnel.RADIUS,
        length = 42,
        stepsRadius = Tunnel.STEPS_RADIUS,
        stepsDepth = 64,
        curve = Math.PI * .15) {
        const vertex = new Vector3();
        const vertices = new AttributesTunnel();
        const indices = new AttributesIndices();
        const curveRadius = length / curve;

        for (let depth = 0; depth < stepsDepth; ++depth) {
            const pitch = curve * depth / (stepsDepth - 1);
            let radialPrevious = stepsRadius - 1;

            const y = Math.cos(pitch) * curveRadius - curveRadius;
            const z = Math.sin(pitch) * curveRadius;

            for (let radial = 0; radial < stepsRadius; ++radial) {
                const angle = Math.PI * 2 * radial / (stepsRadius - 1);

                vertex.x = Math.cos(angle) * radius;
                vertex.y = Math.sin(angle) * radius * Math.cos(pitch) + y;
                vertex.z = Math.sin(angle) * radius * Math.sin(pitch) + z;

                vertices.push(
                    vertex,
                    radial / (stepsRadius - 1),
                    (length * depth / (stepsDepth - 1)) / (Math.PI * 4 * radius),
                    1 - depth / (stepsDepth - 1));

                if (depth !== stepsDepth - 1) {
                    indices.push((depth) * stepsRadius + radialPrevious);
                    indices.push((depth) * stepsRadius + radial);
                    indices.push((depth + 1) * stepsRadius + radial);
                    indices.push((depth + 1) * stepsRadius + radial);
                    indices.push((depth + 1) * stepsRadius + radialPrevious);
                    indices.push((depth) * stepsRadius + radialPrevious);

                    radialPrevious = radial;
                }
            }
        }

        this.radius = radius;
        this.vertices = new Buffer(gl.ARRAY_BUFFER, gl.STATIC_DRAW, vertices.format());
        this.indices = new Buffer(gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW, indices.format());
        this.indexCount = (stepsDepth - 1) * stepsRadius * 6;

        gl.bindVertexArray(this.vao);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertices.buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);

        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);

        gl.bindVertexArray(null);
    }

    draw() {
        gl.bindVertexArray(this.vao);
        gl.drawElementsInstanced(gl.TRIANGLES, this.indexCount, gl.UNSIGNED_SHORT, 0, 1);
    }
}