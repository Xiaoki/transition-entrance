// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6oTXV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "41ff91aaa5ad3a00";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"56NLJ":[function(require,module,exports) {
var _glJs = require("./webgl/gl.js");
var _sceneJs = require("./scene.js");
function entrance(fps = 30) {
    const scene = new (0, _sceneJs.Scene)();
    const updateRate = 1 / fps;
    let lastTime = performance.now();
    let updateTime = 0;
    window.addEventListener("resize", ()=>{
        scene.resize((0, _glJs.glCanvas).width = (0, _glJs.glCanvasWrapper).clientWidth, (0, _glJs.glCanvas).height = (0, _glJs.glCanvasWrapper).clientHeight);
    });
    scene.resize((0, _glJs.glCanvas).width = (0, _glJs.glCanvasWrapper).clientWidth, (0, _glJs.glCanvas).height = (0, _glJs.glCanvasWrapper).clientHeight);
    window.addEventListener("mousemove", (event)=>scene.mouseMove(event.clientX, event.clientY));
    const loop = (time)=>{
        const elapsedTime = Math.max(10, time - lastTime);
        updateTime += .001 * elapsedTime;
        if (updateTime > updateRate) {
            scene.update();
            updateTime -= updateRate * Math.floor(updateTime / updateRate);
        }
        lastTime = time;
        scene.render(updateTime / updateRate, .001 * elapsedTime);
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
}
entrance();

},{"./webgl/gl.js":"fuId8","./scene.js":"3feCG"}],"fuId8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glCanvasWrapper", ()=>glCanvasWrapper);
parcelHelpers.export(exports, "glCanvas", ()=>glCanvas);
parcelHelpers.export(exports, "gl", ()=>gl);
const glCanvasWrapper = document.getElementById("wrapper");
const glCanvas = document.getElementById("renderer");
const gl = glCanvas.getContext("webgl2", {
    stencil: false,
    antialias: true,
    desynchronized: false,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true,
    premultipliedAlpha: false,
    alpha: false
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"hB1uZ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3feCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scene", ()=>Scene);
var _glJs = require("./webgl/gl.js");
var _uniformBlocksJs = require("./webgl/uniforms/uniformBlocks.js");
var _cameraJs = require("./webgl/camera.js");
var _vector3Js = require("./math/vector3.js");
var _tunnelJs = require("./tunnel.js");
var _shadersJs = require("./webgl/shaders/shaders.js");
var _vector2Js = require("./math/vector2.js");
var _horizonJs = require("./horizon.js");
var _overlayJs = require("./overlay.js");
class Scene {
    static MOUSE_APPROACH = .05;
    static MOUSE_SHIFT = .2;
    static TRANSITION_SPEED = .01;
    static TRANSITION_SCROLL = .03;
    static FINISH_SPEED = .025;
    static FINISH_SCROLL = .1;
    static ANIMATION_SPEED = .02;
    static FADEOUT_SPEED = .3;
    camera = new (0, _cameraJs.Camera)();
    eye = new (0, _vector3Js.Vector3)();
    target = new (0, _vector3Js.Vector3)();
    tunnel = new (0, _tunnelJs.Tunnel)();
    horizon = new (0, _horizonJs.Horizon)();
    overlay = new (0, _overlayJs.Overlay)();
    transition = 0;
    transitionPrevious = this.transition;
    scroll = 0;
    scrollSpeed = 0;
    diving = false;
    width = 0;
    height = 0;
    mouse = new (0, _vector2Js.Vector2)();
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
    constructor(){
        (0, _glJs.gl).enable((0, _glJs.gl).CULL_FACE);
        (0, _glJs.gl).enable((0, _glJs.gl).DEPTH_TEST);
        window.addEventListener("wheel", (event)=>{
            if (event.deltaY < 0) this.start();
        });
        window.addEventListener("keydown", (event)=>{
            if (event.key === " ") this.finish().then(()=>{
                console.log("Finished");
            });
        });
    }
    start() {
        this.diving = true;
    }
    finish() {
        return new Promise((resolve)=>{
            this.onResolve = resolve;
            this.diving = true;
            this.finishing = true;
        });
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.camera.updateProjection(this.width / this.height);
        (0, _glJs.gl).viewport(0, 0, width, height);
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
                if ((this.transition += Scene.TRANSITION_SPEED) >= 1) this.transition = 1;
                this.scrollSpeed = this.transition * this.transition * Scene.TRANSITION_SCROLL;
            } else if (this.finishing) {
                if (this.finishProgress !== 1) {
                    if ((this.finishProgress += Scene.FINISH_SPEED) >= 1) {
                        this.finishProgress = 1;
                        if (this.onResolve) this.onResolve();
                    }
                    this.scrollSpeed = Scene.TRANSITION_SCROLL + this.finishProgress * this.finishProgress * Scene.FINISH_SCROLL;
                } else {
                    this.fadeoutPrevious = this.fadeout;
                    this.fadeout = Math.min(this.fadeout + Scene.FADEOUT_SPEED, 1);
                }
            }
            if ((this.scroll += this.scrollSpeed) > 1) --this.scroll;
        }
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setScroll(this.scroll, this.scrollSpeed);
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
        this.camera.view.lookAt(this.eye, this.target, (0, _cameraJs.Camera).UP);
        this.camera.updateVP();
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setVP(this.camera.vp);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setTime(time);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setFinish(finishProgress);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setFadeout(this.fadeoutPrevious + (this.fadeout - this.fadeoutPrevious) * time);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.upload();
        (0, _glJs.gl).clearColor(0, 0, 0, 1);
        (0, _glJs.gl).clear((0, _glJs.gl).COLOR_BUFFER_BIT | (0, _glJs.gl).DEPTH_BUFFER_BIT);
        (0, _shadersJs.Shaders).TUNNEL.use();
        (0, _shadersJs.Shaders).TUNNEL.setTime(this.animationTimePrevious + (this.animationTime - this.animationTimePrevious) * time);
        this.tunnel.draw();
        (0, _shadersJs.Shaders).HORIZON.use();
        (0, _shadersJs.Shaders).HORIZON.setTime(this.animationTimePrevious + (this.animationTime - this.animationTimePrevious) * time);
        this.horizon.draw();
        if (this.fadeout !== 0) {
            (0, _shadersJs.Shaders).OVERLAY.use();
            this.overlay.draw();
        }
    }
}

},{"./webgl/gl.js":"fuId8","./webgl/uniforms/uniformBlocks.js":"cFa05","./webgl/camera.js":"h28ut","./math/vector3.js":"cLWo8","./tunnel.js":"iDbgz","./webgl/shaders/shaders.js":"baSTb","./math/vector2.js":"cyVo4","./horizon.js":"94yy6","./overlay.js":"gitXf","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"cFa05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformBlocks", ()=>UniformBlocks);
var _uniformBlockGlobalsJs = require("./uniformBlockGlobals.js");
class UniformBlocks {
    static GLOBALS = new (0, _uniformBlockGlobalsJs.UniformBlockGlobals)();
}

},{"./uniformBlockGlobals.js":"hWR0r","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"hWR0r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformBlockGlobals", ()=>UniformBlockGlobals);
parcelHelpers.export(exports, "glslGlobals", ()=>glslGlobals);
var _uniformBlockJs = require("./uniformBlock.js");
class UniformBlockGlobals extends (0, _uniformBlockJs.UniformBlock) {
    static BINDING = 0;
    static NAME = "Globals";
    floats;
    constructor(){
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
const glslGlobals = `
    uniform ` + UniformBlockGlobals.NAME + ` {
        mat4 vp;
        float time;
        float scroll;
        float scrollSpeed;
        float finish;
        float fadeout;
    };`;

},{"./uniformBlock.js":"apKmS","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"apKmS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformBlock", ()=>UniformBlock);
var _glJs = require("../gl.js");
var _bufferJs = require("../buffer.js");
class UniformBlock extends (0, _bufferJs.Buffer) {
    index;
    bytes;
    constructor(size, index, usage = (0, _glJs.gl).DYNAMIC_DRAW){
        super((0, _glJs.gl).UNIFORM_BUFFER, usage, size + 0xF >> 4 << 4);
        this.index = index;
        this.bytes = new ArrayBuffer(size);
        (0, _glJs.gl).bindBufferBase((0, _glJs.gl).UNIFORM_BUFFER, index, this.buffer);
    }
    upload() {
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).UNIFORM_BUFFER, this.buffer);
        (0, _glJs.gl).bufferSubData((0, _glJs.gl).UNIFORM_BUFFER, 0, this.bytes);
    }
}

},{"../gl.js":"fuId8","../buffer.js":"anORp","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"anORp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Buffer", ()=>Buffer);
var _glJs = require("./gl.js");
class Buffer {
    static #INITIAL_CAPACITY = 0x40000;
    type;
    usage;
    buffer = (0, _glJs.gl).createBuffer();
    capacity;
    constructor(type, usage = (0, _glJs.gl).STATIC_DRAW, initial = Buffer.#INITIAL_CAPACITY){
        this.usage = usage;
        this.type = type;
        (0, _glJs.gl).bindBuffer(type, this.buffer);
        if (typeof initial === "number") (0, _glJs.gl).bufferData(type, this.capacity = initial, usage);
        else (0, _glJs.gl).bufferData(type, initial, usage);
    }
    doublesUntil(capacity) {
        let doubles = 1;
        while(this.capacity << doubles < capacity)++doubles;
        return doubles;
    }
    doubleDestructive(doubleCount = 1) {
        (0, _glJs.gl).bindBuffer(this.type, this.buffer);
        (0, _glJs.gl).bufferData(this.type, this.capacity <<= doubleCount, this.usage);
    }
    free() {
        (0, _glJs.gl).deleteBuffer(this.buffer);
    }
}

},{"./gl.js":"fuId8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"h28ut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _matrix4Js = require("../math/matrix4.js");
var _vector3Js = require("../math/vector3.js");
class Camera {
    static UP = Object.freeze(new (0, _vector3Js.Vector3)(0, 1, 0));
    static ANGLE = Math.PI * .3;
    static Z_NEAR = .02;
    static Z_FAR = 50;
    projection = new (0, _matrix4Js.Matrix4)();
    view = new (0, _matrix4Js.Matrix4)();
    vp = new (0, _matrix4Js.Matrix4)();
    updateProjection(aspect, angle = Camera.ANGLE) {
        this.projection.perspective(angle, aspect, Camera.Z_NEAR, Camera.Z_FAR);
    }
    updateVP() {
        this.vp.set(this.projection);
        this.vp.multiply(this.view);
    }
}

},{"../math/matrix4.js":"9JNxT","../math/vector3.js":"cLWo8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"9JNxT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix4", ()=>Matrix4);
class Matrix4 {
    buffer = new Float32Array(16);
    constructor(){
        this.identity();
    }
    set(other) {
        for(let i = 0; i < 16; ++i)this.buffer[i] = other.buffer[i];
        return this;
    }
    identity() {
        this.buffer[0] = this.buffer[5] = this.buffer[10] = this.buffer[15] = 1;
        this.buffer[4] = this.buffer[8] = this.buffer[12] = this.buffer[1] = this.buffer[9] = this.buffer[13] = this.buffer[2] = this.buffer[6] = this.buffer[14] = this.buffer[3] = this.buffer[7] = this.buffer[11] = 0;
        return this;
    }
    apply(vector) {
        const _x = vector.x;
        const _y = vector.y;
        const _z = vector.z;
        vector.x = this.buffer[0] * _x + this.buffer[4] * _y + this.buffer[8] * _z + this.buffer[12];
        vector.y = this.buffer[1] * _x + this.buffer[5] * _y + this.buffer[9] * _z + this.buffer[13];
        vector.z = this.buffer[2] * _x + this.buffer[6] * _y + this.buffer[10] * _z + this.buffer[14];
        vector.divide(this.buffer[3] * _x + this.buffer[7] * _y + this.buffer[11] * _z + this.buffer[15]);
        return vector;
    }
    multiply(other) {
        const _00 = this.buffer[0];
        const _01 = this.buffer[1];
        const _02 = this.buffer[2];
        const _03 = this.buffer[3];
        const _10 = this.buffer[4];
        const _11 = this.buffer[5];
        const _12 = this.buffer[6];
        const _13 = this.buffer[7];
        const _20 = this.buffer[8];
        const _21 = this.buffer[9];
        const _22 = this.buffer[10];
        const _23 = this.buffer[11];
        const _30 = this.buffer[12];
        const _31 = this.buffer[13];
        const _32 = this.buffer[14];
        const _33 = this.buffer[15];
        this.buffer[0] = _00 * other.buffer[0] + _10 * other.buffer[1] + _20 * other.buffer[2] + _30 * other.buffer[3];
        this.buffer[1] = _01 * other.buffer[0] + _11 * other.buffer[1] + _21 * other.buffer[2] + _31 * other.buffer[3];
        this.buffer[2] = _02 * other.buffer[0] + _12 * other.buffer[1] + _22 * other.buffer[2] + _32 * other.buffer[3];
        this.buffer[3] = _03 * other.buffer[0] + _13 * other.buffer[1] + _23 * other.buffer[2] + _33 * other.buffer[3];
        this.buffer[4] = _00 * other.buffer[4] + _10 * other.buffer[5] + _20 * other.buffer[6] + _30 * other.buffer[7];
        this.buffer[5] = _01 * other.buffer[4] + _11 * other.buffer[5] + _21 * other.buffer[6] + _31 * other.buffer[7];
        this.buffer[6] = _02 * other.buffer[4] + _12 * other.buffer[5] + _22 * other.buffer[6] + _32 * other.buffer[7];
        this.buffer[7] = _03 * other.buffer[4] + _13 * other.buffer[5] + _23 * other.buffer[6] + _33 * other.buffer[7];
        this.buffer[8] = _00 * other.buffer[8] + _10 * other.buffer[9] + _20 * other.buffer[10] + _30 * other.buffer[11];
        this.buffer[9] = _01 * other.buffer[8] + _11 * other.buffer[9] + _21 * other.buffer[10] + _31 * other.buffer[11];
        this.buffer[10] = _02 * other.buffer[8] + _12 * other.buffer[9] + _22 * other.buffer[10] + _32 * other.buffer[11];
        this.buffer[11] = _03 * other.buffer[8] + _13 * other.buffer[9] + _23 * other.buffer[10] + _33 * other.buffer[11];
        this.buffer[12] = _00 * other.buffer[12] + _10 * other.buffer[13] + _20 * other.buffer[14] + _30 * other.buffer[15];
        this.buffer[13] = _01 * other.buffer[12] + _11 * other.buffer[13] + _21 * other.buffer[14] + _31 * other.buffer[15];
        this.buffer[14] = _02 * other.buffer[12] + _12 * other.buffer[13] + _22 * other.buffer[14] + _32 * other.buffer[15];
        this.buffer[15] = _03 * other.buffer[12] + _13 * other.buffer[13] + _23 * other.buffer[14] + _33 * other.buffer[15];
        return this;
    }
    invert() {
        const _00 = this.buffer[0];
        const _01 = this.buffer[1];
        const _02 = this.buffer[2];
        const _03 = this.buffer[3];
        const _10 = this.buffer[4];
        const _11 = this.buffer[5];
        const _12 = this.buffer[6];
        const _13 = this.buffer[7];
        const _20 = this.buffer[8];
        const _21 = this.buffer[9];
        const _22 = this.buffer[10];
        const _23 = this.buffer[11];
        const _30 = this.buffer[12];
        const _31 = this.buffer[13];
        const _32 = this.buffer[14];
        const _33 = this.buffer[15];
        const s0 = _00 * _11 - _01 * _10;
        const s1 = _00 * _21 - _01 * _20;
        const s2 = _00 * _31 - _01 * _30;
        const s3 = _10 * _21 - _11 * _20;
        const s4 = _10 * _31 - _11 * _30;
        const s5 = _20 * _31 - _21 * _30;
        const c0 = _02 * _13 - _03 * _12;
        const c1 = _02 * _23 - _03 * _22;
        const c2 = _02 * _33 - _03 * _32;
        const c3 = _12 * _23 - _13 * _22;
        const c4 = _12 * _33 - _13 * _32;
        const c5 = _22 * _33 - _23 * _32;
        const iDet = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);
        this.buffer[0] = (_11 * c5 - _21 * c4 + _31 * c3) * iDet;
        this.buffer[1] = (_21 * c2 - _31 * c1 - _01 * c5) * iDet;
        this.buffer[2] = (_01 * c4 - _11 * c2 + _31 * c0) * iDet;
        this.buffer[3] = (_11 * c1 - _21 * c0 - _01 * c3) * iDet;
        this.buffer[4] = (_20 * c4 - _30 * c3 - _10 * c5) * iDet;
        this.buffer[5] = (_00 * c5 - _20 * c2 + _30 * c1) * iDet;
        this.buffer[6] = (_10 * c2 - _30 * c0 - _00 * c4) * iDet;
        this.buffer[7] = (_00 * c3 - _10 * c1 + _20 * c0) * iDet;
        this.buffer[8] = (_13 * s5 - _23 * s4 + _33 * s3) * iDet;
        this.buffer[9] = (_23 * s2 - _33 * s1 - _03 * s5) * iDet;
        this.buffer[10] = (_03 * s4 - _13 * s2 + _33 * s0) * iDet;
        this.buffer[11] = (_13 * s1 - _23 * s0 - _03 * s3) * iDet;
        this.buffer[12] = (_22 * s4 - _32 * s3 - _12 * s5) * iDet;
        this.buffer[13] = (_02 * s5 - _22 * s2 + _32 * s1) * iDet;
        this.buffer[14] = (_12 * s2 - _32 * s0 - _02 * s4) * iDet;
        this.buffer[15] = (_02 * s3 - _12 * s1 + _22 * s0) * iDet;
        return this;
    }
    lookAt(from, to, up) {
        this.buffer[2] = from.x - to.x;
        this.buffer[6] = from.y - to.y;
        this.buffer[10] = from.z - to.z;
        const zli = 1 / Math.sqrt(this.buffer[2] * this.buffer[2] + this.buffer[6] * this.buffer[6] + this.buffer[10] * this.buffer[10]);
        this.buffer[2] *= zli;
        this.buffer[6] *= zli;
        this.buffer[10] *= zli;
        this.buffer[14] = -this.buffer[2] * from.x - this.buffer[6] * from.y - this.buffer[10] * from.z;
        this.buffer[0] = this.buffer[6] * up.z - up.y * this.buffer[10];
        this.buffer[4] = this.buffer[10] * up.x - up.z * this.buffer[2];
        this.buffer[8] = this.buffer[2] * up.y - up.x * this.buffer[6];
        const xli = 1 / Math.sqrt(this.buffer[0] * this.buffer[0] + this.buffer[4] * this.buffer[4] + this.buffer[8] * this.buffer[8]);
        this.buffer[0] *= xli;
        this.buffer[4] *= xli;
        this.buffer[8] *= xli;
        this.buffer[12] = -this.buffer[0] * from.x - this.buffer[4] * from.y - this.buffer[8] * from.z;
        this.buffer[1] = this.buffer[4] * this.buffer[10] - this.buffer[6] * this.buffer[8];
        this.buffer[5] = this.buffer[8] * this.buffer[2] - this.buffer[10] * this.buffer[0];
        this.buffer[9] = this.buffer[0] * this.buffer[6] - this.buffer[2] * this.buffer[4];
        this.buffer[13] = -this.buffer[1] * from.x - this.buffer[5] * from.y - this.buffer[9] * from.z;
        this.buffer[3] = 0;
        this.buffer[7] = 0;
        this.buffer[11] = 0;
        this.buffer[15] = 1;
        return this;
    }
    perspective(angle, aspect, zNear, zFar) {
        const a = 1 / Math.tan(angle * 0.5);
        const r = 1 / (zNear - zFar);
        this.buffer[0] = a / aspect;
        this.buffer[1] = 0;
        this.buffer[2] = 0;
        this.buffer[3] = 0;
        this.buffer[4] = 0;
        this.buffer[5] = a;
        this.buffer[6] = 0;
        this.buffer[7] = 0;
        this.buffer[8] = 0;
        this.buffer[9] = 0;
        this.buffer[10] = (zNear + zFar) * r;
        this.buffer[11] = -1;
        this.buffer[12] = 0;
        this.buffer[13] = 0;
        this.buffer[14] = zNear * zFar * (r + r);
        this.buffer[15] = 0;
        return this;
    }
    shift(sx, sy) {
        this.buffer[8] += sx;
        this.buffer[9] += sy;
    }
    frustum(left, right, bottom, top) {
        left.x = this.buffer[3] + this.buffer[0];
        left.y = this.buffer[7] + this.buffer[4];
        left.z = this.buffer[11] + this.buffer[8];
        left.normalize();
        right.x = this.buffer[3] - this.buffer[0];
        right.y = this.buffer[7] - this.buffer[4];
        right.z = this.buffer[11] - this.buffer[8];
        right.normalize();
        bottom.x = this.buffer[3] + this.buffer[1];
        bottom.y = this.buffer[7] + this.buffer[5];
        bottom.z = this.buffer[11] + this.buffer[9];
        bottom.normalize();
        top.x = this.buffer[3] - this.buffer[1];
        top.y = this.buffer[7] - this.buffer[5];
        top.z = this.buffer[11] - this.buffer[9];
        top.normalize();
    }
    orthographic(left, top, right, bottom, zNear, zFar) {
        this.buffer[0] = 2 / (right - left);
        this.buffer[1] = this.buffer[2] = this.buffer[3] = this.buffer[4] = 0;
        this.buffer[5] = 2 / (bottom - top);
        this.buffer[6] = this.buffer[7] = this.buffer[8] = this.buffer[9] = 0;
        this.buffer[10] = 2 / (zNear - zFar);
        this.buffer[11] = 0;
        this.buffer[12] = -(right + left) / (right - left);
        this.buffer[13] = -(top + bottom) / (bottom - top);
        this.buffer[14] = -(zFar + zNear) / (zFar - zNear);
        this.buffer[15] = 1;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"cLWo8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector3", ()=>Vector3);
class Vector3 {
    x;
    y;
    z;
    constructor(x = 0, y = x, z = y){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    copy() {
        return new Vector3(this.x, this.y, this.z);
    }
    set(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
        return this;
    }
    setCoordinates(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    addMultiplied(vector, scalar) {
        this.x += vector.x * scalar;
        this.y += vector.y * scalar;
        this.z += vector.z * scalar;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    subtractMultiplied(vector, scalar) {
        this.x -= vector.x * scalar;
        this.y -= vector.y * scalar;
        this.z -= vector.z * scalar;
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    multiplyVector(other) {
        this.x *= other.x;
        this.y *= other.y;
        this.z *= other.z;
        return this;
    }
    divide(scalar) {
        return this.multiply(1 / scalar);
    }
    cross(a, b) {
        this.x = a.y * b.z - b.y * a.z;
        this.y = a.z * b.x - b.z * a.x;
        this.z = a.x * b.y - b.x * a.y;
        return this;
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }
    normalize() {
        return this.divide(this.length);
    }
    distanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const dz = other.z - this.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    squaredDistanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const dz = other.z - this.z;
        return dx * dx + dy * dy + dz * dz;
    }
    get length() {
        return Math.sqrt(this.dot(this));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"iDbgz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tunnel", ()=>Tunnel);
var _attributesTunnelJs = require("./webgl/attributes/attributesTunnel.js");
var _attributesIndicesJs = require("./webgl/attributes/attributesIndices.js");
var _glJs = require("./webgl/gl.js");
var _vector3Js = require("./math/vector3.js");
var _bufferJs = require("./webgl/buffer.js");
class Tunnel {
    static RADIUS = 1;
    static STEPS_RADIUS = 128;
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    indices;
    indexCount;
    radius;
    constructor(radius = Tunnel.RADIUS, length = 42, stepsRadius = Tunnel.STEPS_RADIUS, stepsDepth = 64, curve = Math.PI * .15){
        const vertex = new (0, _vector3Js.Vector3)();
        const vertices = new (0, _attributesTunnelJs.AttributesTunnel)();
        const indices = new (0, _attributesIndicesJs.AttributesIndices)();
        const curveRadius = length / curve;
        for(let depth = 0; depth < stepsDepth; ++depth){
            const pitch = curve * depth / (stepsDepth - 1);
            let radialPrevious = stepsRadius - 1;
            const y = Math.cos(pitch) * curveRadius - curveRadius;
            const z = Math.sin(pitch) * curveRadius;
            for(let radial = 0; radial < stepsRadius; ++radial){
                const angle = Math.PI * 2 * radial / (stepsRadius - 1);
                vertex.x = Math.cos(angle) * radius;
                vertex.y = Math.sin(angle) * radius * Math.cos(pitch) + y;
                vertex.z = Math.sin(angle) * radius * Math.sin(pitch) + z;
                vertices.push(vertex, radial / (stepsRadius - 1), length * depth / (stepsDepth - 1) / (Math.PI * 4 * radius), 1 - depth / (stepsDepth - 1));
                if (depth !== stepsDepth - 1) {
                    indices.push(depth * stepsRadius + radialPrevious);
                    indices.push(depth * stepsRadius + radial);
                    indices.push((depth + 1) * stepsRadius + radial);
                    indices.push((depth + 1) * stepsRadius + radial);
                    indices.push((depth + 1) * stepsRadius + radialPrevious);
                    indices.push(depth * stepsRadius + radialPrevious);
                    radialPrevious = radial;
                }
            }
        }
        this.radius = radius;
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, vertices.format());
        this.indices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, indices.format());
        this.indexCount = (stepsDepth - 1) * stepsRadius * 6;
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, this.indices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 3, (0, _glJs.gl).FLOAT, false, 24, 0);
        (0, _glJs.gl).enableVertexAttribArray(1);
        (0, _glJs.gl).vertexAttribPointer(1, 3, (0, _glJs.gl).FLOAT, false, 24, 12);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawElementsInstanced((0, _glJs.gl).TRIANGLES, this.indexCount, (0, _glJs.gl).UNSIGNED_SHORT, 0, 1);
    }
}

},{"./webgl/attributes/attributesTunnel.js":"kgSMg","./webgl/attributes/attributesIndices.js":"bQrI6","./webgl/gl.js":"fuId8","./math/vector3.js":"cLWo8","./webgl/buffer.js":"anORp","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"kgSMg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesTunnel", ()=>AttributesTunnel);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesTunnel extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT
        ]);
    }
    push(vertex, u, v, a) {
        this.array.push(vertex.x, vertex.y, vertex.z, u, v, a);
    }
}

},{"./attributes.js":"dbWMa","../gl.js":"fuId8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"dbWMa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Attributes", ()=>Attributes);
var _glJs = require("../gl.js");
class Attributes {
    array = [];
    stride;
    formats;
    static typeStride(type) {
        switch(type){
            default:
            case (0, _glJs.gl).FLOAT:
            case (0, _glJs.gl).UNSIGNED_INT:
                return 4;
            case (0, _glJs.gl).UNSIGNED_SHORT:
                return 2;
            case (0, _glJs.gl).UNSIGNED_BYTE:
                return 1;
        }
    }
    constructor(formats){
        this.stride = formats.length;
        this.formats = formats;
    }
    get byteStride() {
        let stride = 0;
        for(let format = 0, formatCount = this.formats.length; format < formatCount; ++format)stride += Attributes.typeStride(this.formats[format]);
        return stride;
    }
    get count() {
        return this.array.length / this.stride;
    }
    format() {
        const buffer = new ArrayBuffer(this.byteStride * this.array.length / this.stride);
        const view = new DataView(buffer);
        let byte = 0;
        for(let index = 0, indices = this.array.length; index < indices; index += this.stride)for(let element = 0; element < this.stride; ++element){
            switch(this.formats[element]){
                case (0, _glJs.gl).FLOAT:
                    view.setFloat32(byte, this.array[index + element], true);
                    break;
                case (0, _glJs.gl).UNSIGNED_INT:
                    view.setUint32(byte, this.array[index + element], true);
                    break;
                case (0, _glJs.gl).UNSIGNED_SHORT:
                    view.setUint16(byte, this.array[index + element], true);
                    break;
                case (0, _glJs.gl).UNSIGNED_BYTE:
                    view.setUint8(byte, this.array[index + element]);
                    break;
            }
            byte += Attributes.typeStride(this.formats[element]);
        }
        return buffer;
    }
}

},{"../gl.js":"fuId8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"bQrI6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesIndices", ()=>AttributesIndices);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesIndices extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).UNSIGNED_SHORT
        ]);
    }
    push(index) {
        this.array.push(index);
    }
}

},{"./attributes.js":"dbWMa","../gl.js":"fuId8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"baSTb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shaders", ()=>Shaders);
var _shaderTunnelJs = require("./shaderTunnel.js");
var _shaderHorizonJs = require("./shaderHorizon.js");
var _shaderOverlayJs = require("./shaderOverlay.js");
class Shaders {
    static TUNNEL = new (0, _shaderTunnelJs.ShaderTunnel)();
    static HORIZON = new (0, _shaderHorizonJs.ShaderHorizon)();
    static OVERLAY = new (0, _shaderOverlayJs.ShaderOverlay)();
}

},{"./shaderTunnel.js":"8MZ9a","./shaderHorizon.js":"fq0WO","./shaderOverlay.js":"x15by","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"8MZ9a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderTunnel", ()=>ShaderTunnel);
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _shaderJs = require("./shader.js");
var _glJs = require("../gl.js");
var _colorJs = require("../../math/color.js");
class ShaderTunnel extends (0, _shaderJs.Shader) {
    static COLOR_EDGE_1 = new (0, _colorJs.Color)("#288be1");
    static COLOR_EDGE_15 = new (0, _colorJs.Color)("#3a1646");
    static COLOR_EDGE_2 = new (0, _colorJs.Color)("#eab044");
    static COLOR_EDGE_25 = new (0, _colorJs.Color)("#d03d3d");
    static COLOR_CENTER = new (0, _colorJs.Color)("#050c11");
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
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        in vec3 vertex;
        in vec3 uva;
        
        out vec3 iUva;
        
        void main() {
            iUva = vec3(uva.x, uva.y + scroll + time * scrollSpeed, uva.z);
        
            gl_Position = vp * vec4(vertex, 1.);
        }
        `;
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + ShaderTunnel.TEXTURE + `
        #define END_FADE 5.
        
        in vec3 iUva;
        
        out vec4 color;
        
        void main() {
            float lighting = iUva.z * (1. - clamp((finish - iUva.z + 1. / END_FADE) * END_FADE, 0., 1.));
            
            color = vec4(mix(vec3(1.), sampleTunnel(mod(iUva.xy, 1.)), lighting), 1.);
        }
        `;
    uniformTime;
    constructor(){
        super(ShaderTunnel.VERTEX, ShaderTunnel.FRAGMENT, [
            [
                "COLOR_EDGE_1",
                (0, _shaderJs.Shader).makeVec3(ShaderTunnel.COLOR_EDGE_1)
            ],
            [
                "COLOR_EDGE_2",
                (0, _shaderJs.Shader).makeVec3(ShaderTunnel.COLOR_EDGE_2)
            ],
            [
                "COLOR_EDGE_15",
                (0, _shaderJs.Shader).makeVec3(ShaderTunnel.COLOR_EDGE_15)
            ],
            [
                "COLOR_EDGE_25",
                (0, _shaderJs.Shader).makeVec3(ShaderTunnel.COLOR_EDGE_25)
            ],
            [
                "COLOR_CENTER",
                (0, _shaderJs.Shader).makeVec3(ShaderTunnel.COLOR_CENTER)
            ]
        ]);
        this.use();
        this.bindUniformBlock((0, _uniformBlockGlobalsJs.UniformBlockGlobals).NAME, (0, _uniformBlockGlobalsJs.UniformBlockGlobals).BINDING);
        this.uniformTime = this.uniformLocation("animationTime");
    }
    setTime(time) {
        (0, _glJs.gl).uniform1f(this.uniformTime, time);
    }
}

},{"../uniforms/uniformBlockGlobals.js":"hWR0r","./shader.js":"6nzYN","../gl.js":"fuId8","../../math/color.js":"ho093","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"6nzYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shader", ()=>Shader);
var _glJs = require("../gl.js");
var _vector3Js = require("../../math/vector3.js");
class Shader {
    static VERSION = `#version 300 es
        precision highp float;
        precision highp int;
        `;
    program;
    /**
     * Make the GLSL code for preprocessor defines
     * @param {String[][]} [defines] An optional array of preprocessor defines
     * @returns {String} Preprocessor defines
     */ static makeDefines(defines) {
        let glsl = "";
        for (const define of defines)glsl += "#define " + define[0] + " " + define[1] + "\n";
        return glsl;
    }
    /**
     * Make a vec3
     * @param {Vector3 | Color} vector A value to convert to a vec3
     * @returns {string} The vec3
     */ static makeVec3(vector) {
        if (vector instanceof (0, _vector3Js.Vector3)) return "vec3(" + vector.x + "," + vector.y + "," + vector.z + ")";
        else return "vec3(" + vector.r + "," + vector.g + "," + vector.b + ")";
    }
    /**
     * Construct a shader
     * @param {String} vertex The vertex shader
     * @param {String} fragment The fragment shader
     * @param {String[][]} [defines] An optional array of preprocessor defines
     */ constructor(vertex, fragment, defines = null){
        const shaderVertex = (0, _glJs.gl).createShader((0, _glJs.gl).VERTEX_SHADER);
        const shaderFragment = (0, _glJs.gl).createShader((0, _glJs.gl).FRAGMENT_SHADER);
        let prefix = defines ? Shader.VERSION + Shader.makeDefines(defines) : Shader.VERSION;
        this.program = (0, _glJs.gl).createProgram();
        (0, _glJs.gl).shaderSource(shaderVertex, prefix + vertex);
        (0, _glJs.gl).compileShader(shaderVertex);
        if (!(0, _glJs.gl).getShaderParameter(shaderVertex, (0, _glJs.gl).COMPILE_STATUS)) console.error((0, _glJs.gl).getShaderInfoLog(shaderVertex));
        (0, _glJs.gl).shaderSource(shaderFragment, prefix + fragment);
        (0, _glJs.gl).compileShader(shaderFragment);
        if (!(0, _glJs.gl).getShaderParameter(shaderFragment, (0, _glJs.gl).COMPILE_STATUS)) console.error((0, _glJs.gl).getShaderInfoLog(shaderFragment));
        (0, _glJs.gl).attachShader(this.program, shaderVertex);
        (0, _glJs.gl).attachShader(this.program, shaderFragment);
        (0, _glJs.gl).linkProgram(this.program);
        (0, _glJs.gl).detachShader(this.program, shaderVertex);
        (0, _glJs.gl).detachShader(this.program, shaderFragment);
        (0, _glJs.gl).deleteShader(shaderVertex);
        (0, _glJs.gl).deleteShader(shaderFragment);
        if (!(0, _glJs.gl).getProgramParameter(this.program, (0, _glJs.gl).LINK_STATUS)) console.error((0, _glJs.gl).getProgramInfoLog(this.program));
    }
    /**
     * Get a uniform location
     * @param {string} name The name of the uniform
     * @returns {WebGLUniformLocation} The uniform location
     */ uniformLocation(name) {
        return (0, _glJs.gl).getUniformLocation(this.program, name);
    }
    /**
     * Bind a uniform block
     * @param {string} name The uniform block name
     * @param {number} binding The binding index
     */ bindUniformBlock(name, binding) {
        (0, _glJs.gl).uniformBlockBinding(this.program, (0, _glJs.gl).getUniformBlockIndex(this.program, name), binding);
    }
    /**
     * Use this shader
     */ use() {
        (0, _glJs.gl).useProgram(this.program);
    }
    /**
     * Free allocated resources
     */ free() {
        (0, _glJs.gl).deleteProgram(this.program);
    }
}

},{"../gl.js":"fuId8","../../math/vector3.js":"cLWo8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"ho093":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
class Color {
    /**
     * Construct a color
     * @param {string} hex A hexadecimal color string starting with #
     */ constructor(hex){
        this.integer = parseInt(hex.substring(1), 16);
    }
    /**
     * Get the red value in the range [0, 1]
     * @returns {number} The red value
     */ get r() {
        return (this.integer >> 16) / 0xFF;
    }
    /**
     * Get the green value in the range [0, 1]
     * @returns {number} The red value
     */ get g() {
        return (this.integer >> 8 & 0xFF) / 0xFF;
    }
    /**
     * Get the green value in the range [0, 1]
     * @returns {number} The red value
     */ get b() {
        return (this.integer & 0xFF) / 0xFF;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"fq0WO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderHorizon", ()=>ShaderHorizon);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _shaderTunnelJs = require("./shaderTunnel.js");
var _glJs = require("../gl.js");
class ShaderHorizon extends (0, _shaderJs.Shader) {
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + `
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
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + (0, _shaderTunnelJs.ShaderTunnel).TEXTURE + `
        out vec4 color;
        
        in vec2 uv;
        in float d;
        
        void main() {
            color = vec4(mix(sampleTunnel(uv), vec3(0.), d), 1.);
        }
        `;
    uniformTime;
    constructor(){
        super(ShaderHorizon.VERTEX, ShaderHorizon.FRAGMENT, [
            [
                "COLOR_EDGE_1",
                (0, _shaderJs.Shader).makeVec3((0, _shaderTunnelJs.ShaderTunnel).COLOR_EDGE_1)
            ],
            [
                "COLOR_EDGE_2",
                (0, _shaderJs.Shader).makeVec3((0, _shaderTunnelJs.ShaderTunnel).COLOR_EDGE_2)
            ],
            [
                "COLOR_EDGE_15",
                (0, _shaderJs.Shader).makeVec3((0, _shaderTunnelJs.ShaderTunnel).COLOR_EDGE_15)
            ],
            [
                "COLOR_EDGE_25",
                (0, _shaderJs.Shader).makeVec3((0, _shaderTunnelJs.ShaderTunnel).COLOR_EDGE_25)
            ],
            [
                "COLOR_CENTER",
                (0, _shaderJs.Shader).makeVec3((0, _shaderTunnelJs.ShaderTunnel).COLOR_CENTER)
            ]
        ]);
        this.uniformTime = this.uniformLocation("animationTime");
    }
    setTime(time) {
        (0, _glJs.gl).uniform1f(this.uniformTime, time);
    }
}

},{"./shader.js":"6nzYN","../uniforms/uniformBlockGlobals.js":"hWR0r","./shaderTunnel.js":"8MZ9a","../gl.js":"fuId8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"x15by":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderOverlay", ()=>ShaderOverlay);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
class ShaderOverlay extends (0, _shaderJs.Shader) {
    static VERTEX = `
        #define OVEREXPOSE 1.65
    
        in vec2 vertex;
        
        void main() {
            gl_Position = vec4(vertex, 0., 1.);
        }
        `;
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        out vec4 color;
        
        void main() {
            color = vec4(vec3(1. - fadeout), 1.);
        }
        `;
    constructor(){
        super(ShaderOverlay.VERTEX, ShaderOverlay.FRAGMENT);
    }
}

},{"./shader.js":"6nzYN","../uniforms/uniformBlockGlobals.js":"hWR0r","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"cyVo4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector2", ()=>Vector2);
class Vector2 {
    x;
    y;
    constructor(x = 0, y = x){
        this.x = x;
        this.y = y;
    }
    set(vector) {
        this.x = vector.x;
        this.y = vector.y;
    }
    copy() {
        return new Vector2(this.x, this.y);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"94yy6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Horizon", ()=>Horizon);
var _glJs = require("./webgl/gl.js");
var _vector2Js = require("./math/vector2.js");
var _attributesHorizonJs = require("./webgl/attributes/attributesHorizon.js");
var _attributesIndicesJs = require("./webgl/attributes/attributesIndices.js");
var _tunnelJs = require("./tunnel.js");
var _bufferJs = require("./webgl/buffer.js");
class Horizon {
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    indices;
    indexCount;
    constructor(){
        const vertex = new (0, _vector2Js.Vector2)();
        const vertices = new (0, _attributesHorizonJs.AttributesHorizon)();
        const indices = new (0, _attributesIndicesJs.AttributesIndices)();
        for(let radial = 0; radial < (0, _tunnelJs.Tunnel).STEPS_RADIUS; ++radial){
            const angle = Math.PI * 2 * radial / ((0, _tunnelJs.Tunnel).STEPS_RADIUS - 1);
            const radialNext = (radial + 1) % (0, _tunnelJs.Tunnel).STEPS_RADIUS;
            vertex.x = Math.cos(angle) * (0, _tunnelJs.Tunnel).RADIUS;
            vertex.y = Math.sin(angle) * (0, _tunnelJs.Tunnel).RADIUS;
            vertices.push(vertex, 0, radial / ((0, _tunnelJs.Tunnel).STEPS_RADIUS - 1));
            vertices.push(vertex, 1, radial / ((0, _tunnelJs.Tunnel).STEPS_RADIUS - 1));
            indices.push(radial << 1);
            indices.push((radial << 1) + 1);
            indices.push((radialNext << 1) + 1);
            indices.push((radialNext << 1) + 1);
            indices.push(radialNext << 1);
            indices.push(radial << 1);
        }
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, vertices.format());
        this.indices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, indices.format());
        this.indexCount = indices.count;
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, this.indices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 4, (0, _glJs.gl).FLOAT, false, 16, 0);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawElementsInstanced((0, _glJs.gl).TRIANGLES, this.indexCount, (0, _glJs.gl).UNSIGNED_SHORT, 0, 1);
    }
}

},{"./webgl/gl.js":"fuId8","./math/vector2.js":"cyVo4","./webgl/attributes/attributesHorizon.js":"2TAG2","./webgl/attributes/attributesIndices.js":"bQrI6","./tunnel.js":"iDbgz","./webgl/buffer.js":"anORp","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"2TAG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesHorizon", ()=>AttributesHorizon);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesHorizon extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT
        ]);
    }
    push(vertex, distance, u) {
        this.array.push(vertex.x, vertex.y, distance, u);
    }
}

},{"./attributes.js":"dbWMa","../gl.js":"fuId8","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"gitXf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Overlay", ()=>Overlay);
var _glJs = require("./webgl/gl.js");
var _bufferJs = require("./webgl/buffer.js");
class Overlay {
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    constructor(){
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, new Float32Array([
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1
        ]));
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 2, (0, _glJs.gl).FLOAT, false, 8, 0);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawArrays((0, _glJs.gl).TRIANGLE_FAN, 0, 4);
    }
}

},{"./webgl/gl.js":"fuId8","./webgl/buffer.js":"anORp","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}]},["6oTXV","56NLJ"], "56NLJ", "parcelRequire94c2")

//# sourceMappingURL=index.a5ad3a00.js.map
