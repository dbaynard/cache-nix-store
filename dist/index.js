module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/@vercel/ncc@0.27.0/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/cache
var cache = __nccwpck_require__(959);
var cache_default = /*#__PURE__*/__nccwpck_require__.n(cache);

// EXTERNAL MODULE: ./node_modules/.pnpm/@vercel/ncc@0.27.0/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(123);
var core_default = /*#__PURE__*/__nccwpck_require__.n(core);

// EXTERNAL MODULE: ./node_modules/.pnpm/@vercel/ncc@0.27.0/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/exec
var exec = __nccwpck_require__(653);
var exec_default = /*#__PURE__*/__nccwpck_require__.n(exec);

// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");;
// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__nccwpck_require__.n(external_path_namespaceObject);

// CONCATENATED MODULE: ./src/main.js






const key = core_default().getInput('key', { required: true})

async function myexec(script, args) {
  var srcDir = external_path_default().dirname(__filename)
  await exec_default().exec(external_path_default().join(srcDir, script), args)
}

function printInfo(s) {
  console.log('\x1b[34m', s, '\x1b[0m')
}

const paths = [
  '/nix/store/',
  '/nix/var/nix/profiles/per-user/' + process.env.USER + '/profile/bin',
  '/nix/var/nix/profiles/default/bin/',
  '/nix/var/nix/profiles/per-user/root/channels'
]

async function restoreCache() {
  // TODO: Parse restorekeys from input.
  printInfo('Restoring cache for key: ' + key)
  const restoreKeys = []
  const cacheKey = cache_default().restoreCache(paths, key, restoreKeys)
  if (cacheKey === undefined) {
    printInfo('No cache found for given key')
  } else {
    printInfo('Cache restored')
  }
  return cacheKey
}

async function prepareSave(cacheKey) {
  if (cacheKey === undefined) {
    printInfo('Preparing save')
    await myexec('core.sh', ['prepare-save'])
  }
}

async function saveCache(cacheKey) {
  if (cacheKey === undefined) {
    printInfo('Saving cache with key: ' + key)
    await cache_default().saveCache(paths, key)
  }
}

async function installWithNix(cacheKey) {
  if (cacheKey === undefined) {
    printInfo('Installing with Nix')
    await myexec('core.sh', ['install-with-nix'])
  } else {
    printInfo('Installing from cache')
    await myexec('core.sh', ['install-from-cache'])
  }
}

(async function run() {
  printInfo('Preparing restore')
  await myexec('core.sh', ['prepare-restore'])

  const cacheKey = await restoreCache()

  await installWithNix(cacheKey)

  await prepareSave(cacheKey)

  await saveCache(cacheKey)

// Run the async function and exit when an exception occurs.
})().catch(e => { console.error(e); process.exit(1) })


/***/ }),

/***/ 959:
/***/ ((module) => {

module.exports = eval("require")("@actions/cache");


/***/ }),

/***/ 123:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 653:
/***/ ((module) => {

module.exports = eval("require")("@actions/exec");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(446);
/******/ })()
;