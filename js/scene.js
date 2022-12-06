import {gl} from "./webgl/gl.js";
import {UniformBlocks} from "./webgl/uniforms/uniformBlocks.js";
import {Camera} from "./webgl/camera.js";
import {Vector3} from "./math/vector3.js";
import {Tunnel} from "./tunnel.js";
import {Shaders} from "./webgl/shaders/shaders.js";
import {Vector2} from "./math/vector2.js";
import {Horizon} from "./horizon.js";
import {Overlay} from "./overlay.js";

export class Scene {
    static MOUSE_APPROACH = .05;
    static MOUSE_SHIFT = .2;
    static TRANSITION_SPEED = .01;
    static TRANSITION_SCROLL = .03;
    static FINISH_SPEED = .025;
    static FINISH_SCROLL = .1;
    static ANIMATION_SPEED = .02;
    static FADEOUT_SPEED = .3;

    camera = new Camera();
    eye = new Vector3();
    target = new Vector3();
    tunnel = new Tunnel();
    horizon = new Horizon();
    overlay = new Overlay();
    transition = 0;
    transitionPrevious = this.transition;
    scroll = 0;
    scrollSpeed = 0;
    diving = false;
    width = 0;
    height = 0;
    mouse = new Vector2();
    focus = this.mouse.copy();
    focusPrevious = this.focus.copy();
    onResolve = null;
    finishing = false;
    finishProgress = 0;
    finishProgressPrevious = this.finishProgress;
    animationTime = 0;
    animationTimePrevious = this.animationTime;
    fadeout = 0;
    fadeoutPrevious = this.fadeout;

    constructor() {
        gl.enable(gl.CULL_FACE);
        gl.enable(gl.DEPTH_TEST);

        window.addEventListener("wheel", event => {
            if (event.deltaY < 0)
                this.start();
        });

        window.addEventListener("keydown", event => {
            if (event.key === " ")
                this.finish().then(() => {
                    console.log("Finished");
                });
        });
    }

    start() {
        this.diving = true;
    }

    finish() {
        return new Promise(resolve => {
            this.onResolve = resolve;
            this.diving = true;
            this.finishing = true;
        });
    }

    resize(width, height) {
        this.width = width;
        this.height = height;

        this.camera.updateProjection(this.width / this.height);

        gl.viewport(0, 0, width, height);
    }

    mouseMove(x, y) {
        this.mouse.x = 2 * x / this.width - 1;
        this.mouse.y = 2 * y / this.height - 1;
    }

    update() {
        this.transitionPrevious = this.transition;
        this.finishProgressPrevious = this.finishProgress;
        this.animationTimePrevious = this.animationTime;
        this.focusPrevious.set(this.focus);
        this.focus.x += (this.mouse.x - this.focus.x) * Scene.MOUSE_APPROACH;
        this.focus.y += (this.mouse.y - this.focus.y) * Scene.MOUSE_APPROACH;

        this.animationTime += Scene.ANIMATION_SPEED * (1 + this.scrollSpeed * 40);

        if (this.diving) {
            if (this.transition !== 1) {
                if ((this.transition += Scene.TRANSITION_SPEED) >= 1)
                    this.transition = 1;

                this.scrollSpeed = this.transition * this.transition * Scene.TRANSITION_SCROLL;
            }
            else if (this.finishing) {
                if (this.finishProgress !== 1) {
                    if ((this.finishProgress += Scene.FINISH_SPEED) >= 1) {
                        this.finishProgress = 1;

                        if (this.onResolve)
                            this.onResolve();
                    }

                    this.scrollSpeed = Scene.TRANSITION_SCROLL + this.finishProgress * this.finishProgress * Scene.FINISH_SCROLL;
                }
                else {
                    this.fadeoutPrevious = this.fadeout;
                    this.fadeout = Math.min(this.fadeout + Scene.FADEOUT_SPEED, 1);
                }
            }

            if ((this.scroll += this.scrollSpeed) > 1)
                --this.scroll;
        }

        UniformBlocks.GLOBALS.setScroll(this.scroll, this.scrollSpeed);
    }

    smoothStep(t) {
        return t * t * (3 - 2 * t);
    }

    render(time) {
        const transition = this.transitionPrevious + (this.transition - this.transitionPrevious) * time;
        const finishProgress = this.finishProgressPrevious + (this.finishProgress - this.finishProgressPrevious) * time;
        const fx = this.focusPrevious.x + (this.focus.x - this.focusPrevious.x) * time;
        const fy = this.focusPrevious.y + (this.focus.y - this.focusPrevious.y) * time;
        const y = this.tunnel.radius * this.smoothStep(1 - transition);
        const z = Math.sin(Math.PI * transition) * -2 - (1 - transition);

        this.eye.x = 0;
        this.eye.y = y;
        this.eye.z = z;

        this.target.x = fx * Scene.MOUSE_SHIFT;
        this.target.y = -fy * Scene.MOUSE_SHIFT + y;
        this.target.z = 1;

        this.camera.view.lookAt(this.eye, this.target, Camera.UP);
        this.camera.updateVP();

        UniformBlocks.GLOBALS.setVP(this.camera.vp);
        UniformBlocks.GLOBALS.setTime(time);
        UniformBlocks.GLOBALS.setFinish(finishProgress);
        UniformBlocks.GLOBALS.setFadeout(this.fadeoutPrevious + (this.fadeout - this.fadeoutPrevious) * time);
        UniformBlocks.GLOBALS.upload();

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        Shaders.TUNNEL.use();
        Shaders.TUNNEL.setTime(this.animationTimePrevious + (this.animationTime - this.animationTimePrevious) * time);

        this.tunnel.draw();

        Shaders.HORIZON.use();
        Shaders.HORIZON.setTime(this.animationTimePrevious + (this.animationTime - this.animationTimePrevious) * time);

        this.horizon.draw();

        if (this.fadeout !== 0) {
            Shaders.OVERLAY.use();

            this.overlay.draw();
        }
    }
}