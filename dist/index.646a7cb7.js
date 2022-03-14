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
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"3c0Hu":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "05c6c756646a7cb7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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

},{}],"c7lqJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _apolloBoost = require("apollo-boost");
var _apolloBoostDefault = parcelHelpers.interopDefault(_apolloBoost);
async function makeGQLCall() {
    const gqlUrl = "https://countries.trevorblades.com/graphql";
    const client = new _apolloBoostDefault.default({
        uri: gqlUrl
    });
    const json = await client.query({
        query: _apolloBoost.gql`
   {
    country(code: "NO") {
        name
        currency
        emoji
      }
    
   }
  `
    });
    console.log(json);
    //  document.body.innerHTML = (json.data.country.name);
    //  document.body.innerHTML = (json.data.country.emoji);
    //  document.body.innerHTML = (json.data.country.native);
    //  for (let i = 0; i < json.length; i++) {
    document.querySelector('.results').innerHTML += `
      <div class="card">
<div class="emoji"> ${json.data.country.emoji}</div>
<h2>${json.data.country.name}</h2>
<p>${json.data.country.currency}</p>
</div>
    `;
}
// }
makeGQLCall();

},{"apollo-boost":"dnHu1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dnHu1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpLink", ()=>_apolloLinkHttp.HttpLink
);
parcelHelpers.export(exports, "gql", ()=>_graphqlTagDefault.default
);
var _tslib = require("tslib");
var _apolloClient = require("apollo-client");
var _apolloClientDefault = parcelHelpers.interopDefault(_apolloClient);
var _apolloLink = require("apollo-link");
var _apolloCacheInmemory = require("apollo-cache-inmemory");
var _apolloLinkHttp = require("apollo-link-http");
var _apolloLinkError = require("apollo-link-error");
var _tsInvariant = require("ts-invariant");
parcelHelpers.exportAll(_apolloClient, exports);
parcelHelpers.exportAll(_apolloLink, exports);
parcelHelpers.exportAll(_apolloCacheInmemory, exports);
var _graphqlTag = require("graphql-tag");
var _graphqlTagDefault = parcelHelpers.interopDefault(_graphqlTag);
var PRESET_CONFIG_KEYS = [
    'request',
    'uri',
    'credentials',
    'headers',
    'fetch',
    'fetchOptions',
    'clientState',
    'onError',
    'cacheRedirects',
    'cache',
    'name',
    'version',
    'resolvers',
    'typeDefs',
    'fragmentMatcher', 
];
var DefaultClient = function(_super) {
    _tslib.__extends(DefaultClient1, _super);
    function DefaultClient1(config) {
        if (config === void 0) config = {
        };
        var _this = this;
        if (config) {
            var diff = Object.keys(config).filter(function(key) {
                return PRESET_CONFIG_KEYS.indexOf(key) === -1;
            });
            if (diff.length > 0) _tsInvariant.invariant.warn('ApolloBoost was initialized with unsupported options: ' + ("" + diff.join(' ')));
        }
        var request = config.request, uri = config.uri, credentials = config.credentials, headers = config.headers, fetch = config.fetch, fetchOptions = config.fetchOptions, clientState = config.clientState, cacheRedirects = config.cacheRedirects, errorCallback = config.onError, name = config.name, version = config.version, resolvers = config.resolvers, typeDefs = config.typeDefs, fragmentMatcher = config.fragmentMatcher;
        var cache = config.cache;
        _tsInvariant.invariant(!cache || !cacheRedirects, "Incompatible cache configuration. When not providing `cache`, configure the provided instance with `cacheRedirects` instead.");
        if (!cache) cache = cacheRedirects ? new _apolloCacheInmemory.InMemoryCache({
            cacheRedirects: cacheRedirects
        }) : new _apolloCacheInmemory.InMemoryCache();
        var errorLink = errorCallback ? _apolloLinkError.onError(errorCallback) : _apolloLinkError.onError(function(_a1) {
            var graphQLErrors = _a1.graphQLErrors, networkError = _a1.networkError;
            if (graphQLErrors) graphQLErrors.forEach(function(_a) {
                var message = _a.message, locations = _a.locations, path = _a.path;
                return _tsInvariant.invariant.warn("[GraphQL error]: Message: " + message + ", Location: " + (locations + ", Path: " + path));
            });
            if (networkError) _tsInvariant.invariant.warn("[Network error]: " + networkError);
        });
        var requestHandler = request ? new _apolloLink.ApolloLink(function(operation, forward) {
            return new _apolloLink.Observable(function(observer) {
                var handle;
                Promise.resolve(operation).then(function(oper) {
                    return request(oper);
                }).then(function() {
                    handle = forward(operation).subscribe({
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer)
                    });
                }).catch(observer.error.bind(observer));
                return function() {
                    if (handle) handle.unsubscribe();
                };
            });
        }) : false;
        var httpLink = new _apolloLinkHttp.HttpLink({
            uri: uri || '/graphql',
            fetch: fetch,
            fetchOptions: fetchOptions || {
            },
            credentials: credentials || 'same-origin',
            headers: headers || {
            }
        });
        var link = _apolloLink.ApolloLink.from([
            errorLink,
            requestHandler,
            httpLink
        ].filter(function(x) {
            return !!x;
        }));
        var activeResolvers = resolvers;
        var activeTypeDefs = typeDefs;
        var activeFragmentMatcher = fragmentMatcher;
        if (clientState) {
            if (clientState.defaults) cache.writeData({
                data: clientState.defaults
            });
            activeResolvers = clientState.resolvers;
            activeTypeDefs = clientState.typeDefs;
            activeFragmentMatcher = clientState.fragmentMatcher;
        }
        _this = _super.call(this, {
            cache: cache,
            link: link,
            name: name,
            version: version,
            resolvers: activeResolvers,
            typeDefs: activeTypeDefs,
            fragmentMatcher: activeFragmentMatcher
        }) || this;
        return _this;
    }
    return DefaultClient1;
}(_apolloClientDefault.default);
exports.default = DefaultClient;

},{"tslib":"lRdW5","apollo-client":"dmaxH","apollo-link":"hMD4G","apollo-cache-inmemory":"lesBh","apollo-link-http":"eoywy","apollo-link-error":"l40r3","ts-invariant":"gP8E6","graphql-tag":"bCfYb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
parcelHelpers.export(exports, "__spread", ()=>__spread
);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmaxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloClient", ()=>ApolloClient
);
parcelHelpers.export(exports, "ApolloError", ()=>ApolloError
);
parcelHelpers.export(exports, "FetchType", ()=>FetchType
);
parcelHelpers.export(exports, "NetworkStatus", ()=>NetworkStatus
);
parcelHelpers.export(exports, "ObservableQuery", ()=>ObservableQuery
);
parcelHelpers.export(exports, "isApolloError", ()=>isApolloError
);
var _tslib = require("tslib");
var _apolloUtilities = require("apollo-utilities");
var _apolloLink = require("apollo-link");
var _symbolObservable = require("symbol-observable");
var _symbolObservableDefault = parcelHelpers.interopDefault(_symbolObservable);
var _tsInvariant = require("ts-invariant");
var _visitor = require("graphql/language/visitor");
var NetworkStatus;
(function(NetworkStatus1) {
    NetworkStatus1[NetworkStatus1["loading"] = 1] = "loading";
    NetworkStatus1[NetworkStatus1["setVariables"] = 2] = "setVariables";
    NetworkStatus1[NetworkStatus1["fetchMore"] = 3] = "fetchMore";
    NetworkStatus1[NetworkStatus1["refetch"] = 4] = "refetch";
    NetworkStatus1[NetworkStatus1["poll"] = 6] = "poll";
    NetworkStatus1[NetworkStatus1["ready"] = 7] = "ready";
    NetworkStatus1[NetworkStatus1["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {
}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}
var Observable = function(_super) {
    _tslib.__extends(Observable1, _super);
    function Observable1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable1.prototype[_symbolObservableDefault.default] = function() {
        return this;
    };
    Observable1.prototype['@@observable'] = function() {
        return this;
    };
    return Observable1;
}(_apolloLink.Observable);
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function(err) {
    var message = '';
    if (isNonEmptyArray(err.graphQLErrors)) err.graphQLErrors.forEach(function(graphQLError) {
        var errorMessage = graphQLError ? graphQLError.message : 'Error message not found.';
        message += "GraphQL error: " + errorMessage + "\n";
    });
    if (err.networkError) message += 'Network error: ' + err.networkError.message + '\n';
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = function(_super) {
    _tslib.__extends(ApolloError1, _super);
    function ApolloError1(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) _this.message = generateErrorMessage(_this);
        else _this.message = errorMessage;
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError1.prototype;
        return _this;
    }
    return ApolloError1;
}(Error);
var FetchType;
(function(FetchType1) {
    FetchType1[FetchType1["normal"] = 1] = "normal";
    FetchType1[FetchType1["refetch"] = 2] = "refetch";
    FetchType1[FetchType1["poll"] = 3] = "poll";
})(FetchType || (FetchType = {
}));
var hasError = function(storeValue, policy) {
    if (policy === void 0) policy = 'none';
    return storeValue && (storeValue.networkError || policy === 'none' && isNonEmptyArray(storeValue.graphQLErrors));
};
var ObservableQuery = function(_super) {
    _tslib.__extends(ObservableQuery1, _super);
    function ObservableQuery1(_a) {
        var queryManager = _a.queryManager, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = _super.call(this, function(observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.isTornDown = false;
        _this.options = options;
        _this.variables = options.variables || {
        };
        _this.queryId = queryManager.generateQueryId();
        _this.shouldSubscribe = shouldSubscribe;
        var opDef = _apolloUtilities.getOperationDefinition(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.queryManager = queryManager;
        return _this;
    }
    ObservableQuery1.prototype.result = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var observer = {
                next: function(result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) _this.queryManager.removeQuery(_this.queryId);
                    setTimeout(function() {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery1.prototype.currentResult = function() {
        var result = this.getCurrentResult();
        if (result.data === undefined) result.data = {
        };
        return result;
    };
    ObservableQuery1.prototype.getCurrentResult = function() {
        if (this.isTornDown) {
            var lastResult = this.lastResult;
            return {
                data: !this.lastError && lastResult && lastResult.data || void 0,
                error: this.lastError,
                loading: false,
                networkStatus: NetworkStatus.error
            };
        }
        var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        var result;
        var fetchPolicy = this.options.fetchPolicy;
        var isNetworkFetchPolicy = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
        if (queryStoreValue) {
            var networkStatus = queryStoreValue.networkStatus;
            if (hasError(queryStoreValue, this.options.errorPolicy)) return {
                data: void 0,
                loading: false,
                networkStatus: networkStatus,
                error: new ApolloError({
                    graphQLErrors: queryStoreValue.graphQLErrors,
                    networkError: queryStoreValue.networkError
                })
            };
            if (queryStoreValue.variables) {
                this.options.variables = _tslib.__assign(_tslib.__assign({
                }, this.options.variables), queryStoreValue.variables);
                this.variables = this.options.variables;
            }
            result = {
                data: data,
                loading: isNetworkRequestInFlight(networkStatus),
                networkStatus: networkStatus
            };
            if (queryStoreValue.graphQLErrors && this.options.errorPolicy === 'all') result.errors = queryStoreValue.graphQLErrors;
        } else {
            var loading = isNetworkFetchPolicy || partial && fetchPolicy !== 'cache-only';
            result = {
                data: data,
                loading: loading,
                networkStatus: loading ? NetworkStatus.loading : NetworkStatus.ready
            };
        }
        if (!partial) this.updateLastResult(_tslib.__assign(_tslib.__assign({
        }, result), {
            stale: false
        }));
        return _tslib.__assign(_tslib.__assign({
        }, result), {
            partial: partial
        });
    };
    ObservableQuery1.prototype.isDifferentFromLastResult = function(newResult) {
        var snapshot = this.lastResultSnapshot;
        return !(snapshot && newResult && snapshot.networkStatus === newResult.networkStatus && snapshot.stale === newResult.stale && _apolloUtilities.isEqual(snapshot.data, newResult.data));
    };
    ObservableQuery1.prototype.getLastResult = function() {
        return this.lastResult;
    };
    ObservableQuery1.prototype.getLastError = function() {
        return this.lastError;
    };
    ObservableQuery1.prototype.resetLastResults = function() {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery1.prototype.resetQueryStoreErrors = function() {
        var queryStore = this.queryManager.queryStore.get(this.queryId);
        if (queryStore) {
            queryStore.networkError = null;
            queryStore.graphQLErrors = [];
        }
    };
    ObservableQuery1.prototype.refetch = function(variables) {
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-only') return Promise.reject(new _tsInvariant.InvariantError('cache-only fetchPolicy option should not be used together with query refetch.'));
        if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'cache-and-network') fetchPolicy = 'network-only';
        if (!_apolloUtilities.isEqual(this.variables, variables)) this.variables = _tslib.__assign(_tslib.__assign({
        }, this.variables), variables);
        if (!_apolloUtilities.isEqual(this.options.variables, this.variables)) this.options.variables = _tslib.__assign(_tslib.__assign({
        }, this.options.variables), this.variables);
        return this.queryManager.fetchQuery(this.queryId, _tslib.__assign(_tslib.__assign({
        }, this.options), {
            fetchPolicy: fetchPolicy
        }), FetchType.refetch);
    };
    ObservableQuery1.prototype.fetchMore = function(fetchMoreOptions) {
        var _this = this;
        _tsInvariant.invariant(fetchMoreOptions.updateQuery, 'updateQuery option is required. This function defines how to update the query data with the new results.');
        var combinedOptions = _tslib.__assign(_tslib.__assign({
        }, fetchMoreOptions.query ? fetchMoreOptions : _tslib.__assign(_tslib.__assign(_tslib.__assign({
        }, this.options), fetchMoreOptions), {
            variables: _tslib.__assign(_tslib.__assign({
            }, this.variables), fetchMoreOptions.variables)
        })), {
            fetchPolicy: 'network-only'
        });
        var qid = this.queryManager.generateQueryId();
        return this.queryManager.fetchQuery(qid, combinedOptions, FetchType.normal, this.queryId).then(function(fetchMoreResult) {
            _this.updateQuery(function(previousResult) {
                return fetchMoreOptions.updateQuery(previousResult, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables
                });
            });
            _this.queryManager.stopQuery(qid);
            return fetchMoreResult;
        }, function(error) {
            _this.queryManager.stopQuery(qid);
            throw error;
        });
    };
    ObservableQuery1.prototype.subscribeToMore = function(options) {
        var _this = this;
        var subscription = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables
        }).subscribe({
            next: function(subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) _this.updateQuery(function(previous, _a) {
                    var variables = _a.variables;
                    return updateQuery(previous, {
                        subscriptionData: subscriptionData,
                        variables: variables
                    });
                });
            },
            error: function(err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                _tsInvariant.invariant.error('Unhandled GraphQL subscription error', err);
            }
        });
        this.subscriptions.add(subscription);
        return function() {
            if (_this.subscriptions.delete(subscription)) subscription.unsubscribe();
        };
    };
    ObservableQuery1.prototype.setOptions = function(opts) {
        var oldFetchPolicy = this.options.fetchPolicy;
        this.options = _tslib.__assign(_tslib.__assign({
        }, this.options), opts);
        if (opts.pollInterval) this.startPolling(opts.pollInterval);
        else if (opts.pollInterval === 0) this.stopPolling();
        var fetchPolicy = opts.fetchPolicy;
        return this.setVariables(this.options.variables, oldFetchPolicy !== fetchPolicy && (oldFetchPolicy === 'cache-only' || oldFetchPolicy === 'standby' || fetchPolicy === 'network-only'), opts.fetchResults);
    };
    ObservableQuery1.prototype.setVariables = function(variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) tryFetch = false;
        if (fetchResults === void 0) fetchResults = true;
        this.isTornDown = false;
        variables = variables || this.variables;
        if (!tryFetch && _apolloUtilities.isEqual(variables, this.variables)) return this.observers.size && fetchResults ? this.result() : Promise.resolve();
        this.variables = this.options.variables = variables;
        if (!this.observers.size) return Promise.resolve();
        return this.queryManager.fetchQuery(this.queryId, this.options);
    };
    ObservableQuery1.prototype.updateQuery = function(mapFn) {
        var queryManager = this.queryManager;
        var _a = queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = _apolloUtilities.tryFunctionOrLogError(function() {
            return mapFn(previousResult, {
                variables: variables
            });
        });
        if (newResult) {
            queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery1.prototype.stopPolling = function() {
        this.queryManager.stopPollingQuery(this.queryId);
        this.options.pollInterval = undefined;
    };
    ObservableQuery1.prototype.startPolling = function(pollInterval) {
        assertNotCacheFirstOrOnly(this);
        this.options.pollInterval = pollInterval;
        this.queryManager.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery1.prototype.updateLastResult = function(newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults ? newResult : _apolloUtilities.cloneDeep(newResult);
        return previousResult;
    };
    ObservableQuery1.prototype.onSubscribe = function(observer) {
        var _this = this;
        try {
            var subObserver = observer._subscription._observer;
            if (subObserver && !subObserver.error) subObserver.error = defaultSubscriptionObserverErrorCallback;
        } catch (_a) {
        }
        var first = !this.observers.size;
        this.observers.add(observer);
        if (observer.next && this.lastResult) observer.next(this.lastResult);
        if (observer.error && this.lastError) observer.error(this.lastError);
        if (first) this.setUpQuery();
        return function() {
            if (_this.observers.delete(observer) && !_this.observers.size) _this.tearDownQuery();
        };
    };
    ObservableQuery1.prototype.setUpQuery = function() {
        var _this = this;
        var _a1 = this, queryManager = _a1.queryManager, queryId = _a1.queryId;
        if (this.shouldSubscribe) queryManager.addObservableQuery(queryId, this);
        if (this.options.pollInterval) {
            assertNotCacheFirstOrOnly(this);
            queryManager.startPollingQuery(this.options, queryId);
        }
        var onError = function(error) {
            _this.updateLastResult(_tslib.__assign(_tslib.__assign({
            }, _this.lastResult), {
                errors: error.graphQLErrors,
                networkStatus: NetworkStatus.error,
                loading: false
            }));
            iterateObserversSafely(_this.observers, 'error', _this.lastError = error);
        };
        queryManager.observeQuery(queryId, this.options, {
            next: function(result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    var previousResult_1 = _this.updateLastResult(result);
                    var _a = _this.options, query_1 = _a.query, variables1 = _a.variables, fetchPolicy_1 = _a.fetchPolicy;
                    if (queryManager.transform(query_1).hasClientExports) queryManager.getLocalState().addExportedVariables(query_1, variables1).then(function(variables) {
                        var previousVariables = _this.variables;
                        _this.variables = _this.options.variables = variables;
                        if (!result.loading && previousResult_1 && fetchPolicy_1 !== 'cache-only' && queryManager.transform(query_1).serverQuery && !_apolloUtilities.isEqual(previousVariables, variables)) _this.refetch();
                        else iterateObserversSafely(_this.observers, 'next', result);
                    });
                    else iterateObserversSafely(_this.observers, 'next', result);
                }
            },
            error: onError
        }).catch(onError);
    };
    ObservableQuery1.prototype.tearDownQuery = function() {
        var queryManager = this.queryManager;
        this.isTornDown = true;
        queryManager.stopPollingQuery(this.queryId);
        this.subscriptions.forEach(function(sub) {
            return sub.unsubscribe();
        });
        this.subscriptions.clear();
        queryManager.removeObservableQuery(this.queryId);
        queryManager.stopQuery(this.queryId);
        this.observers.clear();
    };
    return ObservableQuery1;
}(Observable);
function defaultSubscriptionObserverErrorCallback(error) {
    _tsInvariant.invariant.error('Unhandled error', error.message, error.stack);
}
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function(obs) {
        return obs[method] && observersWithMethod.push(obs);
    });
    observersWithMethod.forEach(function(obs) {
        return obs[method](argument);
    });
}
function assertNotCacheFirstOrOnly(obsQuery) {
    var fetchPolicy = obsQuery.options.fetchPolicy;
    _tsInvariant.invariant(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
}
var MutationStore = function() {
    function MutationStore1() {
        this.store = {
        };
    }
    MutationStore1.prototype.getStore = function() {
        return this.store;
    };
    MutationStore1.prototype.get = function(mutationId) {
        return this.store[mutationId];
    };
    MutationStore1.prototype.initMutation = function(mutationId, mutation, variables) {
        this.store[mutationId] = {
            mutation: mutation,
            variables: variables || {
            },
            loading: true,
            error: null
        };
    };
    MutationStore1.prototype.markMutationError = function(mutationId, error) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = error;
        }
    };
    MutationStore1.prototype.markMutationResult = function(mutationId) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = null;
        }
    };
    MutationStore1.prototype.reset = function() {
        this.store = {
        };
    };
    return MutationStore1;
}();
var QueryStore = function() {
    function QueryStore1() {
        this.store = {
        };
    }
    QueryStore1.prototype.getStore = function() {
        return this.store;
    };
    QueryStore1.prototype.get = function(queryId) {
        return this.store[queryId];
    };
    QueryStore1.prototype.initQuery = function(query) {
        var previousQuery = this.store[query.queryId];
        _tsInvariant.invariant(!previousQuery || previousQuery.document === query.document || _apolloUtilities.isEqual(previousQuery.document, query.document), 'Internal Error: may not update existing query string in store');
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables && previousQuery && previousQuery.networkStatus !== NetworkStatus.loading) {
            if (!_apolloUtilities.isEqual(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) networkStatus = NetworkStatus.setVariables;
        else if (query.isPoll) networkStatus = NetworkStatus.poll;
        else if (query.isRefetch) networkStatus = NetworkStatus.refetch;
        else networkStatus = NetworkStatus.loading;
        var graphQLErrors = [];
        if (previousQuery && previousQuery.graphQLErrors) graphQLErrors = previousQuery.graphQLErrors;
        this.store[query.queryId] = {
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: graphQLErrors,
            networkStatus: networkStatus,
            metadata: query.metadata
        };
        if (typeof query.fetchMoreForQueryId === 'string' && this.store[query.fetchMoreForQueryId]) this.store[query.fetchMoreForQueryId].networkStatus = NetworkStatus.fetchMore;
    };
    QueryStore1.prototype.markQueryResult = function(queryId, result, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId]) return;
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = NetworkStatus.ready;
        if (typeof fetchMoreForQueryId === 'string' && this.store[fetchMoreForQueryId]) this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
    };
    QueryStore1.prototype.markQueryError = function(queryId, error, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId]) return;
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = NetworkStatus.error;
        if (typeof fetchMoreForQueryId === 'string') this.markQueryResultClient(fetchMoreForQueryId, true);
    };
    QueryStore1.prototype.markQueryResultClient = function(queryId, complete) {
        var storeValue = this.store && this.store[queryId];
        if (storeValue) {
            storeValue.networkError = null;
            storeValue.previousVariables = null;
            if (complete) storeValue.networkStatus = NetworkStatus.ready;
        }
    };
    QueryStore1.prototype.stopQuery = function(queryId) {
        delete this.store[queryId];
    };
    QueryStore1.prototype.reset = function(observableQueryIds) {
        var _this = this;
        Object.keys(this.store).forEach(function(queryId) {
            if (observableQueryIds.indexOf(queryId) < 0) _this.stopQuery(queryId);
            else _this.store[queryId].networkStatus = NetworkStatus.loading;
        });
    };
    return QueryStore1;
}();
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var LocalState = function() {
    function LocalState1(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) this.client = client;
        if (resolvers) this.addResolvers(resolvers);
        if (fragmentMatcher) this.setFragmentMatcher(fragmentMatcher);
    }
    LocalState1.prototype.addResolvers = function(resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {
        };
        if (Array.isArray(resolvers)) resolvers.forEach(function(resolverGroup) {
            _this.resolvers = _apolloUtilities.mergeDeep(_this.resolvers, resolverGroup);
        });
        else this.resolvers = _apolloUtilities.mergeDeep(this.resolvers, resolvers);
    };
    LocalState1.prototype.setResolvers = function(resolvers) {
        this.resolvers = {
        };
        this.addResolvers(resolvers);
    };
    LocalState1.prototype.getResolvers = function() {
        return this.resolvers || {
        };
    };
    LocalState1.prototype.runResolvers = function(_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return _tslib.__awaiter(this, void 0, void 0, function() {
            return _tslib.__generator(this, function(_c) {
                if (document) return [
                    2,
                    this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
                        return _tslib.__assign(_tslib.__assign({
                        }, remoteResult), {
                            data: localResult.result
                        });
                    })
                ];
                return [
                    2,
                    remoteResult
                ];
            });
        });
    };
    LocalState1.prototype.setFragmentMatcher = function(fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState1.prototype.getFragmentMatcher = function() {
        return this.fragmentMatcher;
    };
    LocalState1.prototype.clientQuery = function(document) {
        if (_apolloUtilities.hasDirectives([
            'client'
        ], document)) {
            if (this.resolvers) return document;
            _tsInvariant.invariant.warn("Found @client directives in a query but no ApolloClient resolvers were specified. This means ApolloClient local resolver handling has been disabled, and @client directives will be passed through to your link chain.");
        }
        return null;
    };
    LocalState1.prototype.serverQuery = function(document) {
        return this.resolvers ? _apolloUtilities.removeClientSetsFromDocument(document) : document;
    };
    LocalState1.prototype.prepareContext = function(context) {
        if (context === void 0) context = {
        };
        var cache = this.cache;
        var newContext = _tslib.__assign(_tslib.__assign({
        }, context), {
            cache: cache,
            getCacheKey: function(obj) {
                if (cache.config) return cache.config.dataIdFromObject(obj);
                else _tsInvariant.invariant(false, "To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.");
            }
        });
        return newContext;
    };
    LocalState1.prototype.addExportedVariables = function(document, variables, context) {
        if (variables === void 0) variables = {
        };
        if (context === void 0) context = {
        };
        return _tslib.__awaiter(this, void 0, void 0, function() {
            return _tslib.__generator(this, function(_a) {
                if (document) return [
                    2,
                    this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {
                    }, this.prepareContext(context), variables).then(function(data) {
                        return _tslib.__assign(_tslib.__assign({
                        }, variables), data.exportedVariables);
                    })
                ];
                return [
                    2,
                    _tslib.__assign({
                    }, variables)
                ];
            });
        });
    };
    LocalState1.prototype.shouldForceResolvers = function(document) {
        var forceResolvers = false;
        _visitor.visit(document, {
            Directive: {
                enter: function(node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function(arg) {
                            return arg.name.value === 'always' && arg.value.kind === 'BooleanValue' && arg.value.value === true;
                        });
                        if (forceResolvers) return _visitor.BREAK;
                    }
                }
            }
        });
        return forceResolvers;
    };
    LocalState1.prototype.buildRootValueFromCache = function(document, variables) {
        return this.cache.diff({
            query: _apolloUtilities.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false
        }).result;
    };
    LocalState1.prototype.resolveDocument = function(document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) context = {
        };
        if (variables === void 0) variables = {
        };
        if (fragmentMatcher === void 0) fragmentMatcher = function() {
            return true;
        };
        if (onlyRunForcedResolvers === void 0) onlyRunForcedResolvers = false;
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return _tslib.__generator(this, function(_b) {
                mainDefinition = _apolloUtilities.getMainDefinition(document);
                fragments = _apolloUtilities.getFragmentDefinitions(document);
                fragmentMap = _apolloUtilities.createFragmentMap(fragments);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation ? capitalizeFirstLetter(definitionOperation) : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: _tslib.__assign(_tslib.__assign({
                    }, context), {
                        cache: cache,
                        client: client
                    }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {
                    },
                    onlyRunForcedResolvers: onlyRunForcedResolvers
                };
                return [
                    2,
                    this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result) {
                        return {
                            result: result,
                            exportedVariables: execContext.exportedVariables
                        };
                    })
                ];
            });
        });
    };
    LocalState1.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return _tslib.__generator(this, function(_a2) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [
                    rootValue
                ];
                execute = function(selection) {
                    return _tslib.__awaiter(_this, void 0, void 0, function() {
                        var fragment, typeCondition;
                        return _tslib.__generator(this, function(_a3) {
                            if (!_apolloUtilities.shouldInclude(selection, variables)) return [
                                2
                            ];
                            if (_apolloUtilities.isField(selection)) return [
                                2,
                                this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') resultsToMerge.push((_a = {
                                    }, _a[_apolloUtilities.resultKeyNameFromField(selection)] = fieldResult, _a));
                                })
                            ];
                            if (_apolloUtilities.isInlineFragment(selection)) fragment = selection;
                            else {
                                fragment = fragmentMap[selection.name.value];
                                _tsInvariant.invariant(fragment, "No fragment named " + selection.name.value);
                            }
                            if (fragment && fragment.typeCondition) {
                                typeCondition = fragment.typeCondition.name.value;
                                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) return [
                                    2,
                                    this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })
                                ];
                            }
                            return [
                                2
                            ];
                        });
                    });
                };
                return [
                    2,
                    Promise.all(selectionSet.selections.map(execute)).then(function() {
                        return _apolloUtilities.mergeDeepArray(resultsToMerge);
                    })
                ];
            });
        });
    };
    LocalState1.prototype.resolveField = function(field, rootValue, execContext) {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return _tslib.__generator(this, function(_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = _apolloUtilities.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) resultPromise = Promise.resolve(resolve(rootValue, _apolloUtilities.argumentsObjectFromField(field, variables), execContext.context, {
                            field: field,
                            fragmentMap: execContext.fragmentMap
                        }));
                    }
                }
                return [
                    2,
                    resultPromise.then(function(result) {
                        if (result === void 0) result = defaultResult;
                        if (field.directives) field.directives.forEach(function(directive) {
                            if (directive.name.value === 'export' && directive.arguments) directive.arguments.forEach(function(arg) {
                                if (arg.name.value === 'as' && arg.value.kind === 'StringValue') execContext.exportedVariables[arg.value.value] = result;
                            });
                        });
                        if (!field.selectionSet) return result;
                        if (result == null) return result;
                        if (Array.isArray(result)) return _this.resolveSubSelectedArray(field, result, execContext);
                        if (field.selectionSet) return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                    })
                ];
            });
        });
    };
    LocalState1.prototype.resolveSubSelectedArray = function(field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function(item) {
            if (item === null) return null;
            if (Array.isArray(item)) return _this.resolveSubSelectedArray(field, item, execContext);
            if (field.selectionSet) return _this.resolveSelectionSet(field.selectionSet, item, execContext);
        }));
    };
    return LocalState1;
}();
function multiplex(inner) {
    var observers = new Set();
    var sub = null;
    return new Observable(function(observer) {
        observers.add(observer);
        sub = sub || inner.subscribe({
            next: function(value) {
                observers.forEach(function(obs) {
                    return obs.next && obs.next(value);
                });
            },
            error: function(error) {
                observers.forEach(function(obs) {
                    return obs.error && obs.error(error);
                });
            },
            complete: function() {
                observers.forEach(function(obs) {
                    return obs.complete && obs.complete();
                });
            }
        });
        return function() {
            if (observers.delete(observer) && !observers.size && sub) {
                sub.unsubscribe();
                sub = null;
            }
        };
    });
}
function asyncMap(observable, mapFn) {
    return new Observable(function(observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeNextCount = 0;
        var completed = false;
        var handler = {
            next: function(value) {
                ++activeNextCount;
                new Promise(function(resolve) {
                    resolve(mapFn(value));
                }).then(function(result) {
                    --activeNextCount;
                    next && next.call(observer, result);
                    completed && handler.complete();
                }, function(e) {
                    --activeNextCount;
                    error && error.call(observer, e);
                });
            },
            error: function(e) {
                error && error.call(observer, e);
            },
            complete: function() {
                completed = true;
                if (!activeNextCount) complete && complete.call(observer);
            }
        };
        var sub = observable.subscribe(handler);
        return function() {
            return sub.unsubscribe();
        };
    });
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
    function QueryManager1(_a) {
        var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function() {
            return undefined;
        } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d, _e = _a.clientAwareness, clientAwareness = _e === void 0 ? {
        } : _e, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.mutationStore = new MutationStore();
        this.queryStore = new QueryStore();
        this.clientAwareness = {
        };
        this.idCounter = 1;
        this.queries = new Map();
        this.fetchQueryRejectFns = new Map();
        this.transformCache = new (_apolloUtilities.canUseWeakMap ? WeakMap : Map)();
        this.inFlightLinkObservables = new Map();
        this.pollingInfoByQueryId = new Map();
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.dataStore = store;
        this.onBroadcast = onBroadcast;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({
            cache: store.getCache()
        });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
    }
    QueryManager1.prototype.stop = function() {
        var _this = this;
        this.queries.forEach(function(_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.fetchQueryRejectFns.forEach(function(reject) {
            reject(new _tsInvariant.InvariantError('QueryManager stopped while query was in flight'));
        });
    };
    QueryManager1.prototype.mutate = function(_a4) {
        var mutation = _a4.mutation, variables = _a4.variables, optimisticResponse = _a4.optimisticResponse, updateQueriesByName = _a4.updateQueries, _b = _a4.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a4.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a4.update, _d = _a4.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a4.fetchPolicy, _e = _a4.context, context = _e === void 0 ? {
        } : _e;
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var mutationId, generateUpdateQueriesInfo, self;
            var _this = this;
            return _tslib.__generator(this, function(_f) {
                switch(_f.label){
                    case 0:
                        _tsInvariant.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
                        _tsInvariant.invariant(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.");
                        mutationId = this.generateQueryId();
                        mutation = this.transform(mutation).document;
                        this.setQuery(mutationId, function() {
                            return {
                                document: mutation
                            };
                        });
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            this.localState.addExportedVariables(mutation, variables, context)
                        ];
                    case 1:
                        variables = _f.sent();
                        _f.label = 2;
                    case 2:
                        generateUpdateQueriesInfo = function() {
                            var ret = {
                            };
                            if (updateQueriesByName) _this.queries.forEach(function(_a, queryId) {
                                var observableQuery = _a.observableQuery;
                                if (observableQuery) {
                                    var queryName = observableQuery.queryName;
                                    if (queryName && hasOwnProperty.call(updateQueriesByName, queryName)) ret[queryId] = {
                                        updater: updateQueriesByName[queryName],
                                        query: _this.queryStore.get(queryId)
                                    };
                                }
                            });
                            return ret;
                        };
                        this.mutationStore.initMutation(mutationId, mutation, variables);
                        this.dataStore.markMutationInit({
                            mutationId: mutationId,
                            document: mutation,
                            variables: variables,
                            updateQueries: generateUpdateQueriesInfo(),
                            update: updateWithProxyFn,
                            optimisticResponse: optimisticResponse
                        });
                        this.broadcastQueries();
                        self = this;
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                var storeResult;
                                var error;
                                self.getObservableFromLink(mutation, _tslib.__assign(_tslib.__assign({
                                }, context), {
                                    optimisticResponse: optimisticResponse
                                }), variables, false).subscribe({
                                    next: function(result) {
                                        if (_apolloUtilities.graphQLResultHasError(result) && errorPolicy === 'none') {
                                            error = new ApolloError({
                                                graphQLErrors: result.errors
                                            });
                                            return;
                                        }
                                        self.mutationStore.markMutationResult(mutationId);
                                        if (fetchPolicy !== 'no-cache') self.dataStore.markMutationResult({
                                            mutationId: mutationId,
                                            result: result,
                                            document: mutation,
                                            variables: variables,
                                            updateQueries: generateUpdateQueriesInfo(),
                                            update: updateWithProxyFn
                                        });
                                        storeResult = result;
                                    },
                                    error: function(err) {
                                        self.mutationStore.markMutationError(mutationId, err);
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse
                                        });
                                        self.broadcastQueries();
                                        self.setQuery(mutationId, function() {
                                            return {
                                                document: null
                                            };
                                        });
                                        reject(new ApolloError({
                                            networkError: err
                                        }));
                                    },
                                    complete: function() {
                                        if (error) self.mutationStore.markMutationError(mutationId, error);
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse
                                        });
                                        self.broadcastQueries();
                                        if (error) {
                                            reject(error);
                                            return;
                                        }
                                        if (typeof refetchQueries === 'function') refetchQueries = refetchQueries(storeResult);
                                        var refetchQueryPromises = [];
                                        if (isNonEmptyArray(refetchQueries)) refetchQueries.forEach(function(refetchQuery) {
                                            if (typeof refetchQuery === 'string') self.queries.forEach(function(_a) {
                                                var observableQuery = _a.observableQuery;
                                                if (observableQuery && observableQuery.queryName === refetchQuery) refetchQueryPromises.push(observableQuery.refetch());
                                            });
                                            else {
                                                var queryOptions = {
                                                    query: refetchQuery.query,
                                                    variables: refetchQuery.variables,
                                                    fetchPolicy: 'network-only'
                                                };
                                                if (refetchQuery.context) queryOptions.context = refetchQuery.context;
                                                refetchQueryPromises.push(self.query(queryOptions));
                                            }
                                        });
                                        Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function() {
                                            self.setQuery(mutationId, function() {
                                                return {
                                                    document: null
                                                };
                                            });
                                            if (errorPolicy === 'ignore' && storeResult && _apolloUtilities.graphQLResultHasError(storeResult)) delete storeResult.errors;
                                            resolve(storeResult);
                                        });
                                    }
                                });
                            })
                        ];
                }
            });
        });
    };
    QueryManager1.prototype.fetchQuery = function(queryId, options, fetchType, fetchMoreForQueryId) {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var _a, metadata, _b, fetchPolicy, _c, context, query, variables, storeResult, isNetworkOnly, needToFetch, _d, complete, result1, shouldFetch, requestId, cancel, networkResult;
            var _this = this;
            return _tslib.__generator(this, function(_e) {
                switch(_e.label){
                    case 0:
                        _a = options.metadata, metadata = _a === void 0 ? null : _a, _b = options.fetchPolicy, fetchPolicy = _b === void 0 ? 'cache-first' : _b, _c = options.context, context = _c === void 0 ? {
                        } : _c;
                        query = this.transform(options.query).document;
                        variables = this.getVariables(query, options.variables);
                        if (!this.transform(query).hasClientExports) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            this.localState.addExportedVariables(query, variables, context)
                        ];
                    case 1:
                        variables = _e.sent();
                        _e.label = 2;
                    case 2:
                        options = _tslib.__assign(_tslib.__assign({
                        }, options), {
                            variables: variables
                        });
                        isNetworkOnly = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
                        needToFetch = isNetworkOnly;
                        if (!isNetworkOnly) {
                            _d = this.dataStore.getCache().diff({
                                query: query,
                                variables: variables,
                                returnPartialData: true,
                                optimistic: false
                            }), complete = _d.complete, result1 = _d.result;
                            needToFetch = !complete || fetchPolicy === 'cache-and-network';
                            storeResult = result1;
                        }
                        shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
                        if (_apolloUtilities.hasDirectives([
                            'live'
                        ], query)) shouldFetch = true;
                        requestId = this.idCounter++;
                        cancel = fetchPolicy !== 'no-cache' ? this.updateQueryWatch(queryId, query, options) : undefined;
                        this.setQuery(queryId, function() {
                            return {
                                document: query,
                                lastRequestId: requestId,
                                invalidated: true,
                                cancel: cancel
                            };
                        });
                        this.invalidate(fetchMoreForQueryId);
                        this.queryStore.initQuery({
                            queryId: queryId,
                            document: query,
                            storePreviousVariables: shouldFetch,
                            variables: variables,
                            isPoll: fetchType === FetchType.poll,
                            isRefetch: fetchType === FetchType.refetch,
                            metadata: metadata,
                            fetchMoreForQueryId: fetchMoreForQueryId
                        });
                        this.broadcastQueries();
                        if (shouldFetch) {
                            networkResult = this.fetchRequest({
                                requestId: requestId,
                                queryId: queryId,
                                document: query,
                                options: options,
                                fetchMoreForQueryId: fetchMoreForQueryId
                            }).catch(function(error) {
                                if (isApolloError(error)) throw error;
                                else {
                                    if (requestId >= _this.getQuery(queryId).lastRequestId) {
                                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                                        _this.invalidate(queryId);
                                        _this.invalidate(fetchMoreForQueryId);
                                        _this.broadcastQueries();
                                    }
                                    throw new ApolloError({
                                        networkError: error
                                    });
                                }
                            });
                            if (fetchPolicy !== 'cache-and-network') return [
                                2,
                                networkResult
                            ];
                            networkResult.catch(function() {
                            });
                        }
                        this.queryStore.markQueryResultClient(queryId, !shouldFetch);
                        this.invalidate(queryId);
                        this.invalidate(fetchMoreForQueryId);
                        if (this.transform(query).hasForcedResolvers) return [
                            2,
                            this.localState.runResolvers({
                                document: query,
                                remoteResult: {
                                    data: storeResult
                                },
                                context: context,
                                variables: variables,
                                onlyRunForcedResolvers: true
                            }).then(function(result) {
                                _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);
                                _this.broadcastQueries();
                                return result;
                            })
                        ];
                        this.broadcastQueries();
                        return [
                            2,
                            {
                                data: storeResult
                            }
                        ];
                }
            });
        });
    };
    QueryManager1.prototype.markQueryResult = function(queryId, result, _a, fetchMoreForQueryId) {
        var fetchPolicy = _a.fetchPolicy, variables = _a.variables, errorPolicy = _a.errorPolicy;
        if (fetchPolicy === 'no-cache') this.setQuery(queryId, function() {
            return {
                newData: {
                    result: result.data,
                    complete: true
                }
            };
        });
        else this.dataStore.markQueryResult(result, this.getQuery(queryId).document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
    };
    QueryManager1.prototype.queryListenerForObserver = function(queryId, options, observer) {
        var _this = this;
        function invoke(method, argument) {
            if (observer[method]) try {
                observer[method](argument);
            } catch (e) {
                _tsInvariant.invariant.error(e);
            }
            else if (method === 'error') _tsInvariant.invariant.error(argument);
        }
        return function(queryStoreValue, newData) {
            _this.invalidate(queryId, false);
            if (!queryStoreValue) return;
            var _a = _this.getQuery(queryId), observableQuery = _a.observableQuery, document = _a.document;
            var fetchPolicy = observableQuery ? observableQuery.options.fetchPolicy : options.fetchPolicy;
            if (fetchPolicy === 'standby') return;
            var loading = isNetworkRequestInFlight(queryStoreValue.networkStatus);
            var lastResult = observableQuery && observableQuery.getLastResult();
            var networkStatusChanged = !!(lastResult && lastResult.networkStatus !== queryStoreValue.networkStatus);
            var shouldNotifyIfLoading = options.returnPartialData || !newData && queryStoreValue.previousVariables || networkStatusChanged && options.notifyOnNetworkStatusChange || fetchPolicy === 'cache-only' || fetchPolicy === 'cache-and-network';
            if (loading && !shouldNotifyIfLoading) return;
            var hasGraphQLErrors = isNonEmptyArray(queryStoreValue.graphQLErrors);
            var errorPolicy = observableQuery && observableQuery.options.errorPolicy || options.errorPolicy || 'none';
            if (errorPolicy === 'none' && hasGraphQLErrors || queryStoreValue.networkError) return invoke('error', new ApolloError({
                graphQLErrors: queryStoreValue.graphQLErrors,
                networkError: queryStoreValue.networkError
            }));
            try {
                var data = void 0;
                var isMissing = void 0;
                if (newData) {
                    if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'network-only') _this.setQuery(queryId, function() {
                        return {
                            newData: null
                        };
                    });
                    data = newData.result;
                    isMissing = !newData.complete;
                } else {
                    var lastError = observableQuery && observableQuery.getLastError();
                    var errorStatusChanged = errorPolicy !== 'none' && (lastError && lastError.graphQLErrors) !== queryStoreValue.graphQLErrors;
                    if (lastResult && lastResult.data && !errorStatusChanged) {
                        data = lastResult.data;
                        isMissing = false;
                    } else {
                        var diffResult = _this.dataStore.getCache().diff({
                            query: document,
                            variables: queryStoreValue.previousVariables || queryStoreValue.variables,
                            returnPartialData: true,
                            optimistic: true
                        });
                        data = diffResult.result;
                        isMissing = !diffResult.complete;
                    }
                }
                var stale = isMissing && !(options.returnPartialData || fetchPolicy === 'cache-only');
                var resultFromStore = {
                    data: stale ? lastResult && lastResult.data : data,
                    loading: loading,
                    networkStatus: queryStoreValue.networkStatus,
                    stale: stale
                };
                if (errorPolicy === 'all' && hasGraphQLErrors) resultFromStore.errors = queryStoreValue.graphQLErrors;
                invoke('next', resultFromStore);
            } catch (networkError) {
                invoke('error', new ApolloError({
                    networkError: networkError
                }));
            }
        };
    };
    QueryManager1.prototype.transform = function(document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var cache = this.dataStore.getCache();
            var transformed = cache.transformDocument(document);
            var forLink = _apolloUtilities.removeConnectionDirectiveFromDocument(cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: _apolloUtilities.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: _apolloUtilities.getDefaultValues(_apolloUtilities.getOperationDefinition(transformed))
            };
            var add = function(doc) {
                if (doc && !transformCache.has(doc)) transformCache.set(doc, cacheEntry_1);
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager1.prototype.getVariables = function(document, variables) {
        return _tslib.__assign(_tslib.__assign({
        }, this.transform(document).defaultVars), variables);
    };
    QueryManager1.prototype.watchQuery = function(options, shouldSubscribe) {
        if (shouldSubscribe === void 0) shouldSubscribe = true;
        _tsInvariant.invariant(options.fetchPolicy !== 'standby', 'client.watchQuery cannot be called with fetchPolicy set to "standby"');
        options.variables = this.getVariables(options.query, options.variables);
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') options.notifyOnNetworkStatusChange = false;
        var transformedOptions = _tslib.__assign({
        }, options);
        return new ObservableQuery({
            queryManager: this,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe
        });
    };
    QueryManager1.prototype.query = function(options) {
        var _this = this;
        _tsInvariant.invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.");
        _tsInvariant.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
        _tsInvariant.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
        _tsInvariant.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
        return new Promise(function(resolve, reject) {
            var watchedQuery = _this.watchQuery(options, false);
            _this.fetchQueryRejectFns.set("query:" + watchedQuery.queryId, reject);
            watchedQuery.result().then(resolve, reject).then(function() {
                return _this.fetchQueryRejectFns.delete("query:" + watchedQuery.queryId);
            });
        });
    };
    QueryManager1.prototype.generateQueryId = function() {
        return String(this.idCounter++);
    };
    QueryManager1.prototype.stopQueryInStore = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager1.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
        this.stopPollingQuery(queryId);
        this.queryStore.stopQuery(queryId);
        this.invalidate(queryId);
    };
    QueryManager1.prototype.addQueryListener = function(queryId, listener) {
        this.setQuery(queryId, function(_a) {
            var listeners = _a.listeners;
            listeners.add(listener);
            return {
                invalidated: false
            };
        });
    };
    QueryManager1.prototype.updateQueryWatch = function(queryId, document, options) {
        var _this = this;
        var cancel = this.getQuery(queryId).cancel;
        if (cancel) cancel();
        var previousResult1 = function() {
            var previousResult = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
                var lastResult = observableQuery.getLastResult();
                if (lastResult) previousResult = lastResult.data;
            }
            return previousResult;
        };
        return this.dataStore.getCache().watch({
            query: document,
            variables: options.variables,
            optimistic: true,
            previousResult: previousResult1,
            callback: function(newData) {
                _this.setQuery(queryId, function() {
                    return {
                        invalidated: true,
                        newData: newData
                    };
                });
            }
        });
    };
    QueryManager1.prototype.addObservableQuery = function(queryId, observableQuery) {
        this.setQuery(queryId, function() {
            return {
                observableQuery: observableQuery
            };
        });
    };
    QueryManager1.prototype.removeObservableQuery = function(queryId) {
        var cancel = this.getQuery(queryId).cancel;
        this.setQuery(queryId, function() {
            return {
                observableQuery: null
            };
        });
        if (cancel) cancel();
    };
    QueryManager1.prototype.clearStore = function() {
        this.fetchQueryRejectFns.forEach(function(reject) {
            reject(new _tsInvariant.InvariantError('Store reset while query was in flight (not completed in link chain)'));
        });
        var resetIds = [];
        this.queries.forEach(function(_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery) resetIds.push(queryId);
        });
        this.queryStore.reset(resetIds);
        this.mutationStore.reset();
        return this.dataStore.reset();
    };
    QueryManager1.prototype.resetStore = function() {
        var _this = this;
        return this.clearStore().then(function() {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager1.prototype.reFetchObservableQueries = function(includeStandby) {
        var _this = this;
        if (includeStandby === void 0) includeStandby = false;
        var observableQueryPromises = [];
        this.queries.forEach(function(_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery) {
                var fetchPolicy = observableQuery.options.fetchPolicy;
                observableQuery.resetLastResults();
                if (fetchPolicy !== 'cache-only' && (includeStandby || fetchPolicy !== 'standby')) observableQueryPromises.push(observableQuery.refetch());
                _this.setQuery(queryId, function() {
                    return {
                        newData: null
                    };
                });
                _this.invalidate(queryId);
            }
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager1.prototype.observeQuery = function(queryId, options, observer) {
        this.addQueryListener(queryId, this.queryListenerForObserver(queryId, options, observer));
        return this.fetchQuery(queryId, options);
    };
    QueryManager1.prototype.startQuery = function(queryId, options, listener) {
        _tsInvariant.invariant.warn("The QueryManager.startQuery method has been deprecated");
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options).catch(function() {
            return undefined;
        });
        return queryId;
    };
    QueryManager1.prototype.startGraphQLSubscription = function(_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, variables3 = _a.variables;
        query = this.transform(query).document;
        variables3 = this.getVariables(query, variables3);
        var makeObservable = function(variables) {
            return _this.getObservableFromLink(query, {
            }, variables, false).map(function(result) {
                if (!fetchPolicy || fetchPolicy !== 'no-cache') {
                    _this.dataStore.markSubscriptionResult(result, query, variables);
                    _this.broadcastQueries();
                }
                if (_apolloUtilities.graphQLResultHasError(result)) throw new ApolloError({
                    graphQLErrors: result.errors
                });
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables3).then(makeObservable);
            return new Observable(function(observer) {
                var sub = null;
                observablePromise_1.then(function(observable) {
                    return sub = observable.subscribe(observer);
                }, observer.error);
                return function() {
                    return sub && sub.unsubscribe();
                };
            });
        }
        return makeObservable(variables3);
    };
    QueryManager1.prototype.stopQuery = function(queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager1.prototype.stopQueryNoBroadcast = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager1.prototype.removeQuery = function(queryId) {
        this.fetchQueryRejectFns.delete("query:" + queryId);
        this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
        this.getQuery(queryId).subscriptions.forEach(function(x) {
            return x.unsubscribe();
        });
        this.queries.delete(queryId);
    };
    QueryManager1.prototype.getCurrentQueryResult = function(observableQuery, optimistic) {
        if (optimistic === void 0) optimistic = true;
        var _a = observableQuery.options, variables = _a.variables, query = _a.query, fetchPolicy = _a.fetchPolicy, returnPartialData = _a.returnPartialData;
        var lastResult = observableQuery.getLastResult();
        var newData = this.getQuery(observableQuery.queryId).newData;
        if (newData && newData.complete) return {
            data: newData.result,
            partial: false
        };
        if (fetchPolicy === 'no-cache' || fetchPolicy === 'network-only') return {
            data: undefined,
            partial: false
        };
        var _b = this.dataStore.getCache().diff({
            query: query,
            variables: variables,
            previousResult: lastResult ? lastResult.data : undefined,
            returnPartialData: true,
            optimistic: optimistic
        }), result = _b.result, complete = _b.complete;
        return {
            data: complete || returnPartialData ? result : void 0,
            partial: !complete
        };
    };
    QueryManager1.prototype.getQueryWithPreviousResult = function(queryIdOrObservable) {
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
            _tsInvariant.invariant(foundObserveableQuery, "ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            observableQuery = foundObserveableQuery;
        } else observableQuery = queryIdOrObservable;
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        return {
            previousResult: this.getCurrentQueryResult(observableQuery, false).data,
            variables: variables,
            document: query
        };
    };
    QueryManager1.prototype.broadcastQueries = function() {
        var _this = this;
        this.onBroadcast();
        this.queries.forEach(function(info, id) {
            if (info.invalidated) info.listeners.forEach(function(listener) {
                if (listener) listener(_this.queryStore.get(id), info.newData);
            });
        });
    };
    QueryManager1.prototype.getLocalState = function() {
        return this.localState;
    };
    QueryManager1.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
        var _this = this;
        if (deduplication === void 0) deduplication = this.queryDeduplication;
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _a = this, inFlightLinkObservables_1 = _a.inFlightLinkObservables, link = _a.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: _apolloUtilities.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(_tslib.__assign(_tslib.__assign({
                }, context), {
                    forceFetch: !deduplication
                }))
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = JSON.stringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    byVariables_1.set(varJson_1, observable = multiplex(_apolloLink.execute(link, operation)));
                    var cleanup = function() {
                        byVariables_1.delete(varJson_1);
                        if (!byVariables_1.size) inFlightLinkObservables_1.delete(serverQuery);
                        cleanupSub_1.unsubscribe();
                    };
                    var cleanupSub_1 = observable.subscribe({
                        next: cleanup,
                        error: cleanup,
                        complete: cleanup
                    });
                }
            } else observable = multiplex(_apolloLink.execute(link, operation));
        } else {
            observable = Observable.of({
                data: {
                }
            });
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) observable = asyncMap(observable, function(result) {
            return _this.localState.runResolvers({
                document: clientQuery,
                remoteResult: result,
                context: context,
                variables: variables
            });
        });
        return observable;
    };
    QueryManager1.prototype.fetchRequest = function(_a5) {
        var _this = this;
        var requestId = _a5.requestId, queryId = _a5.queryId, document = _a5.document, options = _a5.options, fetchMoreForQueryId = _a5.fetchMoreForQueryId;
        var variables = options.variables, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b, fetchPolicy = options.fetchPolicy;
        var resultFromStore;
        var errorsFromStore;
        return new Promise(function(resolve, reject) {
            var observable = _this.getObservableFromLink(document, options.context, variables);
            var fqrfId = "fetchRequest:" + queryId;
            _this.fetchQueryRejectFns.set(fqrfId, reject);
            var cleanup = function() {
                _this.fetchQueryRejectFns.delete(fqrfId);
                _this.setQuery(queryId, function(_a) {
                    var subscriptions = _a.subscriptions;
                    subscriptions.delete(subscription);
                });
            };
            var subscription = observable.map(function(result) {
                if (requestId >= _this.getQuery(queryId).lastRequestId) {
                    _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);
                    _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                    _this.invalidate(queryId);
                    _this.invalidate(fetchMoreForQueryId);
                    _this.broadcastQueries();
                }
                if (errorPolicy === 'none' && isNonEmptyArray(result.errors)) return reject(new ApolloError({
                    graphQLErrors: result.errors
                }));
                if (errorPolicy === 'all') errorsFromStore = result.errors;
                if (fetchMoreForQueryId || fetchPolicy === 'no-cache') resultFromStore = result.data;
                else {
                    var _a = _this.dataStore.getCache().diff({
                        variables: variables,
                        query: document,
                        optimistic: false,
                        returnPartialData: true
                    }), result_1 = _a.result, complete = _a.complete;
                    if (complete || options.returnPartialData) resultFromStore = result_1;
                }
            }).subscribe({
                error: function(error) {
                    cleanup();
                    reject(error);
                },
                complete: function() {
                    cleanup();
                    resolve({
                        data: resultFromStore,
                        errors: errorsFromStore,
                        loading: false,
                        networkStatus: NetworkStatus.ready,
                        stale: false
                    });
                }
            });
            _this.setQuery(queryId, function(_a) {
                var subscriptions = _a.subscriptions;
                subscriptions.add(subscription);
            });
        });
    };
    QueryManager1.prototype.getQuery = function(queryId) {
        return this.queries.get(queryId) || {
            listeners: new Set(),
            invalidated: false,
            document: null,
            newData: null,
            lastRequestId: 1,
            observableQuery: null,
            subscriptions: new Set()
        };
    };
    QueryManager1.prototype.setQuery = function(queryId, updater) {
        var prev = this.getQuery(queryId);
        var newInfo = _tslib.__assign(_tslib.__assign({
        }, prev), updater(prev));
        this.queries.set(queryId, newInfo);
    };
    QueryManager1.prototype.invalidate = function(queryId, invalidated) {
        if (invalidated === void 0) invalidated = true;
        if (queryId) this.setQuery(queryId, function() {
            return {
                invalidated: invalidated
            };
        });
    };
    QueryManager1.prototype.prepareContext = function(context) {
        if (context === void 0) context = {
        };
        var newContext = this.localState.prepareContext(context);
        return _tslib.__assign(_tslib.__assign({
        }, newContext), {
            clientAwareness: this.clientAwareness
        });
    };
    QueryManager1.prototype.checkInFlight = function(queryId) {
        var query = this.queryStore.get(queryId);
        return query && query.networkStatus !== NetworkStatus.ready && query.networkStatus !== NetworkStatus.error;
    };
    QueryManager1.prototype.startPollingQuery = function(options, queryId, listener) {
        var _this = this;
        var pollInterval = options.pollInterval;
        _tsInvariant.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.');
        if (!this.ssrMode) {
            var info1 = this.pollingInfoByQueryId.get(queryId);
            if (!info1) this.pollingInfoByQueryId.set(queryId, info1 = {
            });
            info1.interval = pollInterval;
            info1.options = _tslib.__assign(_tslib.__assign({
            }, options), {
                fetchPolicy: 'network-only'
            });
            var maybeFetch_1 = function() {
                var info = _this.pollingInfoByQueryId.get(queryId);
                if (info) {
                    if (_this.checkInFlight(queryId)) poll_1();
                    else _this.fetchQuery(queryId, info.options, FetchType.poll).then(poll_1, poll_1);
                }
            };
            var poll_1 = function() {
                var info = _this.pollingInfoByQueryId.get(queryId);
                if (info) {
                    clearTimeout(info.timeout);
                    info.timeout = setTimeout(maybeFetch_1, info.interval);
                }
            };
            if (listener) this.addQueryListener(queryId, listener);
            poll_1();
        }
        return queryId;
    };
    QueryManager1.prototype.stopPollingQuery = function(queryId) {
        this.pollingInfoByQueryId.delete(queryId);
    };
    return QueryManager1;
}();
var DataStore = function() {
    function DataStore1(initialCache) {
        this.cache = initialCache;
    }
    DataStore1.prototype.getCache = function() {
        return this.cache;
    };
    DataStore1.prototype.markQueryResult = function(result, document, variables, fetchMoreForQueryId, ignoreErrors) {
        if (ignoreErrors === void 0) ignoreErrors = false;
        var writeWithErrors = !_apolloUtilities.graphQLResultHasError(result);
        if (ignoreErrors && _apolloUtilities.graphQLResultHasError(result) && result.data) writeWithErrors = true;
        if (!fetchMoreForQueryId && writeWithErrors) this.cache.write({
            result: result.data,
            dataId: 'ROOT_QUERY',
            query: document,
            variables: variables
        });
    };
    DataStore1.prototype.markSubscriptionResult = function(result, document, variables) {
        if (!_apolloUtilities.graphQLResultHasError(result)) this.cache.write({
            result: result.data,
            dataId: 'ROOT_SUBSCRIPTION',
            query: document,
            variables: variables
        });
    };
    DataStore1.prototype.markMutationInit = function(mutation) {
        var _this = this;
        if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === 'function') optimistic_1 = mutation.optimisticResponse(mutation.variables);
            else optimistic_1 = mutation.optimisticResponse;
            this.cache.recordOptimisticTransaction(function(c) {
                var orig = _this.cache;
                _this.cache = c;
                try {
                    _this.markMutationResult({
                        mutationId: mutation.mutationId,
                        result: {
                            data: optimistic_1
                        },
                        document: mutation.document,
                        variables: mutation.variables,
                        updateQueries: mutation.updateQueries,
                        update: mutation.update
                    });
                } finally{
                    _this.cache = orig;
                }
            }, mutation.mutationId);
        }
    };
    DataStore1.prototype.markMutationResult = function(mutation) {
        var _this = this;
        if (!_apolloUtilities.graphQLResultHasError(mutation.result)) {
            var cacheWrites_1 = [
                {
                    result: mutation.result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables
                }
            ];
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) Object.keys(updateQueries_1).forEach(function(id) {
                var _a = updateQueries_1[id], query = _a.query, updater = _a.updater;
                var _b = _this.cache.diff({
                    query: query.document,
                    variables: query.variables,
                    returnPartialData: true,
                    optimistic: false
                }), currentQueryResult = _b.result, complete = _b.complete;
                if (complete) {
                    var nextQueryResult = _apolloUtilities.tryFunctionOrLogError(function() {
                        return updater(currentQueryResult, {
                            mutationResult: mutation.result,
                            queryName: _apolloUtilities.getOperationName(query.document) || undefined,
                            queryVariables: query.variables
                        });
                    });
                    if (nextQueryResult) cacheWrites_1.push({
                        result: nextQueryResult,
                        dataId: 'ROOT_QUERY',
                        query: query.document,
                        variables: query.variables
                    });
                }
            });
            this.cache.performTransaction(function(c) {
                cacheWrites_1.forEach(function(write) {
                    return c.write(write);
                });
                var update = mutation.update;
                if (update) _apolloUtilities.tryFunctionOrLogError(function() {
                    return update(c, mutation.result);
                });
            });
        }
    };
    DataStore1.prototype.markMutationComplete = function(_a) {
        var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
        if (optimisticResponse) this.cache.removeOptimistic(mutationId);
    };
    DataStore1.prototype.markUpdateQueryResult = function(document, variables, newResult) {
        this.cache.write({
            result: newResult,
            dataId: 'ROOT_QUERY',
            variables: variables,
            query: document
        });
    };
    DataStore1.prototype.reset = function() {
        return this.cache.reset();
    };
    return DataStore1;
}();
var version = "2.6.10";
var hasSuggestedDevtools = false;
var ApolloClient = function() {
    function ApolloClient1(options) {
        var _this = this;
        this.defaultOptions = {
        };
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions, _d = options.assumeImmutableResults, assumeImmutableResults = _d === void 0 ? false : _d, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link && resolvers) link = _apolloLink.ApolloLink.empty();
        if (!link || !cache) throw new _tsInvariant.InvariantError("In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.\nThese options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.\nFor more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup");
        this.link = link;
        this.cache = cache;
        this.store = new DataStore(cache);
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {
        };
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) setTimeout(function() {
            return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools = typeof window !== 'undefined' && !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined' ? defaultConnectToDevTools : connectToDevTools && typeof window !== 'undefined') window.__APOLLO_CLIENT__ = this;
        if (!hasSuggestedDevtools && true) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' && window.document && window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('Chrome') > -1) console.debug("Download the Apollo DevTools for a better development experience: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm");
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher
        });
        this.queryManager = new QueryManager({
            link: this.link,
            store: this.store,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: function() {
                if (_this.devToolsHookCb) _this.devToolsHookCb({
                    action: {
                    },
                    state: {
                        queries: _this.queryManager.queryStore.getStore(),
                        mutations: _this.queryManager.mutationStore.getStore()
                    },
                    dataWithOptimisticResults: _this.cache.extract(true)
                });
            }
        });
    }
    ApolloClient1.prototype.stop = function() {
        this.queryManager.stop();
    };
    ApolloClient1.prototype.watchQuery = function(options) {
        if (this.defaultOptions.watchQuery) options = _tslib.__assign(_tslib.__assign({
        }, this.defaultOptions.watchQuery), options);
        if (this.disableNetworkFetches && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) options = _tslib.__assign(_tslib.__assign({
        }, options), {
            fetchPolicy: 'cache-first'
        });
        return this.queryManager.watchQuery(options);
    };
    ApolloClient1.prototype.query = function(options) {
        if (this.defaultOptions.query) options = _tslib.__assign(_tslib.__assign({
        }, this.defaultOptions.query), options);
        _tsInvariant.invariant(options.fetchPolicy !== 'cache-and-network', "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.");
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') options = _tslib.__assign(_tslib.__assign({
        }, options), {
            fetchPolicy: 'cache-first'
        });
        return this.queryManager.query(options);
    };
    ApolloClient1.prototype.mutate = function(options) {
        if (this.defaultOptions.mutate) options = _tslib.__assign(_tslib.__assign({
        }, this.defaultOptions.mutate), options);
        return this.queryManager.mutate(options);
    };
    ApolloClient1.prototype.subscribe = function(options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient1.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient1.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient1.prototype.writeQuery = function(options) {
        var result = this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient1.prototype.writeFragment = function(options) {
        var result = this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient1.prototype.writeData = function(options) {
        var result = this.cache.writeData(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient1.prototype.__actionHookForDevTools = function(cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient1.prototype.__requestRaw = function(payload) {
        return _apolloLink.execute(this.link, payload);
    };
    ApolloClient1.prototype.initQueryManager = function() {
        _tsInvariant.invariant.warn("Calling the initQueryManager method is no longer necessary, and it will be removed from ApolloClient in version 3.0.");
        return this.queryManager;
    };
    ApolloClient1.prototype.resetStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.queryManager.clearStore();
        }).then(function() {
            return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
                return fn();
            }));
        }).then(function() {
            return _this.reFetchObservableQueries();
        });
    };
    ApolloClient1.prototype.clearStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
            return _this.queryManager.clearStore();
        }).then(function() {
            return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
                return fn();
            }));
        });
    };
    ApolloClient1.prototype.onResetStore = function(cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function() {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
                return c !== cb;
            });
        };
    };
    ApolloClient1.prototype.onClearStore = function(cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function() {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
                return c !== cb;
            });
        };
    };
    ApolloClient1.prototype.reFetchObservableQueries = function(includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient1.prototype.extract = function(optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient1.prototype.restore = function(serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient1.prototype.addResolvers = function(resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient1.prototype.setResolvers = function(resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient1.prototype.getResolvers = function() {
        return this.localState.getResolvers();
    };
    ApolloClient1.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    return ApolloClient1;
}();
exports.default = ApolloClient;

},{"tslib":"lRdW5","apollo-utilities":"dWAge","apollo-link":"hMD4G","symbol-observable":"7rWK3","ts-invariant":"gP8E6","graphql/language/visitor":"9iiLe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWAge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEqual", ()=>_equality.equal
);
parcelHelpers.export(exports, "addTypenameToDocument", ()=>addTypenameToDocument
);
parcelHelpers.export(exports, "argumentsObjectFromField", ()=>argumentsObjectFromField
);
parcelHelpers.export(exports, "assign", ()=>assign
);
parcelHelpers.export(exports, "buildQueryFromSelectionSet", ()=>buildQueryFromSelectionSet
);
parcelHelpers.export(exports, "canUseWeakMap", ()=>canUseWeakMap
);
parcelHelpers.export(exports, "checkDocument", ()=>checkDocument
);
parcelHelpers.export(exports, "cloneDeep", ()=>cloneDeep
);
parcelHelpers.export(exports, "createFragmentMap", ()=>createFragmentMap
);
parcelHelpers.export(exports, "getDefaultValues", ()=>getDefaultValues
);
parcelHelpers.export(exports, "getDirectiveInfoFromField", ()=>getDirectiveInfoFromField
);
parcelHelpers.export(exports, "getDirectiveNames", ()=>getDirectiveNames
);
parcelHelpers.export(exports, "getDirectivesFromDocument", ()=>getDirectivesFromDocument
);
parcelHelpers.export(exports, "getEnv", ()=>getEnv
);
parcelHelpers.export(exports, "getFragmentDefinition", ()=>getFragmentDefinition
);
parcelHelpers.export(exports, "getFragmentDefinitions", ()=>getFragmentDefinitions
);
parcelHelpers.export(exports, "getFragmentQueryDocument", ()=>getFragmentQueryDocument
);
parcelHelpers.export(exports, "getInclusionDirectives", ()=>getInclusionDirectives
);
parcelHelpers.export(exports, "getMainDefinition", ()=>getMainDefinition
);
parcelHelpers.export(exports, "getMutationDefinition", ()=>getMutationDefinition
);
parcelHelpers.export(exports, "getOperationDefinition", ()=>getOperationDefinition
);
parcelHelpers.export(exports, "getOperationDefinitionOrDie", ()=>getOperationDefinitionOrDie
);
parcelHelpers.export(exports, "getOperationName", ()=>getOperationName
);
parcelHelpers.export(exports, "getQueryDefinition", ()=>getQueryDefinition
);
parcelHelpers.export(exports, "getStoreKeyName", ()=>getStoreKeyName
);
parcelHelpers.export(exports, "graphQLResultHasError", ()=>graphQLResultHasError
);
parcelHelpers.export(exports, "hasClientExports", ()=>hasClientExports
);
parcelHelpers.export(exports, "hasDirectives", ()=>hasDirectives
);
parcelHelpers.export(exports, "isDevelopment", ()=>isDevelopment
);
parcelHelpers.export(exports, "isEnv", ()=>isEnv
);
parcelHelpers.export(exports, "isField", ()=>isField
);
parcelHelpers.export(exports, "isIdValue", ()=>isIdValue
);
parcelHelpers.export(exports, "isInlineFragment", ()=>isInlineFragment
);
parcelHelpers.export(exports, "isJsonValue", ()=>isJsonValue
);
parcelHelpers.export(exports, "isNumberValue", ()=>isNumberValue
);
parcelHelpers.export(exports, "isProduction", ()=>isProduction
);
parcelHelpers.export(exports, "isScalarValue", ()=>isScalarValue
);
parcelHelpers.export(exports, "isTest", ()=>isTest
);
parcelHelpers.export(exports, "maybeDeepFreeze", ()=>maybeDeepFreeze
);
parcelHelpers.export(exports, "mergeDeep", ()=>mergeDeep
);
parcelHelpers.export(exports, "mergeDeepArray", ()=>mergeDeepArray
);
parcelHelpers.export(exports, "removeArgumentsFromDocument", ()=>removeArgumentsFromDocument
);
parcelHelpers.export(exports, "removeClientSetsFromDocument", ()=>removeClientSetsFromDocument
);
parcelHelpers.export(exports, "removeConnectionDirectiveFromDocument", ()=>removeConnectionDirectiveFromDocument
);
parcelHelpers.export(exports, "removeDirectivesFromDocument", ()=>removeDirectivesFromDocument
);
parcelHelpers.export(exports, "removeFragmentSpreadFromDocument", ()=>removeFragmentSpreadFromDocument
);
parcelHelpers.export(exports, "resultKeyNameFromField", ()=>resultKeyNameFromField
);
parcelHelpers.export(exports, "shouldInclude", ()=>shouldInclude
);
parcelHelpers.export(exports, "storeKeyNameFromField", ()=>storeKeyNameFromField
);
parcelHelpers.export(exports, "stripSymbols", ()=>stripSymbols
);
parcelHelpers.export(exports, "toIdValue", ()=>toIdValue
);
parcelHelpers.export(exports, "tryFunctionOrLogError", ()=>tryFunctionOrLogError
);
parcelHelpers.export(exports, "valueFromNode", ()=>valueFromNode
);
parcelHelpers.export(exports, "valueToObjectRepresentation", ()=>valueToObjectRepresentation
);
parcelHelpers.export(exports, "variablesInOperation", ()=>variablesInOperation
);
parcelHelpers.export(exports, "warnOnceInDevelopment", ()=>warnOnceInDevelopment
);
var _visitor = require("graphql/language/visitor");
var _tsInvariant = require("ts-invariant");
var _tslib = require("tslib");
var _fastJsonStableStringify = require("fast-json-stable-stringify");
var _fastJsonStableStringifyDefault = parcelHelpers.interopDefault(_fastJsonStableStringify);
var _equality = require("@wry/equality");
var process = require("process");
function isScalarValue(value) {
    return [
        'StringValue',
        'BooleanValue',
        'EnumValue'
    ].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return [
        'IntValue',
        'FloatValue'
    ].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) argObj[name.value] = Number(value.value);
    else if (isBooleanValue(value) || isStringValue(value)) argObj[name.value] = value.value;
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {
        };
        value.fields.map(function(obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    } else if (isVariable(value)) {
        var variableValue = (variables || {
        })[value.name.value];
        argObj[name.value] = variableValue;
    } else if (isListValue(value)) argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {
        };
        valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
    });
    else if (isEnumValue(value)) argObj[name.value] = value.value;
    else if (isNullValue(value)) argObj[name.value] = null;
    else throw new _tsInvariant.InvariantError("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.');
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {
        };
        field.directives.forEach(function(directive) {
            directivesObj[directive.name.value] = {
            };
            if (directive.arguments) directive.arguments.forEach(function(_a) {
                var name = _a.name, value = _a.value;
                return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
            });
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {
        };
        field.arguments.forEach(function(_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export', 
];
function getStoreKeyName(fieldName, args, directives) {
    if (directives && directives['connection'] && directives['connection']['key']) {
        if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {
            };
            filterKeys.forEach(function(key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        } else return directives['connection']['key'];
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = _fastJsonStableStringifyDefault.default(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) Object.keys(directives).forEach(function(key) {
        if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;
        if (directives[key] && Object.keys(directives[key]).length) completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
        else completeFieldName += "@" + key;
    });
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {
        };
        field.arguments.forEach(function(_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject && idObject.type === 'id' && typeof idObject.generated === 'boolean';
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) generated = false;
    return _tslib.__assign({
        type: 'id',
        generated: generated
    }, typeof idConfig === 'string' ? {
        id: idConfig,
        typename: undefined
    } : idConfig);
}
function isJsonValue(jsonObject) {
    return jsonObject != null && typeof jsonObject === 'object' && jsonObject.type === 'json';
}
function defaultValueFromVariable(node) {
    throw new _tsInvariant.InvariantError("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) onVariable = defaultValueFromVariable;
    switch(node.kind){
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value, 10);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function(v) {
                return valueFromNode(v, onVariable);
            });
        case 'ObjectValue':
            var value = {
            };
            for(var _i = 0, _a = node.fields; _i < _a.length; _i++){
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        default:
            return node.value;
    }
}
function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {
        };
        field.directives.forEach(function(directive) {
            directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) variables = {
    };
    return getInclusionDirectives(selection.directives).every(function(_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables[ifArgument.value.name.value];
            _tsInvariant.invariant(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
        } else evaledValue = ifArgument.value.value;
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(doc) {
    var names = [];
    _visitor.visit(doc, {
        Directive: function(node) {
            names.push(node.name.value);
        }
    });
    return names;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function(name) {
        return names.indexOf(name) > -1;
    });
}
function hasClientExports(document) {
    return document && hasDirectives([
        'client'
    ], document) && hasDirectives([
        'export'
    ], document);
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    return directives ? directives.filter(isInclusionDirective).map(function(directive) {
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
        _tsInvariant.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
        var ifArgument = directiveArguments[0];
        _tsInvariant.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
        var ifValue = ifArgument.value;
        _tsInvariant.invariant(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
        return {
            directive: directive,
            ifArgument: ifArgument
        };
    }) : [];
}
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function(definition) {
        if (definition.kind === 'OperationDefinition') throw new _tsInvariant.InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        if (definition.kind === 'FragmentDefinition') fragments.push(definition);
    });
    if (typeof actualFragmentName === 'undefined') {
        _tsInvariant.invariant(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        actualFragmentName = fragments[0].name.value;
    }
    var query = _tslib.__assign(_tslib.__assign({
    }, document), {
        definitions: _tslib.__spreadArrays([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName
                            }
                        }, 
                    ]
                }
            }
        ], document.definitions)
    });
    return query;
}
function assign(target) {
    var sources = [];
    for(var _i = 1; _i < arguments.length; _i++)sources[_i - 1] = arguments[_i];
    sources.forEach(function(source) {
        if (typeof source === 'undefined' || source === null) return;
        Object.keys(source).forEach(function(key) {
            target[key] = source[key];
        });
    });
    return target;
}
function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function(definition) {
        return definition.kind === 'OperationDefinition' && definition.operation === 'mutation';
    })[0];
    _tsInvariant.invariant(mutationDef, 'Must contain a mutation definition.');
    return mutationDef;
}
function checkDocument(doc) {
    _tsInvariant.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    var operations = doc.definitions.filter(function(d) {
        return d.kind !== 'FragmentDefinition';
    }).map(function(definition) {
        if (definition.kind !== 'OperationDefinition') throw new _tsInvariant.InvariantError("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        return definition;
    });
    _tsInvariant.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function(definition) {
        return definition.kind === 'OperationDefinition';
    })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
    _tsInvariant.invariant(def, "GraphQL document is missing an operation");
    return def;
}
function getOperationName(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    }).map(function(x) {
        return x.name.value;
    })[0] || null;
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function(definition) {
        return definition.kind === 'FragmentDefinition';
    });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    _tsInvariant.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
    return queryDef;
}
function getFragmentDefinition(doc) {
    _tsInvariant.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    _tsInvariant.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
    var fragmentDef = doc.definitions[0];
    _tsInvariant.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for(var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++){
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' || operation === 'mutation' || operation === 'subscription') return definition;
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) fragmentDefinition = definition;
    }
    if (fragmentDefinition) return fragmentDefinition;
    throw new _tsInvariant.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) fragments = [];
    var symTable = {
    };
    fragments.forEach(function(fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions.filter(function(_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        }).map(function(_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {
            };
            valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return assign.apply(void 0, _tslib.__spreadArrays([
            {
            }
        ], defaultValues));
    }
    return {
    };
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) for(var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++){
        var definition = _a[_i];
        names.add(definition.variable.name.value);
    }
    return names;
}
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function(elem, i) {
        if (test.call(this, elem, i, array)) array[target++] = elem;
    }, context);
    array.length = target;
    return array;
}
var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename'
    }
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function(selection) {
        return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function(dir) {
            return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(_visitor.visit(doc, {
        Variable: {
            enter: function(node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') variablesInUse[node.name.value] = true;
            }
        },
        Field: {
            enter: function(node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function(directive) {
                        return directive.remove;
                    });
                    if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) node.arguments.forEach(function(arg) {
                            if (arg.value.kind === 'Variable') variablesToRemove.push({
                                name: arg.value.name.value
                            });
                        });
                        if (node.selectionSet) getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                            fragmentSpreadsToRemove.push({
                                name: frag.name.value
                            });
                        });
                        return null;
                    }
                }
            }
        },
        FragmentSpread: {
            enter: function(node) {
                fragmentSpreadsInUse[node.name.value] = true;
            }
        },
        Directive: {
            enter: function(node) {
                if (getDirectiveMatcher(directives)(node)) return null;
            }
        }
    }));
    if (modifiedDoc && filterInPlace(variablesToRemove, function(v) {
        return !variablesInUse[v.name];
    }).length) modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
        return !fragmentSpreadsInUse[fs.name];
    }).length) modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return _visitor.visit(checkDocument(doc), {
        SelectionSet: {
            enter: function(node, _key, parent) {
                if (parent && parent.kind === 'OperationDefinition') return;
                var selections = node.selections;
                if (!selections) return;
                var skip = selections.some(function(selection) {
                    return isField(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
                });
                if (skip) return;
                var field = parent;
                if (isField(field) && field.directives && field.directives.some(function(d) {
                    return d.name.value === 'export';
                })) return;
                return _tslib.__assign(_tslib.__assign({
                }, node), {
                    selections: _tslib.__spreadArrays(selections, [
                        TYPENAME_FIELD
                    ])
                });
            }
        }
    });
}
var connectionRemoveConfig = {
    test: function(directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments || !directive.arguments.some(function(arg) {
                return arg.name.value === 'key';
            })) _tsInvariant.invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
        }
        return willRemove;
    }
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([
        connectionRemoveConfig
    ], checkDocument(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) nestedCheck = true;
    return selectionSet && selectionSet.selections && selectionSet.selections.some(function(selection) {
        return hasDirectivesInSelection(directives, selection, nestedCheck);
    });
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) nestedCheck = true;
    if (!isField(selection)) return true;
    if (!selection.directives) return false;
    return selection.directives.some(getDirectiveMatcher(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
}
function getDirectivesFromDocument(directives, doc) {
    checkDocument(doc);
    var parentPath;
    return nullIfDocIsEmpty(_visitor.visit(doc, {
        SelectionSet: {
            enter: function(node, _key, _parent, path) {
                var currentPath = path.join('-');
                if (!parentPath || currentPath === parentPath || !currentPath.startsWith(parentPath)) {
                    if (node.selections) {
                        var selectionsWithDirectives = node.selections.filter(function(selection) {
                            return hasDirectivesInSelection(directives, selection);
                        });
                        if (hasDirectivesInSelectionSet(directives, node, false)) parentPath = currentPath;
                        return _tslib.__assign(_tslib.__assign({
                        }, node), {
                            selections: selectionsWithDirectives
                        });
                    } else return null;
                }
            }
        }
    }));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function(aConfig) {
            return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(_visitor.visit(doc, {
        OperationDefinition: {
            enter: function(node) {
                return _tslib.__assign(_tslib.__assign({
                }, node), {
                    variableDefinitions: node.variableDefinitions.filter(function(varDef) {
                        return !config.some(function(arg) {
                            return arg.name === varDef.variable.name.value;
                        });
                    })
                });
            }
        },
        Field: {
            enter: function(node) {
                var shouldRemoveField = config.some(function(argConfig) {
                    return argConfig.remove;
                });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    node.arguments.forEach(function(arg) {
                        if (argMatcher(arg)) argMatchCount_1 += 1;
                    });
                    if (argMatchCount_1 === 1) return null;
                }
            }
        },
        Argument: {
            enter: function(node) {
                if (argMatcher(node)) return null;
            }
        }
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function(def) {
            return def.name === node.name.value;
        })) return null;
    }
    return nullIfDocIsEmpty(_visitor.visit(doc, {
        FragmentSpread: {
            enter: enter
        },
        FragmentDefinition: {
            enter: enter
        }
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function(selection) {
        if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
            return allFragments.push(frag);
        });
        else if (selection.kind === 'FragmentSpread') allFragments.push(selection);
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') return document;
    var modifiedDoc = _visitor.visit(document, {
        OperationDefinition: {
            enter: function(node) {
                return _tslib.__assign(_tslib.__assign({
                }, node), {
                    operation: 'query'
                });
            }
        }
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function(directive) {
                return directive.name.value === 'client';
            },
            remove: true
        }, 
    ], document);
    if (modifiedDoc) modifiedDoc = _visitor.visit(modifiedDoc, {
        FragmentDefinition: {
            enter: function(node) {
                if (node.selectionSet) {
                    var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
                        return isField(selection) && selection.name.value === '__typename';
                    });
                    if (isTypenameOnly) return null;
                }
            }
        }
    });
    return modifiedDoc;
}
var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' && navigator.product === 'ReactNative');
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value, new Map());
}
function cloneDeepHelper(val, seen) {
    switch(toString.call(val)){
        case "[object Array]":
            if (seen.has(val)) return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function(child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        case "[object Object]":
            if (seen.has(val)) return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function(key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        default:
            return val;
    }
}
function getEnv() {
    if (typeof process !== 'undefined' && "development") return "development";
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
function tryFunctionOrLogError(f) {
    try {
        return f();
    } catch (e) {
        if (console.error) console.error(e);
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function(prop) {
        if (o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) deepFreeze(o[prop]);
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (isDevelopment() || isTest()) {
        var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
        if (!symbolIsPolyfilled) return deepFreeze(obj);
    }
    return obj;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {
    };
    var count = sources.length;
    if (count > 1) {
        var pastCopies = [];
        target = shallowCopyForMerge(target, pastCopies);
        for(var i = 1; i < count; ++i)target = mergeHelper(target, sources[i], pastCopies);
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
function mergeHelper(target, source, pastCopies) {
    if (isObject(source) && isObject(target)) {
        if (Object.isExtensible && !Object.isExtensible(target)) target = shallowCopyForMerge(target, pastCopies);
        Object.keys(source).forEach(function(sourceKey) {
            var sourceValue = source[sourceKey];
            if (hasOwnProperty.call(target, sourceKey)) {
                var targetValue = target[sourceKey];
                if (sourceValue !== targetValue) target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
            } else target[sourceKey] = sourceValue;
        });
        return target;
    }
    return source;
}
function shallowCopyForMerge(value, pastCopies) {
    if (value !== null && typeof value === 'object' && pastCopies.indexOf(value) < 0) {
        if (Array.isArray(value)) value = value.slice(0);
        else value = _tslib.__assign({
            __proto__: Object.getPrototypeOf(value)
        }, value);
        pastCopies.push(value);
    }
    return value;
}
var haveWarned = Object.create({
});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) type = 'warn';
    if (!isProduction() && !haveWarned[msg]) {
        if (!isTest()) haveWarned[msg] = true;
        if (type === 'error') console.error(msg);
        else console.warn(msg);
    }
}
function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}

},{"graphql/language/visitor":"9iiLe","ts-invariant":"gP8E6","tslib":"lRdW5","fast-json-stable-stringify":"7uYbV","process":"d5jf4","@wry/equality":"eBW80","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9iiLe":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.BREAK = void 0;
exports.getEnterLeaveForKind = getEnterLeaveForKind;
exports.getVisitFn = getVisitFn;
exports.visit = visit;
exports.visitInParallel = visitInParallel;
var _devAssert = require('../jsutils/devAssert.js');
var _inspect = require('../jsutils/inspect.js');
var _ast = require('./ast.js');
var _kinds = require('./kinds.js');
const BREAK = Object.freeze({
});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ exports.BREAK = BREAK;
function visit(root, visitor, visitorKeys = _ast.QueryDocumentKeys) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(_kinds.Kind))enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else node[arrayKey] = editValue;
                    }
                } else {
                    node = Object.defineProperties({
                    }, Object.getOwnPropertyDescriptors(node));
                    for (const [editKey, editValue] of edits)node[editKey] = editValue;
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) continue;
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            (0, _ast.isNode)(node) || (0, _devAssert.devAssert)(false, `Invalid AST Node: ${(0, _inspect.inspect)(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) break;
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if ((0, _ast.isNode)(result)) node = result;
                    else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) edits.push([
            key,
            node
        ]);
        if (isLeaving) path.pop();
        else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) ancestors.push(parent);
            parent = node;
        }
    }while (stack !== undefined)
    if (edits.length !== 0) // New root
    return edits[edits.length - 1][1];
    return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(_kinds.Kind)){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i1 = 0; i1 < visitors.length; ++i1){
            const { enter , leave  } = getEnterLeaveForKind(visitors[i1], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i1] = enter;
            leaveList[i1] = leave;
        }
        if (!hasVisitor) continue;
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++)if (skipping[i] === null) {
                    var _enterList$i;
                    const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                    if (result === false) skipping[i] = node;
                    else if (result === BREAK) skipping[i] = BREAK;
                    else if (result !== undefined) return result;
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) skipping[i] = BREAK;
                        else if (result !== undefined && result !== false) return result;
                    } else if (skipping[i] === node) skipping[i] = null;
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === 'object') // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
    else if (typeof kindVisitor === 'function') // { Kind() {} }
    return {
        enter: kindVisitor,
        leave: undefined
    };
     // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ function getVisitFn(visitor, kind, isLeaving) {
    const { enter , leave  } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

},{"../jsutils/devAssert.js":"fRYip","../jsutils/inspect.js":"i4DW0","./ast.js":"9cmAA","./kinds.js":"bpXyD"}],"fRYip":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.devAssert = devAssert;
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message);
}

},{}],"i4DW0":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.inspect = inspect;
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */ function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) return 'null';
    if (previouslySeenValues.includes(value)) return '[Circular]';
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
    } else if (Array.isArray(value)) return formatArray(value, seenValues);
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) return '{}';
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return '[' + getObjectTag(object) + ']';
    const properties = entries.map(([key, value])=>key + ': ' + formatValue(value, seenValues)
    );
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) return '[]';
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return '[Array]';
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i)items.push(formatValue(array[i], seenValues));
    if (remaining === 1) items.push('... 1 more item');
    else if (remaining > 1) items.push(`... ${remaining} more items`);
    return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') return name;
    }
    return tag;
}

},{}],"9cmAA":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Token = exports.QueryDocumentKeys = exports.OperationTypeNode = exports.Location = void 0;
exports.isNode = isNode;
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return 'Location';
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ exports.Location = Location;
class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return 'Token';
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
/**
 * The list of all possible AST node types.
 */ exports.Token = Token;
/**
 * @internal
 */ const QueryDocumentKeys = {
    Name: [],
    Document: [
        'definitions'
    ],
    OperationDefinition: [
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet', 
    ],
    VariableDefinition: [
        'variable',
        'type',
        'defaultValue',
        'directives'
    ],
    Variable: [
        'name'
    ],
    SelectionSet: [
        'selections'
    ],
    Field: [
        'alias',
        'name',
        'arguments',
        'directives',
        'selectionSet'
    ],
    Argument: [
        'name',
        'value'
    ],
    FragmentSpread: [
        'name',
        'directives'
    ],
    InlineFragment: [
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet', 
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        'values'
    ],
    ObjectValue: [
        'fields'
    ],
    ObjectField: [
        'name',
        'value'
    ],
    Directive: [
        'name',
        'arguments'
    ],
    NamedType: [
        'name'
    ],
    ListType: [
        'type'
    ],
    NonNullType: [
        'type'
    ],
    SchemaDefinition: [
        'description',
        'directives',
        'operationTypes'
    ],
    OperationTypeDefinition: [
        'type'
    ],
    ScalarTypeDefinition: [
        'description',
        'name',
        'directives'
    ],
    ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields', 
    ],
    FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
    ],
    InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives', 
    ],
    InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields', 
    ],
    UnionTypeDefinition: [
        'description',
        'name',
        'directives',
        'types'
    ],
    EnumTypeDefinition: [
        'description',
        'name',
        'directives',
        'values'
    ],
    EnumValueDefinition: [
        'description',
        'name',
        'directives'
    ],
    InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
    ],
    DirectiveDefinition: [
        'description',
        'name',
        'arguments',
        'locations'
    ],
    SchemaExtension: [
        'directives',
        'operationTypes'
    ],
    ScalarTypeExtension: [
        'name',
        'directives'
    ],
    ObjectTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    InterfaceTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeExtension: [
        'name',
        'directives',
        'types'
    ],
    EnumTypeExtension: [
        'name',
        'directives',
        'values'
    ],
    InputObjectTypeExtension: [
        'name',
        'directives',
        'fields'
    ]
};
exports.QueryDocumentKeys = QueryDocumentKeys;
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */ function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */ let OperationTypeNode;
exports.OperationTypeNode = OperationTypeNode;
(function(OperationTypeNode1) {
    OperationTypeNode1['QUERY'] = 'query';
    OperationTypeNode1['MUTATION'] = 'mutation';
    OperationTypeNode1['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {
}));

},{}],"bpXyD":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Kind = void 0;
/**
 * The set of allowed kind values for AST nodes.
 */ let Kind;
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ exports.Kind = Kind;
(function(Kind1) {
    Kind1['NAME'] = 'Name';
    Kind1['DOCUMENT'] = 'Document';
    Kind1['OPERATION_DEFINITION'] = 'OperationDefinition';
    Kind1['VARIABLE_DEFINITION'] = 'VariableDefinition';
    Kind1['SELECTION_SET'] = 'SelectionSet';
    Kind1['FIELD'] = 'Field';
    Kind1['ARGUMENT'] = 'Argument';
    Kind1['FRAGMENT_SPREAD'] = 'FragmentSpread';
    Kind1['INLINE_FRAGMENT'] = 'InlineFragment';
    Kind1['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
    Kind1['VARIABLE'] = 'Variable';
    Kind1['INT'] = 'IntValue';
    Kind1['FLOAT'] = 'FloatValue';
    Kind1['STRING'] = 'StringValue';
    Kind1['BOOLEAN'] = 'BooleanValue';
    Kind1['NULL'] = 'NullValue';
    Kind1['ENUM'] = 'EnumValue';
    Kind1['LIST'] = 'ListValue';
    Kind1['OBJECT'] = 'ObjectValue';
    Kind1['OBJECT_FIELD'] = 'ObjectField';
    Kind1['DIRECTIVE'] = 'Directive';
    Kind1['NAMED_TYPE'] = 'NamedType';
    Kind1['LIST_TYPE'] = 'ListType';
    Kind1['NON_NULL_TYPE'] = 'NonNullType';
    Kind1['SCHEMA_DEFINITION'] = 'SchemaDefinition';
    Kind1['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
    Kind1['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
    Kind1['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
    Kind1['FIELD_DEFINITION'] = 'FieldDefinition';
    Kind1['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
    Kind1['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
    Kind1['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
    Kind1['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
    Kind1['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
    Kind1['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
    Kind1['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
    Kind1['SCHEMA_EXTENSION'] = 'SchemaExtension';
    Kind1['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
    Kind1['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
    Kind1['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
    Kind1['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
    Kind1['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
    Kind1['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (exports.Kind = Kind = {
}));

},{}],"gP8E6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvariantError", ()=>InvariantError
);
parcelHelpers.export(exports, "invariant", ()=>invariant
);
parcelHelpers.export(exports, "process", ()=>processStub
);
var _tslib = require("tslib");
var process = require("process");
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = function(_super) {
    _tslib.__extends(InvariantError1, _super);
    function InvariantError1(message) {
        if (message === void 0) message = genericMessage;
        var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError1.prototype);
        return _this;
    }
    return InvariantError1;
}(Error);
function invariant(condition, message) {
    if (!condition) throw new InvariantError(message);
}
function wrapConsoleMethod(method) {
    return function() {
        return console[method].apply(console, arguments);
    };
}
(function(invariant1) {
    invariant1.warn = wrapConsoleMethod("warn");
    invariant1.error = wrapConsoleMethod("error");
})(invariant || (invariant = {
}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = {
    env: {
    }
};
if (typeof process === "object") processStub = process;
else try {
    // Using Function to evaluate this assignment in global scope also escapes
    // the strict mode of the current module, thereby allowing the assignment.
    // Inspired by https://github.com/facebook/regenerator/pull/369.
    Function("stub", "process = stub")(processStub);
} catch (atLeastWeTried) {
// The assignment can fail if a Content Security Policy heavy-handedly
// forbids Function usage. In those environments, developers should take
// extra care to replace process.env.NODE_ENV in their production builds,
// or define an appropriate global.process polyfill.
}
var invariant$1 = invariant;
exports.default = invariant$1;

},{"tslib":"lRdW5","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"7uYbV":[function(require,module,exports) {
'use strict';
module.exports = function(data, opts) {
    if (!opts) opts = {
    };
    if (typeof opts === 'function') opts = {
        cmp: opts
    };
    var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;
    var cmp = opts.cmp && function(f) {
        return function(node) {
            return function(a, b) {
                var aobj = {
                    key: a,
                    value: node[a]
                };
                var bobj = {
                    key: b,
                    value: node[b]
                };
                return f(aobj, bobj);
            };
        };
    }(opts.cmp);
    var seen = [];
    return (function stringify(node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') node = node.toJSON();
        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);
        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for(i = 0; i < node.length; i++){
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }
        if (node === null) return 'null';
        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }
        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for(i = 0; i < keys.length; i++){
            var key = keys[i];
            var value = stringify(node[key]);
            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};

},{}],"eBW80":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equal", ()=>equal
);
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */ function equal(a, b) {
    try {
        return check(a, b);
    } finally{
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) return true;
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) return false;
    switch(aTag){
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length) return false;
        // Fall through to object case...
        case '[object Object]':
            if (previouslyCompared(a, b)) return true;
            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length) return false;
            // Now make sure they have the same keys.
            for(var k = 0; k < keyCount; ++k){
                if (!hasOwnProperty.call(b, aKeys[k])) return false;
            }
            // Finally, check deep equality of all child properties.
            for(var k = 0; k < keyCount; ++k){
                var key = aKeys[k];
                if (!check(a[key], b[key])) return false;
            }
            return true;
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a) return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]':
            if (a.size !== b.size) return false;
            if (previouslyCompared(a, b)) return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while(true){
                var info = aIterator.next();
                if (info.done) break;
                // If a instanceof Set, aValue === aKey.
                var _a1 = info.value, aKey = _a1[0], aValue = _a1[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) return false;
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) return false;
            }
            return true;
    }
    // Otherwise the values are not equal.
    return false;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b)) return true;
    } else previousComparisons.set(a, bSet = new Set);
    bSet.add(b);
    return false;
}
exports.default = equal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMD4G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>_zenObservableTsDefault.default
);
parcelHelpers.export(exports, "getOperationName", ()=>_apolloUtilities.getOperationName
);
parcelHelpers.export(exports, "ApolloLink", ()=>ApolloLink
);
parcelHelpers.export(exports, "concat", ()=>concat
);
parcelHelpers.export(exports, "createOperation", ()=>createOperation
);
parcelHelpers.export(exports, "empty", ()=>empty
);
parcelHelpers.export(exports, "execute", ()=>execute
);
parcelHelpers.export(exports, "from", ()=>from
);
parcelHelpers.export(exports, "fromError", ()=>fromError
);
parcelHelpers.export(exports, "fromPromise", ()=>fromPromise
);
parcelHelpers.export(exports, "makePromise", ()=>makePromise
);
parcelHelpers.export(exports, "split", ()=>split
);
parcelHelpers.export(exports, "toPromise", ()=>toPromise
);
var _zenObservableTs = require("zen-observable-ts");
var _zenObservableTsDefault = parcelHelpers.interopDefault(_zenObservableTs);
var _tsInvariant = require("ts-invariant");
var _tslib = require("tslib");
var _apolloUtilities = require("apollo-utilities");
function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context', 
    ];
    for(var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++){
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) throw new _tsInvariant.InvariantError("illegal argument: " + key);
    }
    return operation;
}
var LinkError = function(_super) {
    _tslib.__extends(LinkError1, _super);
    function LinkError1(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError1;
}(Error);
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function(resolve, reject) {
        observable.subscribe({
            next: function(data) {
                if (completed) _tsInvariant.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new _zenObservableTsDefault.default(function(observer) {
        promise.then(function(value) {
            observer.next(value);
            observer.complete();
        }).catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new _zenObservableTsDefault.default(function(observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {
        },
        extensions: operation.extensions || {
        },
        operationName: operation.operationName,
        query: operation.query
    };
    if (!transformedOperation.operationName) transformedOperation.operationName = typeof transformedOperation.query !== 'string' ? _apolloUtilities.getOperationName(transformedOperation.query) : '';
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = _tslib.__assign({
    }, starting);
    var setContext = function(next) {
        if (typeof next === 'function') context = _tslib.__assign({
        }, context, next(context));
        else context = _tslib.__assign({
        }, context, next);
    };
    var getContext = function() {
        return _tslib.__assign({
        }, context);
    };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function() {
            return getKey(operation);
        }
    });
    return operation;
}
function getKey(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([
        operationName,
        query,
        variables
    ]);
}
function passthrough(op, forward) {
    return forward ? forward(op) : _zenObservableTsDefault.default.of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function() {
        return _zenObservableTsDefault.default.of();
    });
}
function from(links) {
    if (links.length === 0) return empty();
    return links.map(toLink).reduce(function(x, y) {
        return x.concat(y);
    });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) return new ApolloLink(function(operation) {
        return test(operation) ? leftLink.request(operation) || _zenObservableTsDefault.default.of() : rightLink.request(operation) || _zenObservableTsDefault.default.of();
    });
    else return new ApolloLink(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || _zenObservableTsDefault.default.of() : rightLink.request(operation, forward) || _zenObservableTsDefault.default.of();
    });
}
var concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
        _tsInvariant.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) return new ApolloLink(function(operation) {
        return firstLink.request(operation, function(op) {
            return nextLink.request(op) || _zenObservableTsDefault.default.of();
        }) || _zenObservableTsDefault.default.of();
    });
    else return new ApolloLink(function(operation, forward) {
        return firstLink.request(operation, function(op) {
            return nextLink.request(op, forward) || _zenObservableTsDefault.default.of();
        }) || _zenObservableTsDefault.default.of();
    });
};
var ApolloLink = function() {
    function ApolloLink1(request) {
        if (request) this.request = request;
    }
    ApolloLink1.prototype.split = function(test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink1(passthrough)));
    };
    ApolloLink1.prototype.concat = function(next) {
        return concat(this, next);
    };
    ApolloLink1.prototype.request = function(operation, forward) {
        throw new _tsInvariant.InvariantError('request is not implemented');
    };
    ApolloLink1.empty = empty;
    ApolloLink1.from = from;
    ApolloLink1.split = split;
    ApolloLink1.execute = execute;
    return ApolloLink1;
}();
function execute(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || _zenObservableTsDefault.default.of();
}

},{"zen-observable-ts":"92enM","ts-invariant":"gP8E6","tslib":"lRdW5","apollo-utilities":"dWAge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92enM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable
);
var _zenObservable = require("zen-observable");
var _zenObservableDefault = parcelHelpers.interopDefault(_zenObservable);
var Observable = _zenObservableDefault.default;
exports.default = Observable;

},{"zen-observable":"4w7A0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4w7A0":[function(require,module,exports) {
module.exports = require('./lib/Observable.js').Observable;

},{"./lib/Observable.js":"gVXbs"}],"gVXbs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
// === Symbol Support ===
var hasSymbols = function() {
    return typeof Symbol === 'function';
};
var hasSymbol = function(name) {
    return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
    return hasSymbol(name) ? Symbol[name] : '@@' + name;
};
if (hasSymbols() && !hasSymbol('observable')) Symbol.observable = Symbol('observable');
var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===
function getMethod(obj, key) {
    var value = obj[key];
    if (value == null) return undefined;
    if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
    return value;
}
function getSpecies(obj) {
    var ctor = obj.constructor;
    if (ctor !== undefined) {
        ctor = ctor[SymbolSpecies];
        if (ctor === null) ctor = undefined;
    }
    return ctor !== undefined ? ctor : Observable;
}
function isObservable(x) {
    return x instanceof Observable; // SPEC: Brand check
}
function hostReportError(e) {
    if (hostReportError.log) hostReportError.log(e);
    else setTimeout(function() {
        throw e;
    });
}
function enqueue(fn) {
    Promise.resolve().then(function() {
        try {
            fn();
        } catch (e) {
            hostReportError(e);
        }
    });
}
function cleanupSubscription(subscription) {
    var cleanup = subscription._cleanup;
    if (cleanup === undefined) return;
    subscription._cleanup = undefined;
    if (!cleanup) return;
    try {
        if (typeof cleanup === 'function') cleanup();
        else {
            var unsubscribe = getMethod(cleanup, 'unsubscribe');
            if (unsubscribe) unsubscribe.call(cleanup);
        }
    } catch (e) {
        hostReportError(e);
    }
}
function closeSubscription(subscription) {
    subscription._observer = undefined;
    subscription._queue = undefined;
    subscription._state = 'closed';
}
function flushSubscription(subscription) {
    var queue = subscription._queue;
    if (!queue) return;
    subscription._queue = undefined;
    subscription._state = 'ready';
    for(var i = 0; i < queue.length; ++i){
        notifySubscription(subscription, queue[i].type, queue[i].value);
        if (subscription._state === 'closed') break;
    }
}
function notifySubscription(subscription, type, value) {
    subscription._state = 'running';
    var observer = subscription._observer;
    try {
        var m = getMethod(observer, type);
        switch(type){
            case 'next':
                if (m) m.call(observer, value);
                break;
            case 'error':
                closeSubscription(subscription);
                if (m) m.call(observer, value);
                else throw value;
                break;
            case 'complete':
                closeSubscription(subscription);
                if (m) m.call(observer);
                break;
        }
    } catch (e) {
        hostReportError(e);
    }
    if (subscription._state === 'closed') cleanupSubscription(subscription);
    else if (subscription._state === 'running') subscription._state = 'ready';
}
function onNotify(subscription, type, value) {
    if (subscription._state === 'closed') return;
    if (subscription._state === 'buffering') {
        subscription._queue.push({
            type: type,
            value: value
        });
        return;
    }
    if (subscription._state !== 'ready') {
        subscription._state = 'buffering';
        subscription._queue = [
            {
                type: type,
                value: value
            }
        ];
        enqueue(function() {
            return flushSubscription(subscription);
        });
        return;
    }
    notifySubscription(subscription, type, value);
}
var Subscription = /*#__PURE__*/ function() {
    function Subscription1(observer, subscriber) {
        _classCallCheck(this, Subscription1);
        // ASSERT: observer is an object
        // ASSERT: subscriber is callable
        this._cleanup = undefined;
        this._observer = observer;
        this._queue = undefined;
        this._state = 'initializing';
        var subscriptionObserver = new SubscriptionObserver(this);
        try {
            this._cleanup = subscriber.call(undefined, subscriptionObserver);
        } catch (e) {
            subscriptionObserver.error(e);
        }
        if (this._state === 'initializing') this._state = 'ready';
    }
    _createClass(Subscription1, [
        {
            key: "unsubscribe",
            value: function unsubscribe() {
                if (this._state !== 'closed') {
                    closeSubscription(this);
                    cleanupSubscription(this);
                }
            }
        },
        {
            key: "closed",
            get: function() {
                return this._state === 'closed';
            }
        }
    ]);
    return Subscription1;
}();
var SubscriptionObserver = /*#__PURE__*/ function() {
    function SubscriptionObserver1(subscription) {
        _classCallCheck(this, SubscriptionObserver1);
        this._subscription = subscription;
    }
    _createClass(SubscriptionObserver1, [
        {
            key: "next",
            value: function next(value) {
                onNotify(this._subscription, 'next', value);
            }
        },
        {
            key: "error",
            value: function error(value) {
                onNotify(this._subscription, 'error', value);
            }
        },
        {
            key: "complete",
            value: function complete() {
                onNotify(this._subscription, 'complete');
            }
        },
        {
            key: "closed",
            get: function() {
                return this._subscription._state === 'closed';
            }
        }
    ]);
    return SubscriptionObserver1;
}();
var Observable = /*#__PURE__*/ function() {
    function Observable1(subscriber) {
        _classCallCheck(this, Observable1);
        if (!(this instanceof Observable1)) throw new TypeError('Observable cannot be called as a function');
        if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
        this._subscriber = subscriber;
    }
    _createClass(Observable1, [
        {
            key: "subscribe",
            value: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) observer = {
                    next: observer,
                    error: arguments[1],
                    complete: arguments[2]
                };
                return new Subscription(observer, this._subscriber);
            }
        },
        {
            key: "forEach",
            value: function forEach(fn) {
                var _this = this;
                return new Promise(function(resolve, reject) {
                    if (typeof fn !== 'function') {
                        reject(new TypeError(fn + ' is not a function'));
                        return;
                    }
                    function done() {
                        subscription.unsubscribe();
                        resolve();
                    }
                    var subscription = _this.subscribe({
                        next: function(value) {
                            try {
                                fn(value, done);
                            } catch (e) {
                                reject(e);
                                subscription.unsubscribe();
                            }
                        },
                        error: reject,
                        complete: resolve
                    });
                });
            }
        },
        {
            key: "map",
            value: function map(fn) {
                var _this2 = this;
                if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
                var C = getSpecies(this);
                return new C(function(observer) {
                    return _this2.subscribe({
                        next: function(value) {
                            try {
                                value = fn(value);
                            } catch (e) {
                                return observer.error(e);
                            }
                            observer.next(value);
                        },
                        error: function(e) {
                            observer.error(e);
                        },
                        complete: function() {
                            observer.complete();
                        }
                    });
                });
            }
        },
        {
            key: "filter",
            value: function filter(fn) {
                var _this3 = this;
                if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
                var C = getSpecies(this);
                return new C(function(observer) {
                    return _this3.subscribe({
                        next: function(value) {
                            try {
                                if (!fn(value)) return;
                            } catch (e) {
                                return observer.error(e);
                            }
                            observer.next(value);
                        },
                        error: function(e) {
                            observer.error(e);
                        },
                        complete: function() {
                            observer.complete();
                        }
                    });
                });
            }
        },
        {
            key: "reduce",
            value: function reduce(fn) {
                var _this4 = this;
                if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
                var C = getSpecies(this);
                var hasSeed = arguments.length > 1;
                var hasValue = false;
                var seed = arguments[1];
                var acc = seed;
                return new C(function(observer) {
                    return _this4.subscribe({
                        next: function(value) {
                            var first = !hasValue;
                            hasValue = true;
                            if (!first || hasSeed) try {
                                acc = fn(acc, value);
                            } catch (e) {
                                return observer.error(e);
                            }
                            else acc = value;
                        },
                        error: function(e) {
                            observer.error(e);
                        },
                        complete: function() {
                            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
                            observer.next(acc);
                            observer.complete();
                        }
                    });
                });
            }
        },
        {
            key: "concat",
            value: function concat() {
                var _this5 = this;
                for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                var C = getSpecies(this);
                return new C(function(observer) {
                    var subscription;
                    var index = 0;
                    function startNext(next) {
                        subscription = next.subscribe({
                            next: function(v) {
                                observer.next(v);
                            },
                            error: function(e) {
                                observer.error(e);
                            },
                            complete: function() {
                                if (index === sources.length) {
                                    subscription = undefined;
                                    observer.complete();
                                } else startNext(C.from(sources[index++]));
                            }
                        });
                    }
                    startNext(_this5);
                    return function() {
                        if (subscription) {
                            subscription.unsubscribe();
                            subscription = undefined;
                        }
                    };
                });
            }
        },
        {
            key: "flatMap",
            value: function flatMap(fn) {
                var _this6 = this;
                if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
                var C = getSpecies(this);
                return new C(function(observer) {
                    var subscriptions = [];
                    var outer = _this6.subscribe({
                        next: function(value1) {
                            if (fn) try {
                                value1 = fn(value1);
                            } catch (e1) {
                                return observer.error(e1);
                            }
                            var inner = C.from(value1).subscribe({
                                next: function(value) {
                                    observer.next(value);
                                },
                                error: function(e) {
                                    observer.error(e);
                                },
                                complete: function() {
                                    var i = subscriptions.indexOf(inner);
                                    if (i >= 0) subscriptions.splice(i, 1);
                                    completeIfDone();
                                }
                            });
                            subscriptions.push(inner);
                        },
                        error: function(e) {
                            observer.error(e);
                        },
                        complete: function() {
                            completeIfDone();
                        }
                    });
                    function completeIfDone() {
                        if (outer.closed && subscriptions.length === 0) observer.complete();
                    }
                    return function() {
                        subscriptions.forEach(function(s) {
                            return s.unsubscribe();
                        });
                        outer.unsubscribe();
                    };
                });
            }
        },
        {
            key: SymbolObservable,
            value: function() {
                return this;
            }
        }
    ], [
        {
            key: "from",
            value: function from(x) {
                var C = typeof this === 'function' ? this : Observable1;
                if (x == null) throw new TypeError(x + ' is not an object');
                var method = getMethod(x, SymbolObservable);
                if (method) {
                    var observable = method.call(x);
                    if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
                    if (isObservable(observable) && observable.constructor === C) return observable;
                    return new C(function(observer) {
                        return observable.subscribe(observer);
                    });
                }
                if (hasSymbol('iterator')) {
                    method = getMethod(x, SymbolIterator);
                    if (method) return new C(function(observer) {
                        enqueue(function() {
                            if (observer.closed) return;
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;
                            try {
                                for(var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var _item = _step.value;
                                    observer.next(_item);
                                    if (observer.closed) return;
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
                                } finally{
                                    if (_didIteratorError) throw _iteratorError;
                                }
                            }
                            observer.complete();
                        });
                    });
                }
                if (Array.isArray(x)) return new C(function(observer) {
                    enqueue(function() {
                        if (observer.closed) return;
                        for(var i = 0; i < x.length; ++i){
                            observer.next(x[i]);
                            if (observer.closed) return;
                        }
                        observer.complete();
                    });
                });
                throw new TypeError(x + ' is not observable');
            }
        },
        {
            key: "of",
            value: function of() {
                for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)items[_key2] = arguments[_key2];
                var C = typeof this === 'function' ? this : Observable1;
                return new C(function(observer) {
                    enqueue(function() {
                        if (observer.closed) return;
                        for(var i = 0; i < items.length; ++i){
                            observer.next(items[i]);
                            if (observer.closed) return;
                        }
                        observer.complete();
                    });
                });
            }
        },
        {
            key: SymbolSpecies,
            get: function() {
                return this;
            }
        }
    ]);
    return Observable1;
}();
exports.Observable = Observable;
if (hasSymbols()) Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
        symbol: SymbolObservable,
        hostReportError: hostReportError
    },
    configurable: true
});

},{}],"7rWK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* global window */ var _ponyfillJs = require("./ponyfill.js");
var _ponyfillJsDefault = parcelHelpers.interopDefault(_ponyfillJs);
var global = arguments[3];
var root;
if (typeof self !== 'undefined') root = self;
else if (typeof window !== 'undefined') root = window;
else if (typeof global !== 'undefined') root = global;
else if (typeof module !== 'undefined') root = module;
else root = Function('return this')();
var result = _ponyfillJsDefault.default(root);
exports.default = result;

},{"./ponyfill.js":"94Tfe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94Tfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function symbolObservablePonyfill(root) {
    var result;
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) result = Symbol.observable;
        else {
            result = Symbol('observable');
            Symbol.observable = result;
        }
    } else result = '@@observable';
    return result;
}
exports.default = symbolObservablePonyfill;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lesBh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeuristicFragmentMatcher", ()=>HeuristicFragmentMatcher
);
parcelHelpers.export(exports, "InMemoryCache", ()=>InMemoryCache
);
parcelHelpers.export(exports, "IntrospectionFragmentMatcher", ()=>IntrospectionFragmentMatcher
);
parcelHelpers.export(exports, "ObjectCache", ()=>ObjectCache
);
parcelHelpers.export(exports, "StoreReader", ()=>StoreReader
);
parcelHelpers.export(exports, "StoreWriter", ()=>StoreWriter
);
parcelHelpers.export(exports, "WriteError", ()=>WriteError
);
parcelHelpers.export(exports, "assertIdValue", ()=>assertIdValue
);
parcelHelpers.export(exports, "defaultDataIdFromObject", ()=>defaultDataIdFromObject
);
parcelHelpers.export(exports, "defaultNormalizedCacheFactory", ()=>defaultNormalizedCacheFactory$1
);
parcelHelpers.export(exports, "enhanceErrorWithDocument", ()=>enhanceErrorWithDocument
);
var _tslib = require("tslib");
var _apolloCache = require("apollo-cache");
var _apolloUtilities = require("apollo-utilities");
var _optimism = require("optimism");
var _tsInvariant = require("ts-invariant");
var haveWarned = false;
function shouldWarn() {
    var answer = !haveWarned;
    if (!_apolloUtilities.isTest()) haveWarned = true;
    return answer;
}
var HeuristicFragmentMatcher = function() {
    function HeuristicFragmentMatcher1() {
    }
    HeuristicFragmentMatcher1.prototype.ensureReady = function() {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher1.prototype.canBypassInit = function() {
        return true;
    };
    HeuristicFragmentMatcher1.prototype.match = function(idValue, typeCondition, context) {
        var obj = context.store.get(idValue.id);
        var isRootQuery = idValue.id === 'ROOT_QUERY';
        if (!obj) return isRootQuery;
        var _a = obj.__typename, __typename = _a === void 0 ? isRootQuery && 'Query' : _a;
        if (!__typename) {
            if (shouldWarn()) {
                _tsInvariant.invariant.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                _tsInvariant.invariant.warn('Could not find __typename on Fragment ', typeCondition, obj);
                _tsInvariant.invariant.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
            }
            return 'heuristic';
        }
        if (__typename === typeCondition) return true;
        if (shouldWarn()) _tsInvariant.invariant.error("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types. Apollo Client will not be able to accurately map fragments. To make this error go away, use the `IntrospectionFragmentMatcher` as described in the docs: https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher");
        return 'heuristic';
    };
    return HeuristicFragmentMatcher1;
}();
var IntrospectionFragmentMatcher = function() {
    function IntrospectionFragmentMatcher1(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        } else this.isReady = false;
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher1.prototype.match = function(idValue, typeCondition, context) {
        _tsInvariant.invariant(this.isReady, 'FragmentMatcher.match() was called before FragmentMatcher.init()');
        var obj = context.store.get(idValue.id);
        var isRootQuery = idValue.id === 'ROOT_QUERY';
        if (!obj) return isRootQuery;
        var _a = obj.__typename, __typename = _a === void 0 ? isRootQuery && 'Query' : _a;
        _tsInvariant.invariant(__typename, "Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        if (__typename === typeCondition) return true;
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (__typename && implementingTypes && implementingTypes.indexOf(__typename) > -1) return true;
        return false;
    };
    IntrospectionFragmentMatcher1.prototype.parseIntrospectionResult = function(introspectionResultData) {
        var typeMap = {
        };
        introspectionResultData.__schema.types.forEach(function(type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') typeMap[type.name] = type.possibleTypes.map(function(implementingType) {
                return implementingType.name;
            });
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher1;
}();
var hasOwn = Object.prototype.hasOwnProperty;
var DepTrackingCache = function() {
    function DepTrackingCache1(data) {
        var _this = this;
        if (data === void 0) data = Object.create(null);
        this.data = data;
        this.depend = _optimism.wrap(function(dataId) {
            return _this.data[dataId];
        }, {
            disposable: true,
            makeCacheKey: function(dataId) {
                return dataId;
            }
        });
    }
    DepTrackingCache1.prototype.toObject = function() {
        return this.data;
    };
    DepTrackingCache1.prototype.get = function(dataId) {
        this.depend(dataId);
        return this.data[dataId];
    };
    DepTrackingCache1.prototype.set = function(dataId, value) {
        var oldValue = this.data[dataId];
        if (value !== oldValue) {
            this.data[dataId] = value;
            this.depend.dirty(dataId);
        }
    };
    DepTrackingCache1.prototype.delete = function(dataId) {
        if (hasOwn.call(this.data, dataId)) {
            delete this.data[dataId];
            this.depend.dirty(dataId);
        }
    };
    DepTrackingCache1.prototype.clear = function() {
        this.replace(null);
    };
    DepTrackingCache1.prototype.replace = function(newData) {
        var _this = this;
        if (newData) {
            Object.keys(newData).forEach(function(dataId) {
                _this.set(dataId, newData[dataId]);
            });
            Object.keys(this.data).forEach(function(dataId) {
                if (!hasOwn.call(newData, dataId)) _this.delete(dataId);
            });
        } else Object.keys(this.data).forEach(function(dataId) {
            _this.delete(dataId);
        });
    };
    return DepTrackingCache1;
}();
function defaultNormalizedCacheFactory(seed) {
    return new DepTrackingCache(seed);
}
var StoreReader = function() {
    function StoreReader1(_a1) {
        var _this = this;
        var _b = _a1 === void 0 ? {
        } : _a1, _c = _b.cacheKeyRoot, cacheKeyRoot = _c === void 0 ? new _optimism.KeyTrie(_apolloUtilities.canUseWeakMap) : _c, _d = _b.freezeResults, freezeResults = _d === void 0 ? false : _d;
        var _e = this, executeStoreQuery = _e.executeStoreQuery, executeSelectionSet = _e.executeSelectionSet, executeSubSelectedArray = _e.executeSubSelectedArray;
        this.freezeResults = freezeResults;
        this.executeStoreQuery = _optimism.wrap(function(options) {
            return executeStoreQuery.call(_this, options);
        }, {
            makeCacheKey: function(_a) {
                var query = _a.query, rootValue = _a.rootValue, contextValue = _a.contextValue, variableValues = _a.variableValues, fragmentMatcher = _a.fragmentMatcher;
                if (contextValue.store instanceof DepTrackingCache) return cacheKeyRoot.lookup(contextValue.store, query, fragmentMatcher, JSON.stringify(variableValues), rootValue.id);
            }
        });
        this.executeSelectionSet = _optimism.wrap(function(options) {
            return executeSelectionSet.call(_this, options);
        }, {
            makeCacheKey: function(_a) {
                var selectionSet = _a.selectionSet, rootValue = _a.rootValue, execContext = _a.execContext;
                if (execContext.contextValue.store instanceof DepTrackingCache) return cacheKeyRoot.lookup(execContext.contextValue.store, selectionSet, execContext.fragmentMatcher, JSON.stringify(execContext.variableValues), rootValue.id);
            }
        });
        this.executeSubSelectedArray = _optimism.wrap(function(options) {
            return executeSubSelectedArray.call(_this, options);
        }, {
            makeCacheKey: function(_a) {
                var field = _a.field, array = _a.array, execContext = _a.execContext;
                if (execContext.contextValue.store instanceof DepTrackingCache) return cacheKeyRoot.lookup(execContext.contextValue.store, field, array, JSON.stringify(execContext.variableValues));
            }
        });
    }
    StoreReader1.prototype.readQueryFromStore = function(options) {
        return this.diffQueryAgainstStore(_tslib.__assign(_tslib.__assign({
        }, options), {
            returnPartialData: false
        })).result;
    };
    StoreReader1.prototype.diffQueryAgainstStore = function(_a) {
        var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
        var queryDefinition = _apolloUtilities.getQueryDefinition(query);
        variables = _apolloUtilities.assign({
        }, _apolloUtilities.getDefaultValues(queryDefinition), variables);
        var context = {
            store: store,
            dataIdFromObject: config && config.dataIdFromObject,
            cacheRedirects: config && config.cacheRedirects || {
            }
        };
        var execResult = this.executeStoreQuery({
            query: query,
            rootValue: {
                type: 'id',
                id: rootId,
                generated: true,
                typename: 'Query'
            },
            contextValue: context,
            variableValues: variables,
            fragmentMatcher: fragmentMatcherFunction
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) execResult.missing.forEach(function(info) {
            if (info.tolerable) return;
            throw new _tsInvariant.InvariantError("Can't find field " + info.fieldName + " on object " + JSON.stringify(info.object, null, 2) + ".");
        });
        if (previousResult) {
            if (_apolloUtilities.isEqual(previousResult, execResult.result)) execResult.result = previousResult;
        }
        return {
            result: execResult.result,
            complete: !hasMissingFields
        };
    };
    StoreReader1.prototype.executeStoreQuery = function(_a) {
        var query = _a.query, rootValue = _a.rootValue, contextValue = _a.contextValue, variableValues = _a.variableValues, _b = _a.fragmentMatcher, fragmentMatcher = _b === void 0 ? defaultFragmentMatcher : _b;
        var mainDefinition = _apolloUtilities.getMainDefinition(query);
        var fragments = _apolloUtilities.getFragmentDefinitions(query);
        var fragmentMap = _apolloUtilities.createFragmentMap(fragments);
        var execContext = {
            query: query,
            fragmentMap: fragmentMap,
            contextValue: contextValue,
            variableValues: variableValues,
            fragmentMatcher: fragmentMatcher
        };
        return this.executeSelectionSet({
            selectionSet: mainDefinition.selectionSet,
            rootValue: rootValue,
            execContext: execContext
        });
    };
    StoreReader1.prototype.executeSelectionSet = function(_a2) {
        var _this = this;
        var selectionSet = _a2.selectionSet, rootValue = _a2.rootValue, execContext = _a2.execContext;
        var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
        var finalResult = {
            result: null
        };
        var objectsToMerge = [];
        var object = contextValue.store.get(rootValue.id);
        var typename = object && object.__typename || rootValue.id === 'ROOT_QUERY' && 'Query' || void 0;
        function handleMissing(result) {
            var _a;
            if (result.missing) {
                finalResult.missing = finalResult.missing || [];
                (_a = finalResult.missing).push.apply(_a, result.missing);
            }
            return result.result;
        }
        selectionSet.selections.forEach(function(selection) {
            var _a;
            if (!_apolloUtilities.shouldInclude(selection, variables)) return;
            if (_apolloUtilities.isField(selection)) {
                var fieldResult = handleMissing(_this.executeField(object, typename, selection, execContext));
                if (typeof fieldResult !== 'undefined') objectsToMerge.push((_a = {
                }, _a[_apolloUtilities.resultKeyNameFromField(selection)] = fieldResult, _a));
            } else {
                var fragment = void 0;
                if (_apolloUtilities.isInlineFragment(selection)) fragment = selection;
                else {
                    fragment = fragmentMap[selection.name.value];
                    if (!fragment) throw new _tsInvariant.InvariantError("No fragment named " + selection.name.value);
                }
                var typeCondition = fragment.typeCondition && fragment.typeCondition.name.value;
                var match = !typeCondition || execContext.fragmentMatcher(rootValue, typeCondition, contextValue);
                if (match) {
                    var fragmentExecResult = _this.executeSelectionSet({
                        selectionSet: fragment.selectionSet,
                        rootValue: rootValue,
                        execContext: execContext
                    });
                    if (match === 'heuristic' && fragmentExecResult.missing) fragmentExecResult = _tslib.__assign(_tslib.__assign({
                    }, fragmentExecResult), {
                        missing: fragmentExecResult.missing.map(function(info) {
                            return _tslib.__assign(_tslib.__assign({
                            }, info), {
                                tolerable: true
                            });
                        })
                    });
                    objectsToMerge.push(handleMissing(fragmentExecResult));
                }
            }
        });
        finalResult.result = _apolloUtilities.mergeDeepArray(objectsToMerge);
        if (this.freezeResults && true) Object.freeze(finalResult.result);
        return finalResult;
    };
    StoreReader1.prototype.executeField = function(object, typename, field, execContext) {
        var variables = execContext.variableValues, contextValue = execContext.contextValue;
        var fieldName = field.name.value;
        var args = _apolloUtilities.argumentsObjectFromField(field, variables);
        var info = {
            resultKey: _apolloUtilities.resultKeyNameFromField(field),
            directives: _apolloUtilities.getDirectiveInfoFromField(field, variables)
        };
        var readStoreResult = readStoreResolver(object, typename, fieldName, args, contextValue, info);
        if (Array.isArray(readStoreResult.result)) return this.combineExecResults(readStoreResult, this.executeSubSelectedArray({
            field: field,
            array: readStoreResult.result,
            execContext: execContext
        }));
        if (!field.selectionSet) {
            assertSelectionSetForIdValue(field, readStoreResult.result);
            if (this.freezeResults && true) _apolloUtilities.maybeDeepFreeze(readStoreResult);
            return readStoreResult;
        }
        if (readStoreResult.result == null) return readStoreResult;
        return this.combineExecResults(readStoreResult, this.executeSelectionSet({
            selectionSet: field.selectionSet,
            rootValue: readStoreResult.result,
            execContext: execContext
        }));
    };
    StoreReader1.prototype.combineExecResults = function() {
        var execResults = [];
        for(var _i = 0; _i < arguments.length; _i++)execResults[_i] = arguments[_i];
        var missing;
        execResults.forEach(function(execResult) {
            if (execResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, execResult.missing);
            }
        });
        return {
            result: execResults.pop().result,
            missing: missing
        };
    };
    StoreReader1.prototype.executeSubSelectedArray = function(_a) {
        var _this = this;
        var field = _a.field, array = _a.array, execContext = _a.execContext;
        var missing;
        function handleMissing(childResult) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            return childResult.result;
        }
        array = array.map(function(item) {
            if (item === null) return null;
            if (Array.isArray(item)) return handleMissing(_this.executeSubSelectedArray({
                field: field,
                array: item,
                execContext: execContext
            }));
            if (field.selectionSet) return handleMissing(_this.executeSelectionSet({
                selectionSet: field.selectionSet,
                rootValue: item,
                execContext: execContext
            }));
            assertSelectionSetForIdValue(field, item);
            return item;
        });
        if (this.freezeResults && true) Object.freeze(array);
        return {
            result: array,
            missing: missing
        };
    };
    return StoreReader1;
}();
function assertSelectionSetForIdValue(field, value) {
    if (!field.selectionSet && _apolloUtilities.isIdValue(value)) throw new _tsInvariant.InvariantError("Missing selection set for object of type " + value.typename + " returned for query field " + field.name.value);
}
function defaultFragmentMatcher() {
    return true;
}
function assertIdValue(idValue) {
    _tsInvariant.invariant(_apolloUtilities.isIdValue(idValue), "Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
}
function readStoreResolver(object, typename, fieldName, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    var storeKeyName = fieldName;
    if (args || directives) storeKeyName = _apolloUtilities.getStoreKeyName(storeKeyName, args, directives);
    var fieldValue = void 0;
    if (object) {
        fieldValue = object[storeKeyName];
        if (typeof fieldValue === 'undefined' && context.cacheRedirects && typeof typename === 'string') {
            var type = context.cacheRedirects[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) fieldValue = resolver(object, args, {
                    getCacheKey: function(storeObj) {
                        var id = context.dataIdFromObject(storeObj);
                        return id && _apolloUtilities.toIdValue({
                            id: id,
                            typename: storeObj.__typename
                        });
                    }
                });
            }
        }
    }
    if (typeof fieldValue === 'undefined') return {
        result: fieldValue,
        missing: [
            {
                object: object,
                fieldName: storeKeyName,
                tolerable: false
            }
        ]
    };
    if (_apolloUtilities.isJsonValue(fieldValue)) fieldValue = fieldValue.json;
    return {
        result: fieldValue
    };
}
var ObjectCache = function() {
    function ObjectCache1(data) {
        if (data === void 0) data = Object.create(null);
        this.data = data;
    }
    ObjectCache1.prototype.toObject = function() {
        return this.data;
    };
    ObjectCache1.prototype.get = function(dataId) {
        return this.data[dataId];
    };
    ObjectCache1.prototype.set = function(dataId, value) {
        this.data[dataId] = value;
    };
    ObjectCache1.prototype.delete = function(dataId) {
        this.data[dataId] = void 0;
    };
    ObjectCache1.prototype.clear = function() {
        this.data = Object.create(null);
    };
    ObjectCache1.prototype.replace = function(newData) {
        this.data = newData || Object.create(null);
    };
    return ObjectCache1;
}();
function defaultNormalizedCacheFactory$1(seed) {
    return new ObjectCache(seed);
}
var WriteError = function(_super) {
    _tslib.__extends(WriteError1, _super);
    function WriteError1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError1;
}(Error);
function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + JSON.stringify(document));
    enhancedError.message += '\n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
var StoreWriter = function() {
    function StoreWriter1() {
    }
    StoreWriter1.prototype.writeQueryToStore = function(_a) {
        var query = _a.query, result = _a.result, _b = _a.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        return this.writeResultToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            document: query,
            store: store,
            variables: variables,
            dataIdFromObject: dataIdFromObject,
            fragmentMatcherFunction: fragmentMatcherFunction
        });
    };
    StoreWriter1.prototype.writeResultToStore = function(_a) {
        var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        var operationDefinition = _apolloUtilities.getOperationDefinition(document);
        try {
            return this.writeSelectionSetToStore({
                result: result,
                dataId: dataId,
                selectionSet: operationDefinition.selectionSet,
                context: {
                    store: store,
                    processedData: {
                    },
                    variables: _apolloUtilities.assign({
                    }, _apolloUtilities.getDefaultValues(operationDefinition), variables),
                    dataIdFromObject: dataIdFromObject,
                    fragmentMap: _apolloUtilities.createFragmentMap(_apolloUtilities.getFragmentDefinitions(document)),
                    fragmentMatcherFunction: fragmentMatcherFunction
                }
            });
        } catch (e) {
            throw enhanceErrorWithDocument(e, document);
        }
    };
    StoreWriter1.prototype.writeSelectionSetToStore = function(_a3) {
        var _this = this;
        var result = _a3.result, dataId = _a3.dataId, selectionSet = _a3.selectionSet, context = _a3.context;
        var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
        selectionSet.selections.forEach(function(selection) {
            var _a;
            if (!_apolloUtilities.shouldInclude(selection, variables)) return;
            if (_apolloUtilities.isField(selection)) {
                var resultFieldKey = _apolloUtilities.resultKeyNameFromField(selection);
                var value = result[resultFieldKey];
                if (typeof value !== 'undefined') _this.writeFieldToStore({
                    dataId: dataId,
                    value: value,
                    field: selection,
                    context: context
                });
                else {
                    var isDefered = false;
                    var isClient = false;
                    if (selection.directives && selection.directives.length) {
                        isDefered = selection.directives.some(function(directive) {
                            return directive.name && directive.name.value === 'defer';
                        });
                        isClient = selection.directives.some(function(directive) {
                            return directive.name && directive.name.value === 'client';
                        });
                    }
                    if (!isDefered && !isClient && context.fragmentMatcherFunction) _tsInvariant.invariant.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                }
            } else {
                var fragment = void 0;
                if (_apolloUtilities.isInlineFragment(selection)) fragment = selection;
                else {
                    fragment = (fragmentMap || {
                    })[selection.name.value];
                    _tsInvariant.invariant(fragment, "No fragment named " + selection.name.value + ".");
                }
                var matches = true;
                if (context.fragmentMatcherFunction && fragment.typeCondition) {
                    var id = dataId || 'self';
                    var idValue = _apolloUtilities.toIdValue({
                        id: id,
                        typename: undefined
                    });
                    var fakeContext = {
                        store: new ObjectCache((_a = {
                        }, _a[id] = result, _a)),
                        cacheRedirects: {
                        }
                    };
                    var match = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                    if (!_apolloUtilities.isProduction() && match === 'heuristic') _tsInvariant.invariant.error('WARNING: heuristic fragment matching going on!');
                    matches = !!match;
                }
                if (matches) _this.writeSelectionSetToStore({
                    result: result,
                    selectionSet: fragment.selectionSet,
                    dataId: dataId,
                    context: context
                });
            }
        });
        return store;
    };
    StoreWriter1.prototype.writeFieldToStore = function(_a) {
        var _b;
        var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
        var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
        var storeValue;
        var storeObject;
        var storeFieldName = _apolloUtilities.storeKeyNameFromField(field, variables);
        if (!field.selectionSet || value === null) storeValue = value != null && typeof value === 'object' ? {
            type: 'json',
            json: value
        } : value;
        else if (Array.isArray(value)) {
            var generatedId = dataId + "." + storeFieldName;
            storeValue = this.processArrayValue(value, generatedId, field.selectionSet, context);
        } else {
            var valueDataId = dataId + "." + storeFieldName;
            var generated = true;
            if (!isGeneratedId(valueDataId)) valueDataId = '$' + valueDataId;
            if (dataIdFromObject) {
                var semanticId = dataIdFromObject(value);
                _tsInvariant.invariant(!semanticId || !isGeneratedId(semanticId), 'IDs returned by dataIdFromObject cannot begin with the "$" character.');
                if (semanticId || typeof semanticId === 'number' && semanticId === 0) {
                    valueDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(valueDataId, field, context.processedData)) this.writeSelectionSetToStore({
                dataId: valueDataId,
                result: value,
                selectionSet: field.selectionSet,
                context: context
            });
            var typename = value.__typename;
            storeValue = _apolloUtilities.toIdValue({
                id: valueDataId,
                typename: typename
            }, generated);
            storeObject = store.get(dataId);
            var escapedId = storeObject && storeObject[storeFieldName];
            if (escapedId !== storeValue && _apolloUtilities.isIdValue(escapedId)) {
                var hadTypename = escapedId.typename !== undefined;
                var hasTypename = typename !== undefined;
                var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
                _tsInvariant.invariant(!generated || escapedId.generated || typenameChanged, "Store error: the application attempted to write an object with no provided id but the store already contains an id of " + escapedId.id + " for this object. The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
                _tsInvariant.invariant(!hadTypename || hasTypename, "Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
                if (escapedId.generated) {
                    if (typenameChanged) {
                        if (!generated) store.delete(escapedId.id);
                    } else mergeWithGenerated(escapedId.id, storeValue.id, store);
                }
            }
        }
        storeObject = store.get(dataId);
        if (!storeObject || !_apolloUtilities.isEqual(storeValue, storeObject[storeFieldName])) store.set(dataId, _tslib.__assign(_tslib.__assign({
        }, storeObject), (_b = {
        }, _b[storeFieldName] = storeValue, _b)));
    };
    StoreWriter1.prototype.processArrayValue = function(value, generatedId, selectionSet, context) {
        var _this = this;
        return value.map(function(item, index) {
            if (item === null) return null;
            var itemDataId = generatedId + "." + index;
            if (Array.isArray(item)) return _this.processArrayValue(item, itemDataId, selectionSet, context);
            var generated = true;
            if (context.dataIdFromObject) {
                var semanticId = context.dataIdFromObject(item);
                if (semanticId) {
                    itemDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) _this.writeSelectionSetToStore({
                dataId: itemDataId,
                result: item,
                selectionSet: selectionSet,
                context: context
            });
            return _apolloUtilities.toIdValue({
                id: itemDataId,
                typename: item.__typename
            }, generated);
        });
    };
    return StoreWriter1;
}();
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    if (generatedKey === realKey) return false;
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    var madeChanges = false;
    Object.keys(generated).forEach(function(key) {
        var value = generated[key];
        var realValue = real[key];
        if (_apolloUtilities.isIdValue(value) && isGeneratedId(value.id) && _apolloUtilities.isIdValue(realValue) && !_apolloUtilities.isEqual(value, realValue) && mergeWithGenerated(value.id, realValue.id, cache)) madeChanges = true;
    });
    cache.delete(generatedKey);
    var newRealValue = _tslib.__assign(_tslib.__assign({
    }, generated), real);
    if (_apolloUtilities.isEqual(newRealValue, real)) return madeChanges;
    cache.set(realKey, newRealValue);
    return true;
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) return false;
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) return true;
        else processedData[dataId].push(field);
    } else processedData[dataId] = [
        field
    ];
    return false;
}
var defaultConfig = {
    fragmentMatcher: new HeuristicFragmentMatcher(),
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    freezeResults: false
};
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) return result.__typename + ":" + result.id;
        if (result._id !== undefined) return result.__typename + ":" + result._id;
    }
    return null;
}
var hasOwn$1 = Object.prototype.hasOwnProperty;
var OptimisticCacheLayer = function(_super) {
    _tslib.__extends(OptimisticCacheLayer1, _super);
    function OptimisticCacheLayer1(optimisticId, parent, transaction) {
        var _this = _super.call(this, Object.create(null)) || this;
        _this.optimisticId = optimisticId;
        _this.parent = parent;
        _this.transaction = transaction;
        return _this;
    }
    OptimisticCacheLayer1.prototype.toObject = function() {
        return _tslib.__assign(_tslib.__assign({
        }, this.parent.toObject()), this.data);
    };
    OptimisticCacheLayer1.prototype.get = function(dataId) {
        return hasOwn$1.call(this.data, dataId) ? this.data[dataId] : this.parent.get(dataId);
    };
    return OptimisticCacheLayer1;
}(ObjectCache);
var InMemoryCache = function(_super) {
    _tslib.__extends(InMemoryCache1, _super);
    function InMemoryCache1(config) {
        if (config === void 0) config = {
        };
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.cacheKeyRoot = new _optimism.KeyTrie(_apolloUtilities.canUseWeakMap);
        _this.silenceBroadcast = false;
        _this.config = _tslib.__assign(_tslib.__assign({
        }, defaultConfig), config);
        if (_this.config.customResolvers) {
            _tsInvariant.invariant.warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.customResolvers;
        }
        if (_this.config.cacheResolvers) {
            _tsInvariant.invariant.warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.cacheResolvers;
        }
        _this.addTypename = !!_this.config.addTypename;
        _this.data = _this.config.resultCaching ? new DepTrackingCache() : new ObjectCache();
        _this.optimisticData = _this.data;
        _this.storeWriter = new StoreWriter();
        _this.storeReader = new StoreReader({
            cacheKeyRoot: _this.cacheKeyRoot,
            freezeResults: config.freezeResults
        });
        var cache = _this;
        var maybeBroadcastWatch = cache.maybeBroadcastWatch;
        _this.maybeBroadcastWatch = _optimism.wrap(function(c) {
            return maybeBroadcastWatch.call(_this, c);
        }, {
            makeCacheKey: function(c) {
                if (c.optimistic) return;
                if (c.previousResult) return;
                if (cache.data instanceof DepTrackingCache) return cache.cacheKeyRoot.lookup(c.query, JSON.stringify(c.variables));
            }
        });
        return _this;
    }
    InMemoryCache1.prototype.restore = function(data) {
        if (data) this.data.replace(data);
        return this;
    };
    InMemoryCache1.prototype.extract = function(optimistic) {
        if (optimistic === void 0) optimistic = false;
        return (optimistic ? this.optimisticData : this.data).toObject();
    };
    InMemoryCache1.prototype.read = function(options) {
        if (typeof options.rootId === 'string' && typeof this.data.get(options.rootId) === 'undefined') return null;
        var fragmentMatcher = this.config.fragmentMatcher;
        var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
        return this.storeReader.readQueryFromStore({
            store: options.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(options.query),
            variables: options.variables,
            rootId: options.rootId,
            fragmentMatcherFunction: fragmentMatcherFunction,
            previousResult: options.previousResult,
            config: this.config
        }) || null;
    };
    InMemoryCache1.prototype.write = function(write) {
        var fragmentMatcher = this.config.fragmentMatcher;
        var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
        this.storeWriter.writeResultToStore({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: fragmentMatcherFunction
        });
        this.broadcastWatches();
    };
    InMemoryCache1.prototype.diff = function(query) {
        var fragmentMatcher = this.config.fragmentMatcher;
        var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
        return this.storeReader.diffQueryAgainstStore({
            store: query.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: fragmentMatcherFunction,
            config: this.config
        });
    };
    InMemoryCache1.prototype.watch = function(watch) {
        var _this = this;
        this.watches.add(watch);
        return function() {
            _this.watches.delete(watch);
        };
    };
    InMemoryCache1.prototype.evict = function(query) {
        throw new _tsInvariant.InvariantError("eviction is not implemented on InMemory Cache");
    };
    InMemoryCache1.prototype.reset = function() {
        this.data.clear();
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache1.prototype.removeOptimistic = function(idToRemove) {
        var toReapply = [];
        var removedCount = 0;
        var layer = this.optimisticData;
        while(layer instanceof OptimisticCacheLayer){
            if (layer.optimisticId === idToRemove) ++removedCount;
            else toReapply.push(layer);
            layer = layer.parent;
        }
        if (removedCount > 0) {
            this.optimisticData = layer;
            while(toReapply.length > 0){
                var layer_1 = toReapply.pop();
                this.performTransaction(layer_1.transaction, layer_1.optimisticId);
            }
            this.broadcastWatches();
        }
    };
    InMemoryCache1.prototype.performTransaction = function(transaction, optimisticId) {
        var _a = this, data = _a.data, silenceBroadcast = _a.silenceBroadcast;
        this.silenceBroadcast = true;
        if (typeof optimisticId === 'string') this.data = this.optimisticData = new OptimisticCacheLayer(optimisticId, this.optimisticData, transaction);
        try {
            transaction(this);
        } finally{
            this.silenceBroadcast = silenceBroadcast;
            this.data = data;
        }
        this.broadcastWatches();
    };
    InMemoryCache1.prototype.recordOptimisticTransaction = function(transaction, id) {
        return this.performTransaction(transaction, id);
    };
    InMemoryCache1.prototype.transformDocument = function(document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = _apolloUtilities.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache1.prototype.broadcastWatches = function() {
        var _this = this;
        if (!this.silenceBroadcast) this.watches.forEach(function(c) {
            return _this.maybeBroadcastWatch(c);
        });
    };
    InMemoryCache1.prototype.maybeBroadcastWatch = function(c) {
        c.callback(this.diff({
            query: c.query,
            variables: c.variables,
            previousResult: c.previousResult && c.previousResult(),
            optimistic: c.optimistic
        }));
    };
    return InMemoryCache1;
}(_apolloCache.ApolloCache);

},{"tslib":"lRdW5","apollo-cache":"bWHY2","apollo-utilities":"dWAge","optimism":"2p9hL","ts-invariant":"gP8E6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWHY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApolloCache", ()=>ApolloCache
);
parcelHelpers.export(exports, "Cache", ()=>Cache
);
var _apolloUtilities = require("apollo-utilities");
function queryFromPojo(obj) {
    var op = {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery'
        },
        selectionSet: selectionSetFromObj(obj)
    };
    var out = {
        kind: 'Document',
        definitions: [
            op
        ]
    };
    return out;
}
function fragmentFromPojo(obj, typename) {
    var frag = {
        kind: 'FragmentDefinition',
        typeCondition: {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: typename || '__FakeType'
            }
        },
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery'
        },
        selectionSet: selectionSetFromObj(obj)
    };
    var out = {
        kind: 'Document',
        definitions: [
            frag
        ]
    };
    return out;
}
function selectionSetFromObj(obj) {
    if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'string' || typeof obj === 'undefined' || obj === null) return null;
    if (Array.isArray(obj)) return selectionSetFromObj(obj[0]);
    var selections = [];
    Object.keys(obj).forEach(function(key) {
        var nestedSelSet = selectionSetFromObj(obj[key]);
        var field = {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: key
            },
            selectionSet: nestedSelSet || undefined
        };
        selections.push(field);
    });
    var selectionSet = {
        kind: 'SelectionSet',
        selections: selections
    };
    return selectionSet;
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: null,
                        name: {
                            kind: 'Name',
                            value: '__typename'
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, 
                ]
            }
        }, 
    ]
};
var ApolloCache = function() {
    function ApolloCache1() {
    }
    ApolloCache1.prototype.transformDocument = function(document) {
        return document;
    };
    ApolloCache1.prototype.transformForLink = function(document) {
        return document;
    };
    ApolloCache1.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic
        });
    };
    ApolloCache1.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) optimistic = false;
        return this.read({
            query: _apolloUtilities.getFragmentQueryDocument(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic
        });
    };
    ApolloCache1.prototype.writeQuery = function(options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables
        });
    };
    ApolloCache1.prototype.writeFragment = function(options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: _apolloUtilities.getFragmentQueryDocument(options.fragment, options.fragmentName)
        });
    };
    ApolloCache1.prototype.writeData = function(_a) {
        var id = _a.id, data = _a.data;
        if (typeof id !== 'undefined') {
            var typenameResult = null;
            try {
                typenameResult = this.read({
                    rootId: id,
                    optimistic: false,
                    query: justTypenameQuery
                });
            } catch (e) {
            }
            var __typename = typenameResult && typenameResult.__typename || '__ClientData';
            var dataToWrite = Object.assign({
                __typename: __typename
            }, data);
            this.writeFragment({
                id: id,
                fragment: fragmentFromPojo(dataToWrite, __typename),
                data: dataToWrite
            });
        } else this.writeQuery({
            query: queryFromPojo(data),
            data: data
        });
    };
    return ApolloCache1;
}();
var Cache;
Cache = {
};

},{"apollo-utilities":"dWAge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2p9hL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncFromGen", ()=>_context.asyncFromGen
);
parcelHelpers.export(exports, "bindContext", ()=>_context.bind
);
parcelHelpers.export(exports, "noContext", ()=>_context.noContext
);
parcelHelpers.export(exports, "setTimeout", ()=>_context.setTimeout
);
parcelHelpers.export(exports, "KeyTrie", ()=>KeyTrie
);
parcelHelpers.export(exports, "defaultMakeCacheKey", ()=>defaultMakeCacheKey
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
var _context = require("@wry/context");
function defaultDispose() {
}
var Cache = function() {
    function Cache1(max, dispose) {
        if (max === void 0) max = Infinity;
        if (dispose === void 0) dispose = defaultDispose;
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache1.prototype.has = function(key) {
        return this.map.has(key);
    };
    Cache1.prototype.get = function(key) {
        var entry = this.getEntry(key);
        return entry && entry.value;
    };
    Cache1.prototype.getEntry = function(key) {
        var entry = this.map.get(key);
        if (entry && entry !== this.newest) {
            var older = entry.older, newer = entry.newer;
            if (newer) newer.older = older;
            if (older) older.newer = newer;
            entry.older = this.newest;
            entry.older.newer = entry;
            entry.newer = null;
            this.newest = entry;
            if (entry === this.oldest) this.oldest = newer;
        }
        return entry;
    };
    Cache1.prototype.set = function(key, value) {
        var entry = this.getEntry(key);
        if (entry) return entry.value = value;
        entry = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) this.newest.newer = entry;
        this.newest = entry;
        this.oldest = this.oldest || entry;
        this.map.set(key, entry);
        return entry.value;
    };
    Cache1.prototype.clean = function() {
        while(this.oldest && this.map.size > this.max)this.delete(this.oldest.key);
    };
    Cache1.prototype.delete = function(key) {
        var entry = this.map.get(key);
        if (entry) {
            if (entry === this.newest) this.newest = entry.older;
            if (entry === this.oldest) this.oldest = entry.newer;
            if (entry.newer) entry.newer.older = entry.older;
            if (entry.older) entry.older.newer = entry.newer;
            this.map.delete(key);
            this.dispose(entry.value, key);
            return true;
        }
        return false;
    };
    return Cache1;
}();
var parentEntrySlot = new _context.Slot();
var reusableEmptyArray = [];
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) throw new Error(optionalMessage || "assertion failure");
}
function valueIs(a, b) {
    var len = a.length;
    return(// Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch(value.length){
        case 0:
            throw new Error("unknown value");
        case 1:
            return value[0];
        case 2:
            throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = function() {
    function Entry1(fn, args) {
        this.fn = fn;
        this.args = args;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        ++Entry1.count;
    }
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry1.prototype.recompute = function() {
        assert(!this.recomputing, "already recomputing");
        if (!rememberParent(this) && maybeReportOrphan(this)) // The recipient of the entry.reportOrphan callback decided to dispose
        // of this orphan entry by calling entry.dispose(), so we don't need to
        // (and should not) proceed with the recomputation.
        return void 0;
        return mightBeDirty(this) ? reallyRecompute(this) : valueGet(this.value);
    };
    Entry1.prototype.setDirty = function() {
        if (this.dirty) return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry1.prototype.dispose = function() {
        var _this = this;
        forgetChildren(this).forEach(maybeReportOrphan);
        maybeUnsubscribe(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        this.parents.forEach(function(parent) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry1.count = 0;
    return Entry1;
}();
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) parent.childValues.set(child, []);
        if (mightBeDirty(child)) reportDirtyChild(parent, child);
        else reportCleanChild(parent, child);
        return parent;
    }
}
function reallyRecompute(entry) {
    // Since this recomputation is likely to re-remember some of this
    // entry's children, we forget our children here but do not call
    // maybeReportOrphan until after the recomputation finishes.
    var originalChildren = forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [
        entry
    ]);
    if (maybeSubscribe(entry)) // If we successfully recomputed entry.value and did not fail to
    // (re)subscribe, then this Entry is no longer explicitly dirty.
    setClean(entry);
    // Now that we've had a chance to re-remember any children that were
    // involved in the recomputation, we can safely report any orphan
    // children that remain.
    originalChildren.forEach(maybeReportOrphan);
    return valueGet(entry.value);
}
function recomputeNewValue(entry) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, entry.args);
    } catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) // This Entry may still have dirty children, in which case we can't
    // let our parents know we're clean just yet.
    return;
    reportClean(entry);
}
function reportDirty(child) {
    child.parents.forEach(function(parent) {
        return reportDirtyChild(parent, child);
    });
}
function reportClean(child) {
    child.parents.forEach(function(parent) {
        return reportCleanChild(parent, child);
    });
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    if (!parent.dirtyChildren) parent.dirtyChildren = emptySetPool.pop() || new Set;
    else if (parent.dirtyChildren.has(child)) // If we already know this child is dirty, then we must have already
    // informed our own parents that we are dirty, so we can terminate
    // the recursion early.
    return;
    parent.dirtyChildren.add(child);
    reportDirty(parent);
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) parent.childValues.set(child, valueCopy(child.value));
    else if (!valueIs(childValue, child.value)) parent.setDirty();
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) return;
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) emptySetPool.push(dc);
            parent.dirtyChildren = null;
        }
    }
}
// If the given entry has a reportOrphan method, and no remaining parents,
// call entry.reportOrphan and return true iff it returns true. The
// reportOrphan function should return true to indicate entry.dispose()
// has been called, and the entry has been removed from any other caches
// (see index.js for the only current example).
function maybeReportOrphan(entry) {
    return entry.parents.size === 0 && typeof entry.reportOrphan === "function" && entry.reportOrphan() === true;
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    var children = reusableEmptyArray;
    if (parent.childValues.size > 0) {
        children = [];
        parent.childValues.forEach(function(_value, child) {
            forgetChild(parent, child);
            children.push(child);
        });
    }
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
    return children;
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry) {
    if (typeof entry.subscribe === "function") try {
        maybeUnsubscribe(entry); // Prevent double subscriptions.
        entry.unsubscribe = entry.subscribe.apply(null, entry.args);
    } catch (e) {
        // If this Entry has a subscribe function and it threw an exception
        // (or an unsubscribe function it previously returned now throws),
        // return false to indicate that we were not able to subscribe (or
        // unsubscribe), and this Entry should remain dirty.
        entry.setDirty();
        return false;
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}
function maybeUnsubscribe(entry) {
    var unsubscribe = entry.unsubscribe;
    if (typeof unsubscribe === "function") {
        entry.unsubscribe = void 0;
        unsubscribe();
    }
}
// A trie data structure that holds object keys weakly, yet can also hold
// non-object keys, unlike the native `WeakMap`.
var KeyTrie = function() {
    function KeyTrie1(weakness) {
        this.weakness = weakness;
    }
    KeyTrie1.prototype.lookup = function() {
        var array = [];
        for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
        return this.lookupArray(array);
    };
    KeyTrie1.prototype.lookupArray = function(array) {
        var node = this;
        array.forEach(function(key) {
            return node = node.getChildTrie(key);
        });
        return node.data || (node.data = Object.create(null));
    };
    KeyTrie1.prototype.getChildTrie = function(key) {
        var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child) map.set(key, child = new KeyTrie1(this.weakness));
        return child;
    };
    return KeyTrie1;
}();
function isObjRef(value) {
    switch(typeof value){
        case "object":
            if (value === null) break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var keyTrie = new KeyTrie(typeof WeakMap === "function");
function defaultMakeCacheKey() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return keyTrie.lookupArray(args);
}
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) options = Object.create(null);
    var cache1 = new Cache(options.max || Math.pow(2, 16), function(entry) {
        return entry.dispose();
    });
    var disposable = !!options.disposable;
    var makeCacheKey = options.makeCacheKey || defaultMakeCacheKey;
    function optimistic() {
        if (disposable && !parentEntrySlot.hasValue()) // If there's no current parent computation, and this wrapped
        // function is disposable (meaning we don't care about entry.value,
        // just dependency tracking), then we can short-cut everything else
        // in this function, because entry.recompute() is going to recycle
        // the entry object without recomputing anything, anyway.
        return void 0;
        var key = makeCacheKey.apply(null, arguments);
        if (key === void 0) return originalFunction.apply(null, arguments);
        var args = Array.prototype.slice.call(arguments);
        var entry = cache1.get(key);
        if (entry) entry.args = args;
        else {
            entry = new Entry(originalFunction, args);
            cache1.set(key, entry);
            entry.subscribe = options.subscribe;
            if (disposable) entry.reportOrphan = function() {
                return cache1.delete(key);
            };
        }
        var value = entry.recompute();
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache1.set(key, entry);
        caches.add(cache1);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function(cache) {
                return cache.clean();
            });
            caches.clear();
        }
        // If options.disposable is truthy, the caller of wrap is telling us
        // they don't care about the result of entry.recompute(), so we should
        // avoid returning the value, so it won't be accidentally used.
        return disposable ? void 0 : value;
    }
    optimistic.dirty = function() {
        var key = makeCacheKey.apply(null, arguments);
        var child = key !== void 0 && cache1.get(key);
        if (child) child.setDirty();
    };
    return optimistic;
}

},{"@wry/context":"fwdpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fwdpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slot", ()=>Slot
);
parcelHelpers.export(exports, "asyncFromGen", ()=>asyncFromGen
);
parcelHelpers.export(exports, "bind", ()=>bind
);
parcelHelpers.export(exports, "noContext", ()=>noContext
);
parcelHelpers.export(exports, "setTimeout", ()=>setTimeoutWithContext
);
parcelHelpers.export(exports, "wrapYieldingFiberMethods", ()=>wrapYieldingFiberMethods
);
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {
};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function() {
    return (function() {
        function Slot1() {
            // If you have a Slot object, you can find out its slot.id, but you cannot
            // guess the slot.id of a Slot you don't have access to, thanks to the
            // randomized suffix.
            this.id = [
                "slot",
                idCounter++,
                Date.now(),
                Math.random().toString(36).slice(2), 
            ].join(":");
        }
        Slot1.prototype.hasValue = function() {
            for(var context_1 = currentContext; context_1; context_1 = context_1.parent)// We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE) break;
                if (context_1 !== currentContext) // Cache the value in currentContext.slots so the next lookup will
                // be faster. This caching is safe because the tree of contexts and
                // the values of the slots are logically immutable.
                currentContext.slots[this.id] = value;
                return true;
            }
            if (currentContext) // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
            return false;
        };
        Slot1.prototype.getValue = function() {
            if (this.hasValue()) return currentContext.slots[this.id];
        };
        Slot1.prototype.withValue = function(value, callback, // Given the prevalence of arrow functions, specifying arguments is likely
        // to be much more common than specifying `this`, hence this ordering:
        args, thisArg) {
            var _a;
            var slots = (_a = {
                __proto__: null
            }, _a[this.id] = value, _a);
            var parent = currentContext;
            currentContext = {
                parent: parent,
                slots: slots
            };
            try {
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            } finally{
                currentContext = parent;
            }
        };
        // Capture the current context and wrap a callback function so that it
        // reestablishes the captured context when called.
        Slot1.bind = function(callback) {
            var context = currentContext;
            return function() {
                var saved = currentContext;
                try {
                    currentContext = context;
                    return callback.apply(this, arguments);
                } finally{
                    currentContext = saved;
                }
            };
        };
        // Immediately run a callback function without any captured context.
        Slot1.noContext = function(callback, // Given the prevalence of arrow functions, specifying arguments is likely
        // to be much more common than specifying `this`, hence this ordering:
        args, thisArg) {
            if (currentContext) {
                var saved = currentContext;
                try {
                    currentContext = null;
                    // Function.prototype.apply allows the arguments array argument to be
                    // omitted or undefined, so args! is fine here.
                    return callback.apply(thisArg, args);
                } finally{
                    currentContext = saved;
                }
            } else return callback.apply(thisArg, args);
        };
        return Slot1;
    })();
};
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function() {
    var Slot2 = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot2,
            enumerable: false,
            writable: false,
            configurable: false
        });
    } finally{
        return Slot2;
    }
}();
var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function() {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function(resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                } catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) result.value.then(next, result.done ? reject : invokeThrow);
                else next(result.value);
            }
            var invokeNext = function(value) {
                return invoke(boundNext, value);
            };
            var invokeThrow = function(error) {
                return invoke(boundThrow, error);
            };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function(obj, method) {
            var fn = obj[method];
            obj[method] = function() {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoywy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpLink", ()=>HttpLink
);
parcelHelpers.export(exports, "createHttpLink", ()=>createHttpLink
);
var _tslib = require("tslib");
var _apolloLink = require("apollo-link");
var _apolloLinkHttpCommon = require("apollo-link-http-common");
var createHttpLink = function(linkOptions) {
    if (linkOptions === void 0) linkOptions = {
    };
    var _a1 = linkOptions.uri, uri = _a1 === void 0 ? '/graphql' : _a1, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = _tslib.__rest(linkOptions, [
        "uri",
        "fetch",
        "includeExtensions",
        "useGETForQueries"
    ]);
    _apolloLinkHttpCommon.checkFetcher(fetcher);
    if (!fetcher) fetcher = fetch;
    var linkConfig = {
        http: {
            includeExtensions: includeExtensions
        },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers
    };
    return new _apolloLink.ApolloLink(function(operation) {
        var chosenURI = _apolloLinkHttpCommon.selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {
        };
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) clientAwarenessHeaders['apollographql-client-name'] = name_1;
            if (version) clientAwarenessHeaders['apollographql-client-version'] = version;
        }
        var contextHeaders = _tslib.__assign({
        }, clientAwarenessHeaders, context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders
        };
        var _b = _apolloLinkHttpCommon.selectHttpOptionsAndBody(operation, _apolloLinkHttpCommon.fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        var controller;
        if (!options.signal) {
            var _c = _apolloLinkHttpCommon.createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller) options.signal = signal;
        }
        var definitionIsMutation = function(d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) options.method = 'GET';
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) return _apolloLink.fromError(parseError);
            chosenURI = newURI;
        } else try {
            options.body = _apolloLinkHttpCommon.serializeFetchParameter(body, 'Payload');
        } catch (parseError) {
            return _apolloLink.fromError(parseError);
        }
        return new _apolloLink.Observable(function(observer) {
            fetcher(chosenURI, options).then(function(response) {
                operation.setContext({
                    response: response
                });
                return response;
            }).then(_apolloLinkHttpCommon.parseAndCheckHttpResponse(operation)).then(function(result) {
                observer.next(result);
                observer.complete();
                return result;
            }).catch(function(err) {
                if (err.name === 'AbortError') return;
                if (err.result && err.result.errors && err.result.data) observer.next(err.result);
                observer.error(err);
            });
            return function() {
                if (controller) controller.abort();
            };
        });
    });
};
function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function(key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) addQueryParam('query', body.query);
    if (body.operationName) addQueryParam('operationName', body.operationName);
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = _apolloLinkHttpCommon.serializeFetchParameter(body.variables, 'Variables map');
        } catch (parseError) {
            return {
                parseError: parseError
            };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = _apolloLinkHttpCommon.serializeFetchParameter(body.extensions, 'Extensions map');
        } catch (parseError) {
            return {
                parseError: parseError
            };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return {
        newURI: newURI
    };
}
var HttpLink = function(_super) {
    _tslib.__extends(HttpLink1, _super);
    function HttpLink1(opts) {
        return _super.call(this, createHttpLink(opts).request) || this;
    }
    return HttpLink1;
}(_apolloLink.ApolloLink);

},{"tslib":"lRdW5","apollo-link":"hMD4G","apollo-link-http-common":"hWb4r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWb4r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkFetcher", ()=>checkFetcher
);
parcelHelpers.export(exports, "createSignalIfSupported", ()=>createSignalIfSupported
);
parcelHelpers.export(exports, "fallbackHttpConfig", ()=>fallbackHttpConfig
);
parcelHelpers.export(exports, "parseAndCheckHttpResponse", ()=>parseAndCheckHttpResponse
);
parcelHelpers.export(exports, "selectHttpOptionsAndBody", ()=>selectHttpOptionsAndBody
);
parcelHelpers.export(exports, "selectURI", ()=>selectURI
);
parcelHelpers.export(exports, "serializeFetchParameter", ()=>serializeFetchParameter
);
parcelHelpers.export(exports, "throwServerError", ()=>throwServerError
);
var _tslib = require("tslib");
var _printer = require("graphql/language/printer");
var _tsInvariant = require("ts-invariant");
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json'
};
var defaultOptions = {
    method: 'POST'
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions
};
var throwServerError = function(response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var parseAndCheckHttpResponse = function(operations) {
    return function(response) {
        return response.text().then(function(bodyText) {
            try {
                return JSON.parse(bodyText);
            } catch (err) {
                var parseError = err;
                parseError.name = 'ServerParseError';
                parseError.response = response;
                parseError.statusCode = response.status;
                parseError.bodyText = bodyText;
                return Promise.reject(parseError);
            }
        }).then(function(result) {
            if (response.status >= 300) throwServerError(response, result, "Response not successful: Received status code " + response.status);
            if (!Array.isArray(result) && !result.hasOwnProperty('data') && !result.hasOwnProperty('errors')) throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations) ? operations.map(function(op) {
                return op.operationName;
            }) : operations.operationName) + "'.");
            return result;
        });
    };
};
var checkFetcher = function(fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        var library = 'unfetch';
        if (typeof window === 'undefined') library = 'node-fetch';
        throw new _tsInvariant.InvariantError("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
    }
};
var createSignalIfSupported = function() {
    if (typeof AbortController === 'undefined') return {
        controller: false,
        signal: false
    };
    var controller = new AbortController();
    var signal = controller.signal;
    return {
        controller: controller,
        signal: signal
    };
};
var selectHttpOptionsAndBody = function(operation, fallbackConfig) {
    var configs = [];
    for(var _i = 2; _i < arguments.length; _i++)configs[_i - 2] = arguments[_i];
    var options = _tslib.__assign({
    }, fallbackConfig.options, {
        headers: fallbackConfig.headers,
        credentials: fallbackConfig.credentials
    });
    var http = fallbackConfig.http;
    configs.forEach(function(config) {
        options = _tslib.__assign({
        }, options, config.options, {
            headers: _tslib.__assign({
            }, options.headers, config.headers)
        });
        if (config.credentials) options.credentials = config.credentials;
        http = _tslib.__assign({
        }, http, config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = {
        operationName: operationName,
        variables: variables
    };
    if (http.includeExtensions) body.extensions = extensions;
    if (http.includeQuery) body.query = _printer.print(query);
    return {
        options: options,
        body: body
    };
};
var serializeFetchParameter = function(p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    } catch (e) {
        var parseError = new _tsInvariant.InvariantError("Network request failed. " + label + " is not serializable: " + e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
var selectURI = function(operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) return contextURI;
    else if (typeof fallbackURI === 'function') return fallbackURI(operation);
    else return fallbackURI || '/graphql';
};

},{"tslib":"lRdW5","graphql/language/printer":"lAwBq","ts-invariant":"gP8E6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lAwBq":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.print = print;
var _blockString = require('./blockString.js');
var _printString = require('./printString.js');
var _visitor = require('./visitor.js');
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ function print(ast) {
    return (0, _visitor.visit)(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>'$' + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, '\n\n')
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, ' '), 
            ], ' '); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable , type , defaultValue , directives  })=>variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '))
    },
    SelectionSet: {
        leave: ({ selections  })=>block(selections)
    },
    Field: {
        leave ({ alias , name , arguments: args , directives , selectionSet  }) {
            const prefix = wrap('', alias, ': ') + name;
            let argsLine = prefix + wrap('(', join(args, ', '), ')');
            if (argsLine.length > MAX_LINE_LENGTH) argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
            return join([
                argsLine,
                join(directives, ' '),
                selectionSet
            ], ' ');
        }
    },
    Argument: {
        leave: ({ name , value  })=>name + ': ' + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name , directives  })=>'...' + name + wrap(' ', join(directives, ' '))
    },
    InlineFragment: {
        leave: ({ typeCondition , directives , selectionSet  })=>join([
                '...',
                wrap('on ', typeCondition),
                join(directives, ' '),
                selectionSet, 
            ], ' ')
    },
    FragmentDefinition: {
        leave: ({ name , typeCondition , variableDefinitions , directives , selectionSet  })=>// or removed in the future.
            `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` + `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value  })=>value
    },
    FloatValue: {
        leave: ({ value  })=>value
    },
    StringValue: {
        leave: ({ value , block: isBlockString  })=>isBlockString ? (0, _blockString.printBlockString)(value) : (0, _printString.printString)(value)
    },
    BooleanValue: {
        leave: ({ value  })=>value ? 'true' : 'false'
    },
    NullValue: {
        leave: ()=>'null'
    },
    EnumValue: {
        leave: ({ value  })=>value
    },
    ListValue: {
        leave: ({ values  })=>'[' + join(values, ', ') + ']'
    },
    ObjectValue: {
        leave: ({ fields  })=>'{' + join(fields, ', ') + '}'
    },
    ObjectField: {
        leave: ({ name , value  })=>name + ': ' + value
    },
    // Directive
    Directive: {
        leave: ({ name , arguments: args  })=>'@' + name + wrap('(', join(args, ', '), ')')
    },
    // Type
    NamedType: {
        leave: ({ name  })=>name
    },
    ListType: {
        leave: ({ type  })=>'[' + type + ']'
    },
    NonNullType: {
        leave: ({ type  })=>type + '!'
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description , directives , operationTypes  })=>wrap('', description, '\n') + join([
                'schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    OperationTypeDefinition: {
        leave: ({ operation , type  })=>operation + ': ' + type
    },
    ScalarTypeDefinition: {
        leave: ({ description , name , directives  })=>wrap('', description, '\n') + join([
                'scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap('', description, '\n') + join([
                'type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    FieldDefinition: {
        leave: ({ description , name , arguments: args , type , directives  })=>wrap('', description, '\n') + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '))
    },
    InputValueDefinition: {
        leave: ({ description , name , type , defaultValue , directives  })=>wrap('', description, '\n') + join([
                name + ': ' + type,
                wrap('= ', defaultValue),
                join(directives, ' ')
            ], ' ')
    },
    InterfaceTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap('', description, '\n') + join([
                'interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    UnionTypeDefinition: {
        leave: ({ description , name , directives , types  })=>wrap('', description, '\n') + join([
                'union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeDefinition: {
        leave: ({ description , name , directives , values  })=>wrap('', description, '\n') + join([
                'enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    EnumValueDefinition: {
        leave: ({ description , name , directives  })=>wrap('', description, '\n') + join([
                name,
                join(directives, ' ')
            ], ' ')
    },
    InputObjectTypeDefinition: {
        leave: ({ description , name , directives , fields  })=>wrap('', description, '\n') + join([
                'input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    DirectiveDefinition: {
        leave: ({ description , name , arguments: args , repeatable , locations  })=>wrap('', description, '\n') + 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ')
    },
    SchemaExtension: {
        leave: ({ directives , operationTypes  })=>join([
                'extend schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    ScalarTypeExtension: {
        leave: ({ name , directives  })=>join([
                'extend scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                'extend type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    InterfaceTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                'extend interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    UnionTypeExtension: {
        leave: ({ name , directives , types  })=>join([
                'extend union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | ')), 
            ], ' ')
    },
    EnumTypeExtension: {
        leave: ({ name , directives , values  })=>join([
                'extend enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    InputObjectTypeExtension: {
        leave: ({ name , directives , fields  })=>join([
                'extend input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = '') {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x
    ).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = '') {
    return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}
function indent(str) {
    return wrap('  ', str.replace(/\n/g, '\n  '));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes('\n')
    )) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

},{"./blockString.js":"jHKKK","./printString.js":"bCCc6","./visitor.js":"9iiLe"}],"jHKKK":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.dedentBlockStringLines = dedentBlockStringLines;
exports.isPrintableAsBlockString = isPrintableAsBlockString;
exports.printBlockString = printBlockString;
var _characterClasses = require('./characterClasses.js');
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i1 = 0; i1 < lines.length; ++i1){
        var _firstNonEmptyLine;
        const line = lines[i1];
        const indent = leadingWhitespace(line);
        if (indent === line.length) continue; // skip empty lines
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i1;
        lastNonEmptyLine = i1;
        if (i1 !== 0 && indent < commonIndent) commonIndent = indent;
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)
    ) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && (0, _characterClasses.isWhiteSpace)(str.charCodeAt(i)))++i;
    return i;
}
/**
 * @internal
 */ function isPrintableAsBlockString(value) {
    if (value === '') return true; // empty string is printable
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i)switch(value.codePointAt(i)){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 11:
        case 12:
        case 14:
        case 15:
            return false;
        // Has non-printable characters
        case 13:
            //  \r
            return false;
        // Has \r or \r\n which will be replaced as \n
        case 10:
            //  \n
            if (isEmptyLine && !seenNonEmptyLine) return false; // Has leading new line
            seenNonEmptyLine = true;
            isEmptyLine = true;
            hasIndent = false;
            break;
        case 9:
        case 32:
            //  <space>
            hasIndent || (hasIndent = isEmptyLine);
            break;
        default:
            hasCommonIndent && (hasCommonIndent = hasIndent);
            isEmptyLine = false;
    }
    if (isEmptyLine) return false; // Has trailing empty lines
    if (hasCommonIndent && seenNonEmptyLine) return false; // Has internal indent
    return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || (0, _characterClasses.isWhiteSpace)(line.charCodeAt(0))
    ); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith('\\');
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ''; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && (0, _characterClasses.isWhiteSpace)(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) result += '\n';
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) result += '\n';
    return '"""' + result + '"""';
}

},{"./characterClasses.js":"et7iH"}],"et7iH":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.isDigit = isDigit;
exports.isLetter = isLetter;
exports.isNameContinue = isNameContinue;
exports.isNameStart = isNameStart;
exports.isWhiteSpace = isWhiteSpace;
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ function isWhiteSpace(code) {
    return code === 9 || code === 32;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ function isDigit(code) {
    return code >= 48 && code <= 57;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ function isLetter(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90 // a-z
    ;
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ function isNameStart(code) {
    return isLetter(code) || code === 95;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 95;
}

},{}],"bCCc6":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.printString = printString;
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F', 
];

},{}],"l40r3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorLink", ()=>ErrorLink
);
parcelHelpers.export(exports, "onError", ()=>onError
);
var _tslib = require("tslib");
var _apolloLink = require("apollo-link");
function onError(errorHandler) {
    return new _apolloLink.ApolloLink(function(operation, forward) {
        return new _apolloLink.Observable(function(observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function(result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer)
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function(networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError && networkError.result && networkError.result.errors,
                            forward: forward
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer)
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function() {
                        if (!retriedResult) observer.complete.bind(observer)();
                    }
                });
            } catch (e) {
                errorHandler({
                    networkError: e,
                    operation: operation,
                    forward: forward
                });
                observer.error(e);
            }
            return function() {
                if (sub) sub.unsubscribe();
                if (retriedSub) sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = function(_super) {
    _tslib.__extends(ErrorLink1, _super);
    function ErrorLink1(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink1.prototype.request = function(operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink1;
}(_apolloLink.ApolloLink);

},{"tslib":"lRdW5","apollo-link":"hMD4G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCfYb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gql", ()=>gql
);
parcelHelpers.export(exports, "resetCaches", ()=>resetCaches
);
parcelHelpers.export(exports, "disableFragmentWarnings", ()=>disableFragmentWarnings
);
parcelHelpers.export(exports, "enableExperimentalFragmentVariables", ()=>enableExperimentalFragmentVariables
);
parcelHelpers.export(exports, "disableExperimentalFragmentVariables", ()=>disableExperimentalFragmentVariables
);
var _tslib = require("tslib");
var _graphql = require("graphql");
var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
            } else if (!sourceKeySet) fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else definitions.push(fragmentDefinition);
    });
    return _tslib.__assign(_tslib.__assign({
    }, ast), {
        definitions: definitions
    });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
        if (node.loc) delete node.loc;
        Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === 'object') workSet.add(value);
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = _graphql.parse(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') throw new Error('Not a valid GraphQL document.');
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
    if (typeof literals === 'string') literals = [
        literals
    ];
    var result = literals[0];
    args.forEach(function(arg, i) {
        if (arg && arg.kind === 'Document') result += arg.loc.source.body;
        else result += arg;
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {
}));
gql["default"] = gql;
exports.default = gql;

},{"tslib":"hVIBi","graphql":"dwHFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVIBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwHFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 * ```ts
 * import { parse } from 'graphql';
 * import { parse } from 'graphql/language';
 * ```
 *
 * @packageDocumentation
 */ // The GraphQL.js version info.
parcelHelpers.export(exports, "version", ()=>_versionMjs.version
) // The primary entry point into fulfilling a GraphQL request.
;
parcelHelpers.export(exports, "versionInfo", ()=>_versionMjs.versionInfo
);
parcelHelpers.export(exports, "graphql", ()=>_graphqlMjs.graphql
) // Create and operate on GraphQL type definitions and schema.
;
parcelHelpers.export(exports, "graphqlSync", ()=>_graphqlMjs.graphqlSync
);
parcelHelpers.export(exports, "resolveObjMapThunk", ()=>_indexMjs.resolveObjMapThunk
);
parcelHelpers.export(exports, "resolveReadonlyArrayThunk", ()=>_indexMjs.resolveReadonlyArrayThunk
);
parcelHelpers.export(exports, "GraphQLSchema", ()=>_indexMjs.GraphQLSchema
);
parcelHelpers.export(exports, "GraphQLDirective", ()=>_indexMjs.GraphQLDirective
);
parcelHelpers.export(exports, "GraphQLScalarType", ()=>_indexMjs.GraphQLScalarType
);
parcelHelpers.export(exports, "GraphQLObjectType", ()=>_indexMjs.GraphQLObjectType
);
parcelHelpers.export(exports, "GraphQLInterfaceType", ()=>_indexMjs.GraphQLInterfaceType
);
parcelHelpers.export(exports, "GraphQLUnionType", ()=>_indexMjs.GraphQLUnionType
);
parcelHelpers.export(exports, "GraphQLEnumType", ()=>_indexMjs.GraphQLEnumType
);
parcelHelpers.export(exports, "GraphQLInputObjectType", ()=>_indexMjs.GraphQLInputObjectType
);
parcelHelpers.export(exports, "GraphQLList", ()=>_indexMjs.GraphQLList
);
parcelHelpers.export(exports, "GraphQLNonNull", ()=>_indexMjs.GraphQLNonNull
);
parcelHelpers.export(exports, "specifiedScalarTypes", ()=>_indexMjs.specifiedScalarTypes
);
parcelHelpers.export(exports, "GraphQLInt", ()=>_indexMjs.GraphQLInt
);
parcelHelpers.export(exports, "GraphQLFloat", ()=>_indexMjs.GraphQLFloat
);
parcelHelpers.export(exports, "GraphQLString", ()=>_indexMjs.GraphQLString
);
parcelHelpers.export(exports, "GraphQLBoolean", ()=>_indexMjs.GraphQLBoolean
);
parcelHelpers.export(exports, "GraphQLID", ()=>_indexMjs.GraphQLID
);
parcelHelpers.export(exports, "GRAPHQL_MAX_INT", ()=>_indexMjs.GRAPHQL_MAX_INT
);
parcelHelpers.export(exports, "GRAPHQL_MIN_INT", ()=>_indexMjs.GRAPHQL_MIN_INT
);
parcelHelpers.export(exports, "specifiedDirectives", ()=>_indexMjs.specifiedDirectives
);
parcelHelpers.export(exports, "GraphQLIncludeDirective", ()=>_indexMjs.GraphQLIncludeDirective
);
parcelHelpers.export(exports, "GraphQLSkipDirective", ()=>_indexMjs.GraphQLSkipDirective
);
parcelHelpers.export(exports, "GraphQLDeprecatedDirective", ()=>_indexMjs.GraphQLDeprecatedDirective
);
parcelHelpers.export(exports, "GraphQLSpecifiedByDirective", ()=>_indexMjs.GraphQLSpecifiedByDirective
);
parcelHelpers.export(exports, "TypeKind", ()=>_indexMjs.TypeKind
);
parcelHelpers.export(exports, "DEFAULT_DEPRECATION_REASON", ()=>_indexMjs.DEFAULT_DEPRECATION_REASON
);
parcelHelpers.export(exports, "introspectionTypes", ()=>_indexMjs.introspectionTypes
);
parcelHelpers.export(exports, "__Schema", ()=>_indexMjs.__Schema
);
parcelHelpers.export(exports, "__Directive", ()=>_indexMjs.__Directive
);
parcelHelpers.export(exports, "__DirectiveLocation", ()=>_indexMjs.__DirectiveLocation
);
parcelHelpers.export(exports, "__Type", ()=>_indexMjs.__Type
);
parcelHelpers.export(exports, "__Field", ()=>_indexMjs.__Field
);
parcelHelpers.export(exports, "__InputValue", ()=>_indexMjs.__InputValue
);
parcelHelpers.export(exports, "__EnumValue", ()=>_indexMjs.__EnumValue
);
parcelHelpers.export(exports, "__TypeKind", ()=>_indexMjs.__TypeKind
);
parcelHelpers.export(exports, "SchemaMetaFieldDef", ()=>_indexMjs.SchemaMetaFieldDef
);
parcelHelpers.export(exports, "TypeMetaFieldDef", ()=>_indexMjs.TypeMetaFieldDef
);
parcelHelpers.export(exports, "TypeNameMetaFieldDef", ()=>_indexMjs.TypeNameMetaFieldDef
);
parcelHelpers.export(exports, "isSchema", ()=>_indexMjs.isSchema
);
parcelHelpers.export(exports, "isDirective", ()=>_indexMjs.isDirective
);
parcelHelpers.export(exports, "isType", ()=>_indexMjs.isType
);
parcelHelpers.export(exports, "isScalarType", ()=>_indexMjs.isScalarType
);
parcelHelpers.export(exports, "isObjectType", ()=>_indexMjs.isObjectType
);
parcelHelpers.export(exports, "isInterfaceType", ()=>_indexMjs.isInterfaceType
);
parcelHelpers.export(exports, "isUnionType", ()=>_indexMjs.isUnionType
);
parcelHelpers.export(exports, "isEnumType", ()=>_indexMjs.isEnumType
);
parcelHelpers.export(exports, "isInputObjectType", ()=>_indexMjs.isInputObjectType
);
parcelHelpers.export(exports, "isListType", ()=>_indexMjs.isListType
);
parcelHelpers.export(exports, "isNonNullType", ()=>_indexMjs.isNonNullType
);
parcelHelpers.export(exports, "isInputType", ()=>_indexMjs.isInputType
);
parcelHelpers.export(exports, "isOutputType", ()=>_indexMjs.isOutputType
);
parcelHelpers.export(exports, "isLeafType", ()=>_indexMjs.isLeafType
);
parcelHelpers.export(exports, "isCompositeType", ()=>_indexMjs.isCompositeType
);
parcelHelpers.export(exports, "isAbstractType", ()=>_indexMjs.isAbstractType
);
parcelHelpers.export(exports, "isWrappingType", ()=>_indexMjs.isWrappingType
);
parcelHelpers.export(exports, "isNullableType", ()=>_indexMjs.isNullableType
);
parcelHelpers.export(exports, "isNamedType", ()=>_indexMjs.isNamedType
);
parcelHelpers.export(exports, "isRequiredArgument", ()=>_indexMjs.isRequiredArgument
);
parcelHelpers.export(exports, "isRequiredInputField", ()=>_indexMjs.isRequiredInputField
);
parcelHelpers.export(exports, "isSpecifiedScalarType", ()=>_indexMjs.isSpecifiedScalarType
);
parcelHelpers.export(exports, "isIntrospectionType", ()=>_indexMjs.isIntrospectionType
);
parcelHelpers.export(exports, "isSpecifiedDirective", ()=>_indexMjs.isSpecifiedDirective
);
parcelHelpers.export(exports, "assertSchema", ()=>_indexMjs.assertSchema
);
parcelHelpers.export(exports, "assertDirective", ()=>_indexMjs.assertDirective
);
parcelHelpers.export(exports, "assertType", ()=>_indexMjs.assertType
);
parcelHelpers.export(exports, "assertScalarType", ()=>_indexMjs.assertScalarType
);
parcelHelpers.export(exports, "assertObjectType", ()=>_indexMjs.assertObjectType
);
parcelHelpers.export(exports, "assertInterfaceType", ()=>_indexMjs.assertInterfaceType
);
parcelHelpers.export(exports, "assertUnionType", ()=>_indexMjs.assertUnionType
);
parcelHelpers.export(exports, "assertEnumType", ()=>_indexMjs.assertEnumType
);
parcelHelpers.export(exports, "assertInputObjectType", ()=>_indexMjs.assertInputObjectType
);
parcelHelpers.export(exports, "assertListType", ()=>_indexMjs.assertListType
);
parcelHelpers.export(exports, "assertNonNullType", ()=>_indexMjs.assertNonNullType
);
parcelHelpers.export(exports, "assertInputType", ()=>_indexMjs.assertInputType
);
parcelHelpers.export(exports, "assertOutputType", ()=>_indexMjs.assertOutputType
);
parcelHelpers.export(exports, "assertLeafType", ()=>_indexMjs.assertLeafType
);
parcelHelpers.export(exports, "assertCompositeType", ()=>_indexMjs.assertCompositeType
);
parcelHelpers.export(exports, "assertAbstractType", ()=>_indexMjs.assertAbstractType
);
parcelHelpers.export(exports, "assertWrappingType", ()=>_indexMjs.assertWrappingType
);
parcelHelpers.export(exports, "assertNullableType", ()=>_indexMjs.assertNullableType
);
parcelHelpers.export(exports, "assertNamedType", ()=>_indexMjs.assertNamedType
);
parcelHelpers.export(exports, "getNullableType", ()=>_indexMjs.getNullableType
);
parcelHelpers.export(exports, "getNamedType", ()=>_indexMjs.getNamedType
);
parcelHelpers.export(exports, "validateSchema", ()=>_indexMjs.validateSchema
);
parcelHelpers.export(exports, "assertValidSchema", ()=>_indexMjs.assertValidSchema
);
parcelHelpers.export(exports, "assertName", ()=>_indexMjs.assertName
);
parcelHelpers.export(exports, "assertEnumValueName", ()=>_indexMjs.assertEnumValueName
);
// Parse and operate on GraphQL language source files.
parcelHelpers.export(exports, "Token", ()=>_indexMjs1.Token
);
parcelHelpers.export(exports, "Source", ()=>_indexMjs1.Source
);
parcelHelpers.export(exports, "Location", ()=>_indexMjs1.Location
);
parcelHelpers.export(exports, "OperationTypeNode", ()=>_indexMjs1.OperationTypeNode
);
parcelHelpers.export(exports, "getLocation", ()=>_indexMjs1.getLocation
);
parcelHelpers.export(exports, "printLocation", ()=>_indexMjs1.printLocation
);
parcelHelpers.export(exports, "printSourceLocation", ()=>_indexMjs1.printSourceLocation
);
parcelHelpers.export(exports, "Lexer", ()=>_indexMjs1.Lexer
);
parcelHelpers.export(exports, "TokenKind", ()=>_indexMjs1.TokenKind
);
parcelHelpers.export(exports, "parse", ()=>_indexMjs1.parse
);
parcelHelpers.export(exports, "parseValue", ()=>_indexMjs1.parseValue
);
parcelHelpers.export(exports, "parseConstValue", ()=>_indexMjs1.parseConstValue
);
parcelHelpers.export(exports, "parseType", ()=>_indexMjs1.parseType
);
parcelHelpers.export(exports, "print", ()=>_indexMjs1.print
);
parcelHelpers.export(exports, "visit", ()=>_indexMjs1.visit
);
parcelHelpers.export(exports, "visitInParallel", ()=>_indexMjs1.visitInParallel
);
parcelHelpers.export(exports, "getVisitFn", ()=>_indexMjs1.getVisitFn
);
parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>_indexMjs1.getEnterLeaveForKind
);
parcelHelpers.export(exports, "BREAK", ()=>_indexMjs1.BREAK
);
parcelHelpers.export(exports, "Kind", ()=>_indexMjs1.Kind
);
parcelHelpers.export(exports, "DirectiveLocation", ()=>_indexMjs1.DirectiveLocation
);
parcelHelpers.export(exports, "isDefinitionNode", ()=>_indexMjs1.isDefinitionNode
);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>_indexMjs1.isExecutableDefinitionNode
);
parcelHelpers.export(exports, "isSelectionNode", ()=>_indexMjs1.isSelectionNode
);
parcelHelpers.export(exports, "isValueNode", ()=>_indexMjs1.isValueNode
);
parcelHelpers.export(exports, "isConstValueNode", ()=>_indexMjs1.isConstValueNode
);
parcelHelpers.export(exports, "isTypeNode", ()=>_indexMjs1.isTypeNode
);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>_indexMjs1.isTypeSystemDefinitionNode
);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>_indexMjs1.isTypeDefinitionNode
);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>_indexMjs1.isTypeSystemExtensionNode
);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>_indexMjs1.isTypeExtensionNode
);
// Execute GraphQL queries.
parcelHelpers.export(exports, "execute", ()=>_indexMjs2.execute
);
parcelHelpers.export(exports, "executeSync", ()=>_indexMjs2.executeSync
);
parcelHelpers.export(exports, "defaultFieldResolver", ()=>_indexMjs2.defaultFieldResolver
);
parcelHelpers.export(exports, "defaultTypeResolver", ()=>_indexMjs2.defaultTypeResolver
);
parcelHelpers.export(exports, "responsePathAsArray", ()=>_indexMjs2.responsePathAsArray
);
parcelHelpers.export(exports, "getVariableValues", ()=>_indexMjs2.getVariableValues
);
parcelHelpers.export(exports, "getDirectiveValues", ()=>_indexMjs2.getDirectiveValues
);
parcelHelpers.export(exports, "subscribe", ()=>_indexMjs2.subscribe
);
parcelHelpers.export(exports, "createSourceEventStream", ()=>_indexMjs2.createSourceEventStream
);
// Validate GraphQL documents.
parcelHelpers.export(exports, "validate", ()=>_indexMjs3.validate
);
parcelHelpers.export(exports, "ValidationContext", ()=>_indexMjs3.ValidationContext
);
parcelHelpers.export(exports, "specifiedRules", ()=>_indexMjs3.specifiedRules
);
parcelHelpers.export(exports, "ExecutableDefinitionsRule", ()=>_indexMjs3.ExecutableDefinitionsRule
);
parcelHelpers.export(exports, "FieldsOnCorrectTypeRule", ()=>_indexMjs3.FieldsOnCorrectTypeRule
);
parcelHelpers.export(exports, "FragmentsOnCompositeTypesRule", ()=>_indexMjs3.FragmentsOnCompositeTypesRule
);
parcelHelpers.export(exports, "KnownArgumentNamesRule", ()=>_indexMjs3.KnownArgumentNamesRule
);
parcelHelpers.export(exports, "KnownDirectivesRule", ()=>_indexMjs3.KnownDirectivesRule
);
parcelHelpers.export(exports, "KnownFragmentNamesRule", ()=>_indexMjs3.KnownFragmentNamesRule
);
parcelHelpers.export(exports, "KnownTypeNamesRule", ()=>_indexMjs3.KnownTypeNamesRule
);
parcelHelpers.export(exports, "LoneAnonymousOperationRule", ()=>_indexMjs3.LoneAnonymousOperationRule
);
parcelHelpers.export(exports, "NoFragmentCyclesRule", ()=>_indexMjs3.NoFragmentCyclesRule
);
parcelHelpers.export(exports, "NoUndefinedVariablesRule", ()=>_indexMjs3.NoUndefinedVariablesRule
);
parcelHelpers.export(exports, "NoUnusedFragmentsRule", ()=>_indexMjs3.NoUnusedFragmentsRule
);
parcelHelpers.export(exports, "NoUnusedVariablesRule", ()=>_indexMjs3.NoUnusedVariablesRule
);
parcelHelpers.export(exports, "OverlappingFieldsCanBeMergedRule", ()=>_indexMjs3.OverlappingFieldsCanBeMergedRule
);
parcelHelpers.export(exports, "PossibleFragmentSpreadsRule", ()=>_indexMjs3.PossibleFragmentSpreadsRule
);
parcelHelpers.export(exports, "ProvidedRequiredArgumentsRule", ()=>_indexMjs3.ProvidedRequiredArgumentsRule
);
parcelHelpers.export(exports, "ScalarLeafsRule", ()=>_indexMjs3.ScalarLeafsRule
);
parcelHelpers.export(exports, "SingleFieldSubscriptionsRule", ()=>_indexMjs3.SingleFieldSubscriptionsRule
);
parcelHelpers.export(exports, "UniqueArgumentNamesRule", ()=>_indexMjs3.UniqueArgumentNamesRule
);
parcelHelpers.export(exports, "UniqueDirectivesPerLocationRule", ()=>_indexMjs3.UniqueDirectivesPerLocationRule
);
parcelHelpers.export(exports, "UniqueFragmentNamesRule", ()=>_indexMjs3.UniqueFragmentNamesRule
);
parcelHelpers.export(exports, "UniqueInputFieldNamesRule", ()=>_indexMjs3.UniqueInputFieldNamesRule
);
parcelHelpers.export(exports, "UniqueOperationNamesRule", ()=>_indexMjs3.UniqueOperationNamesRule
);
parcelHelpers.export(exports, "UniqueVariableNamesRule", ()=>_indexMjs3.UniqueVariableNamesRule
);
parcelHelpers.export(exports, "ValuesOfCorrectTypeRule", ()=>_indexMjs3.ValuesOfCorrectTypeRule
);
parcelHelpers.export(exports, "VariablesAreInputTypesRule", ()=>_indexMjs3.VariablesAreInputTypesRule
);
parcelHelpers.export(exports, "VariablesInAllowedPositionRule", ()=>_indexMjs3.VariablesInAllowedPositionRule
);
parcelHelpers.export(exports, "LoneSchemaDefinitionRule", ()=>_indexMjs3.LoneSchemaDefinitionRule
);
parcelHelpers.export(exports, "UniqueOperationTypesRule", ()=>_indexMjs3.UniqueOperationTypesRule
);
parcelHelpers.export(exports, "UniqueTypeNamesRule", ()=>_indexMjs3.UniqueTypeNamesRule
);
parcelHelpers.export(exports, "UniqueEnumValueNamesRule", ()=>_indexMjs3.UniqueEnumValueNamesRule
);
parcelHelpers.export(exports, "UniqueFieldDefinitionNamesRule", ()=>_indexMjs3.UniqueFieldDefinitionNamesRule
);
parcelHelpers.export(exports, "UniqueArgumentDefinitionNamesRule", ()=>_indexMjs3.UniqueArgumentDefinitionNamesRule
);
parcelHelpers.export(exports, "UniqueDirectiveNamesRule", ()=>_indexMjs3.UniqueDirectiveNamesRule
);
parcelHelpers.export(exports, "PossibleTypeExtensionsRule", ()=>_indexMjs3.PossibleTypeExtensionsRule
);
parcelHelpers.export(exports, "NoDeprecatedCustomRule", ()=>_indexMjs3.NoDeprecatedCustomRule
);
parcelHelpers.export(exports, "NoSchemaIntrospectionCustomRule", ()=>_indexMjs3.NoSchemaIntrospectionCustomRule
);
// Create, format, and print GraphQL errors.
parcelHelpers.export(exports, "GraphQLError", ()=>_indexMjs4.GraphQLError
);
parcelHelpers.export(exports, "syntaxError", ()=>_indexMjs4.syntaxError
);
parcelHelpers.export(exports, "locatedError", ()=>_indexMjs4.locatedError
);
parcelHelpers.export(exports, "printError", ()=>_indexMjs4.printError
);
parcelHelpers.export(exports, "formatError", ()=>_indexMjs4.formatError
);
// Utilities for operating on GraphQL type schema and parsed sources.
parcelHelpers.export(exports, "getIntrospectionQuery", ()=>_indexMjs5.getIntrospectionQuery
);
parcelHelpers.export(exports, "getOperationAST", ()=>_indexMjs5.getOperationAST
);
parcelHelpers.export(exports, "getOperationRootType", ()=>_indexMjs5.getOperationRootType
);
parcelHelpers.export(exports, "introspectionFromSchema", ()=>_indexMjs5.introspectionFromSchema
);
parcelHelpers.export(exports, "buildClientSchema", ()=>_indexMjs5.buildClientSchema
);
parcelHelpers.export(exports, "buildASTSchema", ()=>_indexMjs5.buildASTSchema
);
parcelHelpers.export(exports, "buildSchema", ()=>_indexMjs5.buildSchema
);
parcelHelpers.export(exports, "extendSchema", ()=>_indexMjs5.extendSchema
);
parcelHelpers.export(exports, "lexicographicSortSchema", ()=>_indexMjs5.lexicographicSortSchema
);
parcelHelpers.export(exports, "printSchema", ()=>_indexMjs5.printSchema
);
parcelHelpers.export(exports, "printType", ()=>_indexMjs5.printType
);
parcelHelpers.export(exports, "printIntrospectionSchema", ()=>_indexMjs5.printIntrospectionSchema
);
parcelHelpers.export(exports, "typeFromAST", ()=>_indexMjs5.typeFromAST
);
parcelHelpers.export(exports, "valueFromAST", ()=>_indexMjs5.valueFromAST
);
parcelHelpers.export(exports, "valueFromASTUntyped", ()=>_indexMjs5.valueFromASTUntyped
);
parcelHelpers.export(exports, "astFromValue", ()=>_indexMjs5.astFromValue
);
parcelHelpers.export(exports, "TypeInfo", ()=>_indexMjs5.TypeInfo
);
parcelHelpers.export(exports, "visitWithTypeInfo", ()=>_indexMjs5.visitWithTypeInfo
);
parcelHelpers.export(exports, "coerceInputValue", ()=>_indexMjs5.coerceInputValue
);
parcelHelpers.export(exports, "concatAST", ()=>_indexMjs5.concatAST
);
parcelHelpers.export(exports, "separateOperations", ()=>_indexMjs5.separateOperations
);
parcelHelpers.export(exports, "stripIgnoredCharacters", ()=>_indexMjs5.stripIgnoredCharacters
);
parcelHelpers.export(exports, "isEqualType", ()=>_indexMjs5.isEqualType
);
parcelHelpers.export(exports, "isTypeSubTypeOf", ()=>_indexMjs5.isTypeSubTypeOf
);
parcelHelpers.export(exports, "doTypesOverlap", ()=>_indexMjs5.doTypesOverlap
);
parcelHelpers.export(exports, "assertValidName", ()=>_indexMjs5.assertValidName
);
parcelHelpers.export(exports, "isValidNameError", ()=>_indexMjs5.isValidNameError
);
parcelHelpers.export(exports, "BreakingChangeType", ()=>_indexMjs5.BreakingChangeType
);
parcelHelpers.export(exports, "DangerousChangeType", ()=>_indexMjs5.DangerousChangeType
);
parcelHelpers.export(exports, "findBreakingChanges", ()=>_indexMjs5.findBreakingChanges
);
parcelHelpers.export(exports, "findDangerousChanges", ()=>_indexMjs5.findDangerousChanges
);
var _versionMjs = require("./version.mjs");
var _graphqlMjs = require("./graphql.mjs");
var _indexMjs = require("./type/index.mjs");
var _indexMjs1 = require("./language/index.mjs");
var _indexMjs2 = require("./execution/index.mjs");
var _indexMjs3 = require("./validation/index.mjs");
var _indexMjs4 = require("./error/index.mjs");
var _indexMjs5 = require("./utilities/index.mjs");

},{"./version.mjs":false,"./graphql.mjs":false,"./type/index.mjs":false,"./language/index.mjs":"gdSvN","./execution/index.mjs":false,"./validation/index.mjs":false,"./error/index.mjs":false,"./utilities/index.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdSvN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Source", ()=>_sourceMjs.Source
);
parcelHelpers.export(exports, "getLocation", ()=>_locationMjs.getLocation
);
parcelHelpers.export(exports, "printLocation", ()=>_printLocationMjs.printLocation
);
parcelHelpers.export(exports, "printSourceLocation", ()=>_printLocationMjs.printSourceLocation
);
parcelHelpers.export(exports, "Kind", ()=>_kindsMjs.Kind
);
parcelHelpers.export(exports, "TokenKind", ()=>_tokenKindMjs.TokenKind
);
parcelHelpers.export(exports, "Lexer", ()=>_lexerMjs.Lexer
);
parcelHelpers.export(exports, "parse", ()=>_parserMjs.parse
);
parcelHelpers.export(exports, "parseValue", ()=>_parserMjs.parseValue
);
parcelHelpers.export(exports, "parseConstValue", ()=>_parserMjs.parseConstValue
);
parcelHelpers.export(exports, "parseType", ()=>_parserMjs.parseType
);
parcelHelpers.export(exports, "print", ()=>_printerMjs.print
);
parcelHelpers.export(exports, "visit", ()=>_visitorMjs.visit
);
parcelHelpers.export(exports, "visitInParallel", ()=>_visitorMjs.visitInParallel
);
parcelHelpers.export(exports, "getVisitFn", ()=>_visitorMjs.getVisitFn
);
parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>_visitorMjs.getEnterLeaveForKind
);
parcelHelpers.export(exports, "BREAK", ()=>_visitorMjs.BREAK
);
parcelHelpers.export(exports, "Location", ()=>_astMjs.Location
);
parcelHelpers.export(exports, "Token", ()=>_astMjs.Token
);
parcelHelpers.export(exports, "OperationTypeNode", ()=>_astMjs.OperationTypeNode
);
parcelHelpers.export(exports, "isDefinitionNode", ()=>_predicatesMjs.isDefinitionNode
);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>_predicatesMjs.isExecutableDefinitionNode
);
parcelHelpers.export(exports, "isSelectionNode", ()=>_predicatesMjs.isSelectionNode
);
parcelHelpers.export(exports, "isValueNode", ()=>_predicatesMjs.isValueNode
);
parcelHelpers.export(exports, "isConstValueNode", ()=>_predicatesMjs.isConstValueNode
);
parcelHelpers.export(exports, "isTypeNode", ()=>_predicatesMjs.isTypeNode
);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>_predicatesMjs.isTypeSystemDefinitionNode
);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>_predicatesMjs.isTypeDefinitionNode
);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>_predicatesMjs.isTypeSystemExtensionNode
);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>_predicatesMjs.isTypeExtensionNode
);
parcelHelpers.export(exports, "DirectiveLocation", ()=>_directiveLocationMjs.DirectiveLocation
);
var _sourceMjs = require("./source.mjs");
var _locationMjs = require("./location.mjs");
var _printLocationMjs = require("./printLocation.mjs");
var _kindsMjs = require("./kinds.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
var _lexerMjs = require("./lexer.mjs");
var _parserMjs = require("./parser.mjs");
var _printerMjs = require("./printer.mjs");
var _visitorMjs = require("./visitor.mjs");
var _astMjs = require("./ast.mjs");
var _predicatesMjs = require("./predicates.mjs");
var _directiveLocationMjs = require("./directiveLocation.mjs");

},{"./source.mjs":"jclLZ","./location.mjs":"gC1Jl","./printLocation.mjs":"dxBRO","./kinds.mjs":"6adj0","./tokenKind.mjs":"chwug","./lexer.mjs":"6eDKj","./parser.mjs":"iQAAW","./printer.mjs":"6YJ0M","./visitor.mjs":"dn6QO","./ast.mjs":"iaolY","./predicates.mjs":"hiHiR","./directiveLocation.mjs":"hGyry","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jclLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */ parcelHelpers.export(exports, "Source", ()=>Source
);
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */ parcelHelpers.export(exports, "isSource", ()=>isSource
);
var _devAssertMjs = require("../jsutils/devAssert.mjs");
var _inspectMjs = require("../jsutils/inspect.mjs");
var _instanceOfMjs = require("../jsutils/instanceOf.mjs");
class Source {
    constructor(body, name = 'GraphQL request', locationOffset = {
        line: 1,
        column: 1
    }){
        typeof body === 'string' || _devAssertMjs.devAssert(false, `Body must be a string. Received: ${_inspectMjs.inspect(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || _devAssertMjs.devAssert(false, 'line in locationOffset is 1-indexed and must be positive.');
        this.locationOffset.column > 0 || _devAssertMjs.devAssert(false, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [Symbol.toStringTag]() {
        return 'Source';
    }
}
function isSource(source) {
    return _instanceOfMjs.instanceOf(source, Source);
}

},{"../jsutils/devAssert.mjs":"7HVcG","../jsutils/inspect.mjs":"eTiKK","../jsutils/instanceOf.mjs":"hkwlu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HVcG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "devAssert", ()=>devAssert
);
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTiKK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Used to print values in error messages.
 */ parcelHelpers.export(exports, "inspect", ()=>inspect
);
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) return 'null';
    if (previouslySeenValues.includes(value)) return '[Circular]';
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
    } else if (Array.isArray(value)) return formatArray(value, seenValues);
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) return '{}';
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return '[' + getObjectTag(object) + ']';
    const properties = entries.map(([key, value])=>key + ': ' + formatValue(value, seenValues)
    );
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) return '[]';
    if (seenValues.length > MAX_RECURSIVE_DEPTH) return '[Array]';
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i)items.push(formatValue(array[i], seenValues));
    if (remaining === 1) items.push('... 1 more item');
    else if (remaining > 1) items.push(`... ${remaining} more items`);
    return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') return name;
    }
    return tag;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkwlu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instanceOf", ()=>instanceOf
);
var _inspectMjs = require("./inspect.mjs");
const instanceOf = function instanceOf(value, constructor) {
    if (value instanceof constructor) return true;
    if (typeof value === 'object' && value !== null) {
        var _value$constructor;
        // Prefer Symbol.toStringTag since it is immune to minification.
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
         ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
            const stringifiedValue = _inspectMjs.inspect(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};

},{"./inspect.mjs":"eTiKK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gC1Jl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents a location in a Source.
 */ /**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */ parcelHelpers.export(exports, "getLocation", ()=>getLocation
);
var _invariantMjs = require("../jsutils/invariant.mjs");
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match of source.body.matchAll(LineRegExp)){
        typeof match.index === 'number' || _invariantMjs.invariant(false);
        if (match.index >= position) break;
        lastLineStart = match.index + match[0].length;
        line += 1;
    }
    return {
        line,
        column: position + 1 - lastLineStart
    };
}

},{"../jsutils/invariant.mjs":"kr8jI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kr8jI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant
);
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) throw new Error(message != null ? message : 'Unexpected invariant triggered.');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxBRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ parcelHelpers.export(exports, "printLocation", ()=>printLocation
);
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */ parcelHelpers.export(exports, "printSourceLocation", ()=>printSourceLocation
);
var _locationMjs = require("./location.mjs");
function printLocation(location) {
    return printSourceLocation(location.source, _locationMjs.getLocation(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = ''.padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i = 0; i < locationLine.length; i += 80)subLines.push(locationLine.slice(i, i + 80));
        return locationStr + printPrefixedLines([
            [
                `${lineNum} |`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    '|',
                    subLine
                ]
            ),
            [
                '|',
                '^'.padStart(subLineColumnNum)
            ],
            [
                '|',
                subLines[subLineIndex + 1]
            ], 
        ]);
    }
    return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [
            `${lineNum - 1} |`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum} |`,
            locationLine
        ],
        [
            '|',
            '^'.padStart(columnNum)
        ],
        [
            `${lineNum + 1} |`,
            lines[lineIndex + 1]
        ], 
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined
    );
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length
    ));
    return existingLines.map(([prefix, line])=>prefix.padStart(padLen) + (line ? ' ' + line : '')
    ).join('\n');
}

},{"./location.mjs":"gC1Jl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6adj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Kind", ()=>Kind
);
let Kind;
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ (function(Kind1) {
    Kind1['NAME'] = 'Name';
    Kind1['DOCUMENT'] = 'Document';
    Kind1['OPERATION_DEFINITION'] = 'OperationDefinition';
    Kind1['VARIABLE_DEFINITION'] = 'VariableDefinition';
    Kind1['SELECTION_SET'] = 'SelectionSet';
    Kind1['FIELD'] = 'Field';
    Kind1['ARGUMENT'] = 'Argument';
    Kind1['FRAGMENT_SPREAD'] = 'FragmentSpread';
    Kind1['INLINE_FRAGMENT'] = 'InlineFragment';
    Kind1['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
    Kind1['VARIABLE'] = 'Variable';
    Kind1['INT'] = 'IntValue';
    Kind1['FLOAT'] = 'FloatValue';
    Kind1['STRING'] = 'StringValue';
    Kind1['BOOLEAN'] = 'BooleanValue';
    Kind1['NULL'] = 'NullValue';
    Kind1['ENUM'] = 'EnumValue';
    Kind1['LIST'] = 'ListValue';
    Kind1['OBJECT'] = 'ObjectValue';
    Kind1['OBJECT_FIELD'] = 'ObjectField';
    Kind1['DIRECTIVE'] = 'Directive';
    Kind1['NAMED_TYPE'] = 'NamedType';
    Kind1['LIST_TYPE'] = 'ListType';
    Kind1['NON_NULL_TYPE'] = 'NonNullType';
    Kind1['SCHEMA_DEFINITION'] = 'SchemaDefinition';
    Kind1['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
    Kind1['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
    Kind1['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
    Kind1['FIELD_DEFINITION'] = 'FieldDefinition';
    Kind1['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
    Kind1['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
    Kind1['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
    Kind1['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
    Kind1['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
    Kind1['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
    Kind1['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
    Kind1['SCHEMA_EXTENSION'] = 'SchemaExtension';
    Kind1['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
    Kind1['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
    Kind1['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
    Kind1['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
    Kind1['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
    Kind1['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chwug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenKind", ()=>TokenKind
);
let TokenKind;
/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ (function(TokenKind1) {
    TokenKind1['SOF'] = '<SOF>';
    TokenKind1['EOF'] = '<EOF>';
    TokenKind1['BANG'] = '!';
    TokenKind1['DOLLAR'] = '$';
    TokenKind1['AMP'] = '&';
    TokenKind1['PAREN_L'] = '(';
    TokenKind1['PAREN_R'] = ')';
    TokenKind1['SPREAD'] = '...';
    TokenKind1['COLON'] = ':';
    TokenKind1['EQUALS'] = '=';
    TokenKind1['AT'] = '@';
    TokenKind1['BRACKET_L'] = '[';
    TokenKind1['BRACKET_R'] = ']';
    TokenKind1['BRACE_L'] = '{';
    TokenKind1['PIPE'] = '|';
    TokenKind1['BRACE_R'] = '}';
    TokenKind1['NAME'] = 'Name';
    TokenKind1['INT'] = 'Int';
    TokenKind1['FLOAT'] = 'Float';
    TokenKind1['STRING'] = 'String';
    TokenKind1['BLOCK_STRING'] = 'BlockString';
    TokenKind1['COMMENT'] = 'Comment';
})(TokenKind || (TokenKind = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eDKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */ parcelHelpers.export(exports, "Lexer", ()=>Lexer
);
/**
 * @internal
 */ parcelHelpers.export(exports, "isPunctuatorTokenKind", ()=>isPunctuatorTokenKind
);
var _syntaxErrorMjs = require("../error/syntaxError.mjs");
var _astMjs = require("./ast.mjs");
var _blockStringMjs = require("./blockString.mjs");
var _characterClassesMjs = require("./characterClasses.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
class Lexer {
    /**
   * The previously focused non-ignored token.
   */ /**
   * The currently focused non-ignored token.
   */ /**
   * The (1-indexed) line containing the current token.
   */ /**
   * The character offset at which the current line begins.
   */ constructor(source){
        const startOfFileToken = new _astMjs.Token(_tokenKindMjs.TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return 'Lexer';
    }
    /**
   * Advances the token stream to the next non-ignored token.
   */ advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */ lookahead() {
        let token = this.token;
        if (token.kind !== _tokenKindMjs.TokenKind.EOF) {
            do if (token.next) token = token.next;
            else {
                // Read the next token and form a link in the token linked-list.
                const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.
                token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.
                nextToken.prev = token;
                token = nextToken;
            }
            while (token.kind === _tokenKindMjs.TokenKind.COMMENT)
        }
        return token;
    }
}
function isPunctuatorTokenKind(kind) {
    return kind === _tokenKindMjs.TokenKind.BANG || kind === _tokenKindMjs.TokenKind.DOLLAR || kind === _tokenKindMjs.TokenKind.AMP || kind === _tokenKindMjs.TokenKind.PAREN_L || kind === _tokenKindMjs.TokenKind.PAREN_R || kind === _tokenKindMjs.TokenKind.SPREAD || kind === _tokenKindMjs.TokenKind.COLON || kind === _tokenKindMjs.TokenKind.EQUALS || kind === _tokenKindMjs.TokenKind.AT || kind === _tokenKindMjs.TokenKind.BRACKET_L || kind === _tokenKindMjs.TokenKind.BRACKET_R || kind === _tokenKindMjs.TokenKind.BRACE_L || kind === _tokenKindMjs.TokenKind.PIPE || kind === _tokenKindMjs.TokenKind.BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */ function isUnicodeScalarValue(code) {
    return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */ function isSupplementaryCodePoint(body, location) {
    return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
    return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
    return code >= 56320 && code <= 57343;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */ function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);
    if (code === undefined) return _tokenKindMjs.TokenKind.EOF;
    else if (code >= 32 && code <= 126) {
        // Printable ASCII
        const char = String.fromCodePoint(code);
        return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point
    return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */ function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new _astMjs.Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */ function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // SourceCharacter
        switch(code){
            // Ignored ::
            //   - UnicodeBOM
            //   - WhiteSpace
            //   - LineTerminator
            //   - Comment
            //   - Comma
            //
            // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
            //
            // WhiteSpace ::
            //   - "Horizontal Tab (U+0009)"
            //   - "Space (U+0020)"
            //
            // Comma :: ,
            case 65279:
            case 9:
            case 32:
            case 44:
                // ,
                ++position;
                continue;
            // LineTerminator ::
            //   - "New Line (U+000A)"
            //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
            //   - "Carriage Return (U+000D)" "New Line (U+000A)"
            case 10:
                // \n
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            case 13:
                // \r
                if (body.charCodeAt(position + 1) === 10) position += 2;
                else ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            // Comment
            case 35:
                // #
                return readComment(lexer, position);
            // Token ::
            //   - Punctuator
            //   - Name
            //   - IntValue
            //   - FloatValue
            //   - StringValue
            //
            // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
            case 33:
                // !
                return createToken(lexer, _tokenKindMjs.TokenKind.BANG, position, position + 1);
            case 36:
                // $
                return createToken(lexer, _tokenKindMjs.TokenKind.DOLLAR, position, position + 1);
            case 38:
                // &
                return createToken(lexer, _tokenKindMjs.TokenKind.AMP, position, position + 1);
            case 40:
                // (
                return createToken(lexer, _tokenKindMjs.TokenKind.PAREN_L, position, position + 1);
            case 41:
                // )
                return createToken(lexer, _tokenKindMjs.TokenKind.PAREN_R, position, position + 1);
            case 46:
                // .
                if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) return createToken(lexer, _tokenKindMjs.TokenKind.SPREAD, position, position + 3);
                break;
            case 58:
                // :
                return createToken(lexer, _tokenKindMjs.TokenKind.COLON, position, position + 1);
            case 61:
                // =
                return createToken(lexer, _tokenKindMjs.TokenKind.EQUALS, position, position + 1);
            case 64:
                // @
                return createToken(lexer, _tokenKindMjs.TokenKind.AT, position, position + 1);
            case 91:
                // [
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACKET_L, position, position + 1);
            case 93:
                // ]
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACKET_R, position, position + 1);
            case 123:
                // {
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACE_L, position, position + 1);
            case 124:
                // |
                return createToken(lexer, _tokenKindMjs.TokenKind.PIPE, position, position + 1);
            case 125:
                // }
                return createToken(lexer, _tokenKindMjs.TokenKind.BRACE_R, position, position + 1);
            // StringValue
            case 34:
                // "
                if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) return readBlockString(lexer, position);
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if (_characterClassesMjs.isDigit(code) || code === 45) return readNumber(lexer, position, code);
         // Name
        if (_characterClassesMjs.isNameStart(code)) return readName(lexer, position);
        throw _syntaxErrorMjs.syntaxError(lexer.source, position, code === 39 ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?' : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, _tokenKindMjs.TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */ function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // LineTerminator (\n | \r)
        if (code === 10 || code === 13) break;
         // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else break;
    }
    return createToken(lexer, _tokenKindMjs.TokenKind.COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */ function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)
    if (code === 45) code = body.charCodeAt(++position);
     // Zero (0)
    if (code === 48) {
        code = body.charCodeAt(++position);
        if (_characterClassesMjs.isDigit(code)) throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
    } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Full stop (.)
    if (code === 46) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // E e
    if (code === 69 || code === 101) {
        isFloat = true;
        code = body.charCodeAt(++position); // + -
        if (code === 43 || code === 45) code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart
    if (code === 46 || _characterClassesMjs.isNameStart(code)) throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    return createToken(lexer, isFloat ? _tokenKindMjs.TokenKind.FLOAT : _tokenKindMjs.TokenKind.INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!_characterClassesMjs.isDigit(firstCode)) throw _syntaxErrorMjs.syntaxError(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while(_characterClassesMjs.isDigit(body.charCodeAt(position)))++position;
    return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */ function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = '';
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Quote (")
        if (code === 34) {
            value += body.slice(chunkStart, position);
            return createToken(lexer, _tokenKindMjs.TokenKind.STRING, start, position + 1, value);
        } // Escape Sequence (\)
        if (code === 92) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 117 // u
             ? body.charCodeAt(position + 2) === 123 // {
             ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
        } // LineTerminator (\n | \r)
        if (code === 10 || code === 13) break;
         // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.
function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).
    while(size < 12){
        const code = body.charCodeAt(position + size++); // Closing Brace (})
        if (code === 125) {
            // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
            if (size < 5 || !isUnicodeScalarValue(point)) break;
            return {
                value: String.fromCodePoint(point),
                size
            };
        } // Append this hex digit to the code point.
        point = point << 4 | readHexDigit(code);
        if (point < 0) break;
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);
    if (isUnicodeScalarValue(code)) return {
        value: String.fromCodePoint(code),
        size: 6
    };
     // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.
    if (isLeadingSurrogate(code)) // \u
    {
        if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) // JavaScript defines strings as a sequence of UTF-16 code units and
            // encodes Unicode code points above U+FFFF using a surrogate pair of
            // code units. Since this is a surrogate pair escape sequence, just
            // include both codes into the JavaScript string value. Had JavaScript
            // not been internally based on UTF-16, then this surrogate pair would
            // be decoded to retrieve the supplementary code point.
            return {
                value: String.fromCodePoint(code, trailingCode),
                size: 12
            };
        }
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */ function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */ function readHexDigit(code) {
    return code >= 48 && code <= 57 // 0-9
     ? code - 48 : code >= 65 && code <= 70 // A-F
     ? code - 55 : code >= 97 && code <= 102 // a-f
     ? code - 87 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */ function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);
    switch(code){
        case 34:
            // "
            return {
                value: '\u0022',
                size: 2
            };
        case 92:
            // \
            return {
                value: '\u005c',
                size: 2
            };
        case 47:
            // /
            return {
                value: '\u002f',
                size: 2
            };
        case 98:
            // b
            return {
                value: '\u0008',
                size: 2
            };
        case 102:
            // f
            return {
                value: '\u000c',
                size: 2
            };
        case 110:
            // n
            return {
                value: '\u000a',
                size: 2
            };
        case 114:
            // r
            return {
                value: '\u000d',
                size: 2
            };
        case 116:
            // t
            return {
                value: '\u0009',
                size: 2
            };
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */ function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = '';
    const blockLines = [];
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Triple-Quote (""")
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(lexer, _tokenKindMjs.TokenKind.BLOCK_STRING, start, position + 3, _blockStringMjs.dedentBlockStringLines(blockLines).join('\n'));
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
        } // Escaped Triple-Quote (\""")
        if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1; // skip only slash
            position += 4;
            continue;
        } // LineTerminator
        if (code === 10 || code === 13) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 13 && body.charCodeAt(position + 1) === 10) position += 2;
            else ++position;
            currentLine = '';
            chunkStart = position;
            lineStart = position;
            continue;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) ++position;
        else if (isSupplementaryCodePoint(body, position)) position += 2;
        else throw _syntaxErrorMjs.syntaxError(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
    }
    throw _syntaxErrorMjs.syntaxError(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */ function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position);
        if (_characterClassesMjs.isNameContinue(code)) ++position;
        else break;
    }
    return createToken(lexer, _tokenKindMjs.TokenKind.NAME, start, position, body.slice(start, position));
}

},{"../error/syntaxError.mjs":"9aPZI","./ast.mjs":"iaolY","./blockString.mjs":"hVqvS","./characterClasses.mjs":"ieRdY","./tokenKind.mjs":"chwug","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9aPZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */ parcelHelpers.export(exports, "syntaxError", ()=>syntaxError
);
var _graphQLErrorMjs = require("./GraphQLError.mjs");
function syntaxError(source, position, description) {
    return new _graphQLErrorMjs.GraphQLError(`Syntax Error: ${description}`, undefined, source, [
        position, 
    ]);
}

},{"./GraphQLError.mjs":"1aaUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aaUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */ parcelHelpers.export(exports, "GraphQLError", ()=>GraphQLError
);
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */ /**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ parcelHelpers.export(exports, "printError", ()=>printError
);
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ parcelHelpers.export(exports, "formatError", ()=>formatError
);
var _isObjectLikeMjs = require("../jsutils/isObjectLike.mjs");
var _locationMjs = require("../language/location.mjs");
var _printLocationMjs = require("../language/printLocation.mjs");
function toNormalizedArgs(args) {
    const firstArg = args[0];
    if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) return {
        nodes: firstArg,
        source: args[1],
        positions: args[2],
        path: args[3],
        originalError: args[4],
        extensions: args[5]
    };
    return firstArg;
}
class GraphQLError extends Error {
    /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */ /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */ /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */ /**
   * The original error thrown from a field resolver during execution.
   */ /**
   * Extension fields to add to the formatted error.
   */ /**
   * @deprecated Please use the `GraphQLErrorArgs` constructor overload instead.
   */ constructor(message, ...rawArgs){
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes , source , positions , path , originalError , extensions  } = toNormalizedArgs(rawArgs);
        super(message);
        this.name = 'GraphQLError';
        this.path = path !== null && path !== void 0 ? path : undefined;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : undefined);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node)=>node.loc
        ).filter((loc)=>loc != null
        )); // Compute locations in the source for the given nodes/positions.
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>loc.start
        );
        this.locations = positions && source ? positions.map((pos)=>_locationMjs.getLocation(source, pos)
        ) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>_locationMjs.getLocation(loc.source, loc.start)
        );
        const originalExtensions = _isObjectLikeMjs.isObjectLike(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
        // Keep the rest as non-enumerable.
        Object.defineProperties(this, {
            message: {
                writable: true,
                enumerable: true
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        }); // Include (non-enumerable) stack trace.
        /* c8 ignore start */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
        if (originalError !== null && originalError !== void 0 && originalError.stack) Object.defineProperty(this, 'stack', {
            value: originalError.stack,
            writable: true,
            configurable: true
        });
        else if (Error.captureStackTrace) Error.captureStackTrace(this, GraphQLError);
        else Object.defineProperty(this, 'stack', {
            value: Error().stack,
            writable: true,
            configurable: true
        });
    /* c8 ignore stop */ }
    get [Symbol.toStringTag]() {
        return 'GraphQLError';
    }
    toString() {
        let output = this.message;
        if (this.nodes) {
            for (const node of this.nodes)if (node.loc) output += '\n\n' + _printLocationMjs.printLocation(node.loc);
        } else if (this.source && this.locations) for (const location of this.locations)output += '\n\n' + _printLocationMjs.printSourceLocation(this.source, location);
        return output;
    }
    toJSON() {
        const formattedError = {
            message: this.message
        };
        if (this.locations != null) formattedError.locations = this.locations;
        if (this.path != null) formattedError.path = this.path;
        if (this.extensions != null && Object.keys(this.extensions).length > 0) formattedError.extensions = this.extensions;
        return formattedError;
    }
}
function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
}
function printError(error) {
    return error.toString();
}
function formatError(error) {
    return error.toJSON();
}

},{"../jsutils/isObjectLike.mjs":"6KQxg","../language/location.mjs":"gC1Jl","../language/printLocation.mjs":"dxBRO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KQxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ parcelHelpers.export(exports, "isObjectLike", ()=>isObjectLike
);
function isObjectLike(value) {
    return typeof value == 'object' && value !== null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaolY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ parcelHelpers.export(exports, "Location", ()=>Location
);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ parcelHelpers.export(exports, "Token", ()=>Token
);
parcelHelpers.export(exports, "QueryDocumentKeys", ()=>QueryDocumentKeys
);
/**
 * @internal
 */ parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "OperationTypeNode", ()=>OperationTypeNode
);
class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return 'Location';
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return 'Token';
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
const QueryDocumentKeys = {
    Name: [],
    Document: [
        'definitions'
    ],
    OperationDefinition: [
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet', 
    ],
    VariableDefinition: [
        'variable',
        'type',
        'defaultValue',
        'directives'
    ],
    Variable: [
        'name'
    ],
    SelectionSet: [
        'selections'
    ],
    Field: [
        'alias',
        'name',
        'arguments',
        'directives',
        'selectionSet'
    ],
    Argument: [
        'name',
        'value'
    ],
    FragmentSpread: [
        'name',
        'directives'
    ],
    InlineFragment: [
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet', 
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        'values'
    ],
    ObjectValue: [
        'fields'
    ],
    ObjectField: [
        'name',
        'value'
    ],
    Directive: [
        'name',
        'arguments'
    ],
    NamedType: [
        'name'
    ],
    ListType: [
        'type'
    ],
    NonNullType: [
        'type'
    ],
    SchemaDefinition: [
        'description',
        'directives',
        'operationTypes'
    ],
    OperationTypeDefinition: [
        'type'
    ],
    ScalarTypeDefinition: [
        'description',
        'name',
        'directives'
    ],
    ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields', 
    ],
    FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
    ],
    InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives', 
    ],
    InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields', 
    ],
    UnionTypeDefinition: [
        'description',
        'name',
        'directives',
        'types'
    ],
    EnumTypeDefinition: [
        'description',
        'name',
        'directives',
        'values'
    ],
    EnumValueDefinition: [
        'description',
        'name',
        'directives'
    ],
    InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
    ],
    DirectiveDefinition: [
        'description',
        'name',
        'arguments',
        'locations'
    ],
    SchemaExtension: [
        'directives',
        'operationTypes'
    ],
    ScalarTypeExtension: [
        'name',
        'directives'
    ],
    ObjectTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    InterfaceTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeExtension: [
        'name',
        'directives',
        'types'
    ],
    EnumTypeExtension: [
        'name',
        'directives',
        'values'
    ],
    InputObjectTypeExtension: [
        'name',
        'directives',
        'fields'
    ]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
let OperationTypeNode;
(function(OperationTypeNode1) {
    OperationTypeNode1['QUERY'] = 'query';
    OperationTypeNode1['MUTATION'] = 'mutation';
    OperationTypeNode1['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (OperationTypeNode = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hVqvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ parcelHelpers.export(exports, "dedentBlockStringLines", ()=>dedentBlockStringLines
);
/**
 * @internal
 */ parcelHelpers.export(exports, "isPrintableAsBlockString", ()=>isPrintableAsBlockString
);
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ parcelHelpers.export(exports, "printBlockString", ()=>printBlockString
);
var _characterClassesMjs = require("./characterClasses.mjs");
function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i1 = 0; i1 < lines.length; ++i1){
        var _firstNonEmptyLine;
        const line = lines[i1];
        const indent = leadingWhitespace(line);
        if (indent === line.length) continue; // skip empty lines
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i1;
        lastNonEmptyLine = i1;
        if (i1 !== 0 && indent < commonIndent) commonIndent = indent;
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)
    ) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && _characterClassesMjs.isWhiteSpace(str.charCodeAt(i)))++i;
    return i;
}
function isPrintableAsBlockString(value) {
    if (value === '') return true; // empty string is printable
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i)switch(value.codePointAt(i)){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 11:
        case 12:
        case 14:
        case 15:
            return false;
        // Has non-printable characters
        case 13:
            //  \r
            return false;
        // Has \r or \r\n which will be replaced as \n
        case 10:
            //  \n
            if (isEmptyLine && !seenNonEmptyLine) return false; // Has leading new line
            seenNonEmptyLine = true;
            isEmptyLine = true;
            hasIndent = false;
            break;
        case 9:
        case 32:
            //  <space>
            hasIndent || (hasIndent = isEmptyLine);
            break;
        default:
            hasCommonIndent && (hasCommonIndent = hasIndent);
            isEmptyLine = false;
    }
    if (isEmptyLine) return false; // Has trailing empty lines
    if (hasCommonIndent && seenNonEmptyLine) return false; // Has internal indent
    return true;
}
function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || _characterClassesMjs.isWhiteSpace(line.charCodeAt(0))
    ); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith('\\');
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ''; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && _characterClassesMjs.isWhiteSpace(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) result += '\n';
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) result += '\n';
    return '"""' + result + '"""';
}

},{"./characterClasses.mjs":"ieRdY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ieRdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isWhiteSpace", ()=>isWhiteSpace
);
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isDigit", ()=>isDigit
);
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isLetter", ()=>isLetter
);
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isNameStart", ()=>isNameStart
);
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ parcelHelpers.export(exports, "isNameContinue", ()=>isNameContinue
);
function isWhiteSpace(code) {
    return code === 9 || code === 32;
}
function isDigit(code) {
    return code >= 48 && code <= 57;
}
function isLetter(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90 // a-z
    ;
}
function isNameStart(code) {
    return isLetter(code) || code === 95;
}
function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 95;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQAAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configuration options to control parser behavior
 */ /**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */ parcelHelpers.export(exports, "parse", ()=>parse
);
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */ parcelHelpers.export(exports, "parseValue", ()=>parseValue
);
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */ parcelHelpers.export(exports, "parseConstValue", ()=>parseConstValue
);
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */ parcelHelpers.export(exports, "parseType", ()=>parseType
);
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */ parcelHelpers.export(exports, "Parser", ()=>Parser
);
var _syntaxErrorMjs = require("../error/syntaxError.mjs");
var _astMjs = require("./ast.mjs");
var _directiveLocationMjs = require("./directiveLocation.mjs");
var _kindsMjs = require("./kinds.mjs");
var _lexerMjs = require("./lexer.mjs");
var _sourceMjs = require("./source.mjs");
var _tokenKindMjs = require("./tokenKind.mjs");
function parse(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
}
function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKindMjs.TokenKind.SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(_tokenKindMjs.TokenKind.EOF);
    return value;
}
function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKindMjs.TokenKind.SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(_tokenKindMjs.TokenKind.EOF);
    return value;
}
function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKindMjs.TokenKind.SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(_tokenKindMjs.TokenKind.EOF);
    return type;
}
class Parser {
    constructor(source, options){
        const sourceObj = _sourceMjs.isSource(source) ? source : new _sourceMjs.Source(source);
        this._lexer = new _lexerMjs.Lexer(sourceObj);
        this._options = options;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken(_tokenKindMjs.TokenKind.NAME);
        return this.node(token, {
            kind: _kindsMjs.Kind.NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.DOCUMENT,
            definitions: this.many(_tokenKindMjs.TokenKind.SOF, this.parseDefinition, _tokenKindMjs.TokenKind.EOF)
        });
    }
    /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */ parseDefinition() {
        if (this.peek(_tokenKindMjs.TokenKind.BRACE_L)) return this.parseOperationDefinition();
         // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === _tokenKindMjs.TokenKind.NAME) {
            switch(keywordToken.value){
                case 'schema':
                    return this.parseSchemaDefinition();
                case 'scalar':
                    return this.parseScalarTypeDefinition();
                case 'type':
                    return this.parseObjectTypeDefinition();
                case 'interface':
                    return this.parseInterfaceTypeDefinition();
                case 'union':
                    return this.parseUnionTypeDefinition();
                case 'enum':
                    return this.parseEnumTypeDefinition();
                case 'input':
                    return this.parseInputObjectTypeDefinition();
                case 'directive':
                    return this.parseDirectiveDefinition();
            }
            if (hasDescription) throw _syntaxErrorMjs.syntaxError(this._lexer.source, this._lexer.token.start, 'Unexpected description, descriptions are supported only on type definitions.');
            switch(keywordToken.value){
                case 'query':
                case 'mutation':
                case 'subscription':
                    return this.parseOperationDefinition();
                case 'fragment':
                    return this.parseFragmentDefinition();
                case 'extend':
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */ parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(_tokenKindMjs.TokenKind.BRACE_L)) return this.node(start, {
            kind: _kindsMjs.Kind.OPERATION_DEFINITION,
            operation: _astMjs.OperationTypeNode.QUERY,
            name: undefined,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        const operation = this.parseOperationType();
        let name;
        if (this.peek(_tokenKindMjs.TokenKind.NAME)) name = this.parseName();
        return this.node(start, {
            kind: _kindsMjs.Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * OperationType : one of query mutation subscription
   */ parseOperationType() {
        const operationToken = this.expectToken(_tokenKindMjs.TokenKind.NAME);
        switch(operationToken.value){
            case 'query':
                return _astMjs.OperationTypeNode.QUERY;
            case 'mutation':
                return _astMjs.OperationTypeNode.MUTATION;
            case 'subscription':
                return _astMjs.OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany(_tokenKindMjs.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKindMjs.TokenKind.PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(_tokenKindMjs.TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(_tokenKindMjs.TokenKind.EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken(_tokenKindMjs.TokenKind.DOLLAR);
        return this.node(start, {
            kind: _kindsMjs.Kind.VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.SELECTION_SET,
            selections: this.many(_tokenKindMjs.TokenKind.BRACE_L, this.parseSelection, _tokenKindMjs.TokenKind.BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek(_tokenKindMjs.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */ parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else name = nameOrAlias;
        return this.node(start, {
            kind: _kindsMjs.Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(_tokenKindMjs.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(_tokenKindMjs.TokenKind.PAREN_L, item, _tokenKindMjs.TokenKind.PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        return this.node(start, {
            kind: _kindsMjs.Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    parseConstArgument() {
        return this.parseArgument(true);
    }
    /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */ parseFragment() {
        const start = this._lexer.token;
        this.expectToken(_tokenKindMjs.TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword('on');
        if (!hasTypeCondition && this.peek(_tokenKindMjs.TokenKind.NAME)) return this.node(start, {
            kind: _kindsMjs.Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
        });
        return this.node(start, {
            kind: _kindsMjs.Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */ parseFragmentDefinition() {
        var _this$_options;
        const start = this._lexer.token;
        this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
        if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.allowLegacyFragmentVariables) === true) return this.node(start, {
            kind: _kindsMjs.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
        return this.node(start, {
            kind: _kindsMjs.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentName : Name but not `on`
   */ parseFragmentName() {
        if (this._lexer.token.value === 'on') throw this.unexpected();
        return this.parseName();
    }
    /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case _tokenKindMjs.TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case _tokenKindMjs.TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case _tokenKindMjs.TokenKind.INT:
                this._lexer.advance();
                return this.node(token, {
                    kind: _kindsMjs.Kind.INT,
                    value: token.value
                });
            case _tokenKindMjs.TokenKind.FLOAT:
                this._lexer.advance();
                return this.node(token, {
                    kind: _kindsMjs.Kind.FLOAT,
                    value: token.value
                });
            case _tokenKindMjs.TokenKind.STRING:
            case _tokenKindMjs.TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case _tokenKindMjs.TokenKind.NAME:
                this._lexer.advance();
                switch(token.value){
                    case 'true':
                        return this.node(token, {
                            kind: _kindsMjs.Kind.BOOLEAN,
                            value: true
                        });
                    case 'false':
                        return this.node(token, {
                            kind: _kindsMjs.Kind.BOOLEAN,
                            value: false
                        });
                    case 'null':
                        return this.node(token, {
                            kind: _kindsMjs.Kind.NULL
                        });
                    default:
                        return this.node(token, {
                            kind: _kindsMjs.Kind.ENUM,
                            value: token.value
                        });
                }
            case _tokenKindMjs.TokenKind.DOLLAR:
                if (isConst) {
                    this.expectToken(_tokenKindMjs.TokenKind.DOLLAR);
                    if (this._lexer.token.kind === _tokenKindMjs.TokenKind.NAME) {
                        const varName = this._lexer.token.value;
                        throw _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
                    } else throw this.unexpected(token);
                }
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this._lexer.advance();
        return this.node(token, {
            kind: _kindsMjs.Kind.STRING,
            value: token.value,
            block: token.kind === _tokenKindMjs.TokenKind.BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst)
        ;
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.LIST,
            values: this.any(_tokenKindMjs.TokenKind.BRACKET_L, item, _tokenKindMjs.TokenKind.BRACKET_R)
        });
    }
    /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */ parseObject(isConst) {
        const item = ()=>this.parseObjectField(isConst)
        ;
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.OBJECT,
            fields: this.any(_tokenKindMjs.TokenKind.BRACE_L, item, _tokenKindMjs.TokenKind.BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        return this.node(start, {
            kind: _kindsMjs.Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek(_tokenKindMjs.TokenKind.AT))directives.push(this.parseDirective(isConst));
        return directives;
    }
    parseConstDirectives() {
        return this.parseDirectives(true);
    }
    /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */ parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(_tokenKindMjs.TokenKind.AT);
        return this.node(start, {
            kind: _kindsMjs.Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
        });
    }
    /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */ parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(_tokenKindMjs.TokenKind.BRACKET_R);
            type = this.node(start, {
                kind: _kindsMjs.Kind.LIST_TYPE,
                type: innerType
            });
        } else type = this.parseNamedType();
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.BANG)) return this.node(start, {
            kind: _kindsMjs.Kind.NON_NULL_TYPE,
            type
        });
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: _kindsMjs.Kind.NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(_tokenKindMjs.TokenKind.STRING) || this.peek(_tokenKindMjs.TokenKind.BLOCK_STRING);
    }
    /**
   * Description : StringValue
   */ parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral();
    }
    /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */ parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('schema');
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(_tokenKindMjs.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKindMjs.TokenKind.BRACE_R);
        return this.node(start, {
            kind: _kindsMjs.Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
        });
    }
    /**
   * OperationTypeDefinition : OperationType : NamedType
   */ parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: _kindsMjs.Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type
        });
    }
    /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */ parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */ parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */ parseImplementsInterfaces() {
        return this.expectOptionalKeyword('implements') ? this.delimitedMany(_tokenKindMjs.TokenKind.AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKindMjs.TokenKind.BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
        });
    }
    /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */ parseArgumentDefs() {
        return this.optionalMany(_tokenKindMjs.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKindMjs.TokenKind.PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(_tokenKindMjs.TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(_tokenKindMjs.TokenKind.EQUALS)) defaultValue = this.parseConstValueLiteral();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
        });
    }
    /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */ parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */ parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
            kind: _kindsMjs.Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
        });
    }
    /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */ parseUnionMemberTypes() {
        return this.expectOptionalToken(_tokenKindMjs.TokenKind.EQUALS) ? this.delimitedMany(_tokenKindMjs.TokenKind.PIPE, this.parseNamedType) : [];
    }
    /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */ parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
        });
    }
    /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */ parseEnumValuesDefinition() {
        return this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKindMjs.TokenKind.BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: _kindsMjs.Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === 'true' || this._lexer.token.value === 'false' || this._lexer.token.value === 'null') throw _syntaxErrorMjs.syntaxError(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName();
    }
    /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */ parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
            kind: _kindsMjs.Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */ parseInputFieldsDefinition() {
        return this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKindMjs.TokenKind.BRACE_R);
    }
    /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */ parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === _tokenKindMjs.TokenKind.NAME) switch(keywordToken.value){
            case 'schema':
                return this.parseSchemaExtension();
            case 'scalar':
                return this.parseScalarTypeExtension();
            case 'type':
                return this.parseObjectTypeExtension();
            case 'interface':
                return this.parseInterfaceTypeExtension();
            case 'union':
                return this.parseUnionTypeExtension();
            case 'enum':
                return this.parseEnumTypeExtension();
            case 'input':
                return this.parseInputObjectTypeExtension();
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */ parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('schema');
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(_tokenKindMjs.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKindMjs.TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes
        });
    }
    /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */ parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives
        });
    }
    /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */ parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */ parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */ parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types
        });
    }
    /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */ parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
        });
    }
    /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */ parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) throw this.unexpected();
        return this.node(start, {
            kind: _kindsMjs.Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */ parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('directive');
        this.expectToken(_tokenKindMjs.TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword('repeatable');
        this.expectKeyword('on');
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: _kindsMjs.Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
        });
    }
    /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */ parseDirectiveLocations() {
        return this.delimitedMany(_tokenKindMjs.TokenKind.PIPE, this.parseDirectiveLocation);
    }
    /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */ parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(_directiveLocationMjs.DirectiveLocation, name.value)) return name;
        throw this.unexpected(start);
    }
    /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */ node(startToken, node) {
        var _this$_options2;
        if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.noLocation) !== true) node.loc = new _astMjs.Location(startToken, this._lexer.lastToken, this._lexer.source);
        return node;
    }
    /**
   * Determines if the next token is of a given kind
   */ peek(kind) {
        return this._lexer.token.kind === kind;
    }
    /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return token;
        }
        throw _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return true;
        }
        return false;
    }
    /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKindMjs.TokenKind.NAME && token.value === value) this._lexer.advance();
        else throw _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKindMjs.TokenKind.NAME && token.value === value) {
            this._lexer.advance();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return _syntaxErrorMjs.syntaxError(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind))nodes.push(parseFn.call(this));
        return nodes;
    }
    /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do nodes.push(parseFn.call(this));
            while (!this.expectOptionalToken(closeKind))
            return nodes;
        }
        return [];
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do nodes.push(parseFn.call(this));
        while (!this.expectOptionalToken(closeKind))
        return nodes;
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */ delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do nodes.push(parseFn.call(this));
        while (this.expectOptionalToken(delimiterKind))
        return nodes;
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return _lexerMjs.isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

},{"../error/syntaxError.mjs":"9aPZI","./ast.mjs":"iaolY","./directiveLocation.mjs":"hGyry","./kinds.mjs":"6adj0","./lexer.mjs":"6eDKj","./source.mjs":"jclLZ","./tokenKind.mjs":"chwug","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGyry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectiveLocation", ()=>DirectiveLocation
);
let DirectiveLocation;
/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ (function(DirectiveLocation1) {
    DirectiveLocation1['QUERY'] = 'QUERY';
    DirectiveLocation1['MUTATION'] = 'MUTATION';
    DirectiveLocation1['SUBSCRIPTION'] = 'SUBSCRIPTION';
    DirectiveLocation1['FIELD'] = 'FIELD';
    DirectiveLocation1['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
    DirectiveLocation1['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
    DirectiveLocation1['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
    DirectiveLocation1['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
    DirectiveLocation1['SCHEMA'] = 'SCHEMA';
    DirectiveLocation1['SCALAR'] = 'SCALAR';
    DirectiveLocation1['OBJECT'] = 'OBJECT';
    DirectiveLocation1['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
    DirectiveLocation1['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
    DirectiveLocation1['INTERFACE'] = 'INTERFACE';
    DirectiveLocation1['UNION'] = 'UNION';
    DirectiveLocation1['ENUM'] = 'ENUM';
    DirectiveLocation1['ENUM_VALUE'] = 'ENUM_VALUE';
    DirectiveLocation1['INPUT_OBJECT'] = 'INPUT_OBJECT';
    DirectiveLocation1['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YJ0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ parcelHelpers.export(exports, "print", ()=>print
);
var _blockStringMjs = require("./blockString.mjs");
var _printStringMjs = require("./printString.mjs");
var _visitorMjs = require("./visitor.mjs");
function print(ast) {
    return _visitorMjs.visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>'$' + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, '\n\n')
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, ' '), 
            ], ' '); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable , type , defaultValue , directives  })=>variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '))
    },
    SelectionSet: {
        leave: ({ selections  })=>block(selections)
    },
    Field: {
        leave ({ alias , name , arguments: args , directives , selectionSet  }) {
            const prefix = wrap('', alias, ': ') + name;
            let argsLine = prefix + wrap('(', join(args, ', '), ')');
            if (argsLine.length > MAX_LINE_LENGTH) argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
            return join([
                argsLine,
                join(directives, ' '),
                selectionSet
            ], ' ');
        }
    },
    Argument: {
        leave: ({ name , value  })=>name + ': ' + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name , directives  })=>'...' + name + wrap(' ', join(directives, ' '))
    },
    InlineFragment: {
        leave: ({ typeCondition , directives , selectionSet  })=>join([
                '...',
                wrap('on ', typeCondition),
                join(directives, ' '),
                selectionSet, 
            ], ' ')
    },
    FragmentDefinition: {
        leave: ({ name , typeCondition , variableDefinitions , directives , selectionSet  })=>// or removed in the future.
            `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` + `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value  })=>value
    },
    FloatValue: {
        leave: ({ value  })=>value
    },
    StringValue: {
        leave: ({ value , block: isBlockString  })=>isBlockString ? _blockStringMjs.printBlockString(value) : _printStringMjs.printString(value)
    },
    BooleanValue: {
        leave: ({ value  })=>value ? 'true' : 'false'
    },
    NullValue: {
        leave: ()=>'null'
    },
    EnumValue: {
        leave: ({ value  })=>value
    },
    ListValue: {
        leave: ({ values  })=>'[' + join(values, ', ') + ']'
    },
    ObjectValue: {
        leave: ({ fields  })=>'{' + join(fields, ', ') + '}'
    },
    ObjectField: {
        leave: ({ name , value  })=>name + ': ' + value
    },
    // Directive
    Directive: {
        leave: ({ name , arguments: args  })=>'@' + name + wrap('(', join(args, ', '), ')')
    },
    // Type
    NamedType: {
        leave: ({ name  })=>name
    },
    ListType: {
        leave: ({ type  })=>'[' + type + ']'
    },
    NonNullType: {
        leave: ({ type  })=>type + '!'
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description , directives , operationTypes  })=>wrap('', description, '\n') + join([
                'schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    OperationTypeDefinition: {
        leave: ({ operation , type  })=>operation + ': ' + type
    },
    ScalarTypeDefinition: {
        leave: ({ description , name , directives  })=>wrap('', description, '\n') + join([
                'scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap('', description, '\n') + join([
                'type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    FieldDefinition: {
        leave: ({ description , name , arguments: args , type , directives  })=>wrap('', description, '\n') + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '))
    },
    InputValueDefinition: {
        leave: ({ description , name , type , defaultValue , directives  })=>wrap('', description, '\n') + join([
                name + ': ' + type,
                wrap('= ', defaultValue),
                join(directives, ' ')
            ], ' ')
    },
    InterfaceTypeDefinition: {
        leave: ({ description , name , interfaces , directives , fields  })=>wrap('', description, '\n') + join([
                'interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    UnionTypeDefinition: {
        leave: ({ description , name , directives , types  })=>wrap('', description, '\n') + join([
                'union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeDefinition: {
        leave: ({ description , name , directives , values  })=>wrap('', description, '\n') + join([
                'enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    EnumValueDefinition: {
        leave: ({ description , name , directives  })=>wrap('', description, '\n') + join([
                name,
                join(directives, ' ')
            ], ' ')
    },
    InputObjectTypeDefinition: {
        leave: ({ description , name , directives , fields  })=>wrap('', description, '\n') + join([
                'input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    DirectiveDefinition: {
        leave: ({ description , name , arguments: args , repeatable , locations  })=>wrap('', description, '\n') + 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ')
    },
    SchemaExtension: {
        leave: ({ directives , operationTypes  })=>join([
                'extend schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    ScalarTypeExtension: {
        leave: ({ name , directives  })=>join([
                'extend scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                'extend type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    InterfaceTypeExtension: {
        leave: ({ name , interfaces , directives , fields  })=>join([
                'extend interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields), 
            ], ' ')
    },
    UnionTypeExtension: {
        leave: ({ name , directives , types  })=>join([
                'extend union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | ')), 
            ], ' ')
    },
    EnumTypeExtension: {
        leave: ({ name , directives , values  })=>join([
                'extend enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    InputObjectTypeExtension: {
        leave: ({ name , directives , fields  })=>join([
                'extend input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = '') {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x
    ).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = '') {
    return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}
function indent(str) {
    return wrap('  ', str.replace(/\n/g, '\n  '));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes('\n')
    )) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

},{"./blockString.mjs":"hVqvS","./printString.mjs":"c9hcM","./visitor.mjs":"dn6QO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9hcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ parcelHelpers.export(exports, "printString", ()=>printString
) // eslint-disable-next-line no-control-regex
;
function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F', 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn6QO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BREAK", ()=>BREAK
);
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ parcelHelpers.export(exports, "visit", ()=>visit
);
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ parcelHelpers.export(exports, "visitInParallel", ()=>visitInParallel
);
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ parcelHelpers.export(exports, "getEnterLeaveForKind", ()=>getEnterLeaveForKind
);
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ parcelHelpers.export(exports, "getVisitFn", ()=>getVisitFn
);
var _devAssertMjs = require("../jsutils/devAssert.mjs");
var _inspectMjs = require("../jsutils/inspect.mjs");
var _astMjs = require("./ast.mjs");
var _kindsMjs = require("./kinds.mjs");
const BREAK = Object.freeze({
});
function visit(root, visitor, visitorKeys = _astMjs.QueryDocumentKeys) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(_kindsMjs.Kind))enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else node[arrayKey] = editValue;
                    }
                } else {
                    node = Object.defineProperties({
                    }, Object.getOwnPropertyDescriptors(node));
                    for (const [editKey, editValue] of edits)node[editKey] = editValue;
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) continue;
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            _astMjs.isNode(node) || _devAssertMjs.devAssert(false, `Invalid AST Node: ${_inspectMjs.inspect(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) break;
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if (_astMjs.isNode(result)) node = result;
                    else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) edits.push([
            key,
            node
        ]);
        if (isLeaving) path.pop();
        else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) ancestors.push(parent);
            parent = node;
        }
    }while (stack !== undefined)
    if (edits.length !== 0) // New root
    return edits[edits.length - 1][1];
    return root;
}
function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(_kindsMjs.Kind)){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i1 = 0; i1 < visitors.length; ++i1){
            const { enter , leave  } = getEnterLeaveForKind(visitors[i1], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i1] = enter;
            leaveList[i1] = leave;
        }
        if (!hasVisitor) continue;
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++)if (skipping[i] === null) {
                    var _enterList$i;
                    const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                    if (result === false) skipping[i] = node;
                    else if (result === BREAK) skipping[i] = BREAK;
                    else if (result !== undefined) return result;
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) skipping[i] = BREAK;
                        else if (result !== undefined && result !== false) return result;
                    } else if (skipping[i] === node) skipping[i] = null;
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === 'object') // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
    else if (typeof kindVisitor === 'function') // { Kind() {} }
    return {
        enter: kindVisitor,
        leave: undefined
    };
     // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
function getVisitFn(visitor, kind, isLeaving) {
    const { enter , leave  } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

},{"../jsutils/devAssert.mjs":"7HVcG","../jsutils/inspect.mjs":"eTiKK","./ast.mjs":"iaolY","./kinds.mjs":"6adj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiHiR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDefinitionNode", ()=>isDefinitionNode
);
parcelHelpers.export(exports, "isExecutableDefinitionNode", ()=>isExecutableDefinitionNode
);
parcelHelpers.export(exports, "isSelectionNode", ()=>isSelectionNode
);
parcelHelpers.export(exports, "isValueNode", ()=>isValueNode
);
parcelHelpers.export(exports, "isConstValueNode", ()=>isConstValueNode
);
parcelHelpers.export(exports, "isTypeNode", ()=>isTypeNode
);
parcelHelpers.export(exports, "isTypeSystemDefinitionNode", ()=>isTypeSystemDefinitionNode
);
parcelHelpers.export(exports, "isTypeDefinitionNode", ()=>isTypeDefinitionNode
);
parcelHelpers.export(exports, "isTypeSystemExtensionNode", ()=>isTypeSystemExtensionNode
);
parcelHelpers.export(exports, "isTypeExtensionNode", ()=>isTypeExtensionNode
);
var _kindsMjs = require("./kinds.mjs");
function isDefinitionNode(node) {
    return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
    return node.kind === _kindsMjs.Kind.OPERATION_DEFINITION || node.kind === _kindsMjs.Kind.FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
    return node.kind === _kindsMjs.Kind.FIELD || node.kind === _kindsMjs.Kind.FRAGMENT_SPREAD || node.kind === _kindsMjs.Kind.INLINE_FRAGMENT;
}
function isValueNode(node) {
    return node.kind === _kindsMjs.Kind.VARIABLE || node.kind === _kindsMjs.Kind.INT || node.kind === _kindsMjs.Kind.FLOAT || node.kind === _kindsMjs.Kind.STRING || node.kind === _kindsMjs.Kind.BOOLEAN || node.kind === _kindsMjs.Kind.NULL || node.kind === _kindsMjs.Kind.ENUM || node.kind === _kindsMjs.Kind.LIST || node.kind === _kindsMjs.Kind.OBJECT;
}
function isConstValueNode(node) {
    return isValueNode(node) && (node.kind === _kindsMjs.Kind.LIST ? node.values.some(isConstValueNode) : node.kind === _kindsMjs.Kind.OBJECT ? node.fields.some((field)=>isConstValueNode(field.value)
    ) : node.kind !== _kindsMjs.Kind.VARIABLE);
}
function isTypeNode(node) {
    return node.kind === _kindsMjs.Kind.NAMED_TYPE || node.kind === _kindsMjs.Kind.LIST_TYPE || node.kind === _kindsMjs.Kind.NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
    return node.kind === _kindsMjs.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kindsMjs.Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
    return node.kind === _kindsMjs.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.UNION_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.ENUM_TYPE_DEFINITION || node.kind === _kindsMjs.Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
    return node.kind === _kindsMjs.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
    return node.kind === _kindsMjs.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.UNION_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.ENUM_TYPE_EXTENSION || node.kind === _kindsMjs.Kind.INPUT_OBJECT_TYPE_EXTENSION;
}

},{"./kinds.mjs":"6adj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","3c0Hu","c7lqJ"], "c7lqJ", "parcelRequire94c2")

//# sourceMappingURL=index.646a7cb7.js.map
