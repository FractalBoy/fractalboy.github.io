/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/rustendo_bg.wasm": function() {
/******/ 			return {
/******/ 				"./rustendo_bg.js": {
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_d64060d13377409b": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_instanceof_Window_d64060d13377409b"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_bcf9d67bc56e8c6d": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_document_bcf9d67bc56e8c6d"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_96f88ce2d311332e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_requestAnimationFrame_96f88ce2d311332e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_documentElement_aa57376d5b0b608e": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_documentElement_aa57376d5b0b608e"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_467bb064d2ae5833": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_createElement_467bb064d2ae5833"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_0e0dd6444cdc0602": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_getElementById_0e0dd6444cdc0602"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_fe52a115589ccc2c": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_addEventListener_fe52a115589ccc2c"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_newwithu8clampedarray_4799da77eec42ad7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_newwithu8clampedarray_4799da77eec42ad7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_clientWidth_95e61f3b1d384472": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_clientWidth_95e61f3b1d384472"](p0i32);
/******/ 					},
/******/ 					"__wbg_clientHeight_c410cf002fbe0847": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_clientHeight_c410cf002fbe0847"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_1112667cc1f23532": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_1112667cc1f23532"](p0i32);
/******/ 					},
/******/ 					"__wbg_drawImage_1c29d1a2a4b8b410": function(p0i32,p1i32,p2f64,p3f64,p4f64,p5f64) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_drawImage_1c29d1a2a4b8b410"](p0i32,p1i32,p2f64,p3f64,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_putImageData_b290181a4e24024c": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_putImageData_b290181a4e24024c"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_key_bffba853df33d643": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_key_bffba853df33d643"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_308a7fa689ff20ef": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_308a7fa689ff20ef"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_fe8c60ee753fcbd0": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_width_fe8c60ee753fcbd0"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_568dfd10a534fefd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_setwidth_568dfd10a534fefd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_height_144b34836e4e98e5": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_height_144b34836e4e98e5"](p0i32);
/******/ 					},
/******/ 					"__wbg_setheight_f95890a4f65f1ed9": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_setheight_f95890a4f65f1ed9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getContext_554fc171434d411b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_getContext_554fc171434d411b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_20c04382b27a4486": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_call_20c04382b27a4486"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_bfddd41728ab0b9c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_newnoargs_bfddd41728ab0b9c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_944d201f31e01c91": function() {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_self_944d201f31e01c91"]();
/******/ 					},
/******/ 					"__wbg_window_993fd51731b86960": function() {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_window_993fd51731b86960"]();
/******/ 					},
/******/ 					"__wbg_globalThis_8379563d70fab135": function() {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_globalThis_8379563d70fab135"]();
/******/ 					},
/******/ 					"__wbg_global_073eb4249a3a8c12": function() {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_global_073eb4249a3a8c12"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_985803c87989344b": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_buffer_985803c87989344b"](p0i32);
/******/ 					},
/******/ 					"__wbg_length_32e166b42b85060a": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_length_32e166b42b85060a"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_b7e3d6adc8b9377a": function(p0i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_new_b7e3d6adc8b9377a"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_66e888cef8f00a73": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbg_set_66e888cef8f00a73"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper66": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_closure_wrapper66"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper64": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rustendo_bg.js"].exports["__wbindgen_closure_wrapper64"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/rustendo_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/rustendo_bg.wasm":"f4bcac8f80cd24498737"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });