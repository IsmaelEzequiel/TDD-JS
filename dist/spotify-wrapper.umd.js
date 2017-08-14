(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var AUTH_TOKEN = 'BQB4dbyp8_AasI4QkWG2F-chmCNszxQnCCcOOH3VURWTj5sEO_9Iamf8tH-yafW-AZYCDVBJJSllAqY1VR8Cg7AKqNnNAQ9c4d4FPu5QNUnFG-CoYrNme164MNSHeysVWa0lMes0Od3LCWBJpz8M0LrwK2ykXIK6dmSKu78A43uZhHMqv577grzLw9o1aiPQdi6Os_TxQxD-YqKFFCknLEk-rJp1hJNfvoICD6Bfr0B2FQVDDKapRaP4I1g_ZVqU1f2QTp7Q-89WNLzLbtt15jaf4EIuvYmlrZ1MJ0344C75YlY2qvWp1SSngtw35i9NuRE';

var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

var HEADERS = exports.HEADERS = {
    headers: {
        'Authorization': 'Bearer ' + AUTH_TOKEN
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = exports.toJSON = function toJSON(data) {
  return data.json();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(3);

var _album = __webpack_require__(4);

module.exports = {
    search: _search.search,
    searchAlbum: _search.searchAlbum,
    searchArtist: _search.searchArtist,
    searchTrack: _search.searchTrack,
    searchPlaylist: _search.searchPlaylist,
    getAlbum: _album.getAlbum,
    getAlbums: _album.getAlbums,
    getAlbumsTracks: _album.getAlbumsTracks
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPlaylist = exports.searchTrack = exports.searchAlbum = exports.searchArtist = exports.search = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

var search = exports.search = function search(query, type) {
    return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _utils.HEADERS).then(_utils.toJSON);
};

var searchArtist = exports.searchArtist = function searchArtist(query, type) {
    return search(query, 'Artist');
};

var searchAlbum = exports.searchAlbum = function searchAlbum(query) {
    return search(query, 'album');
};

var searchTrack = exports.searchTrack = function searchTrack(query) {
    return search(query, 'track');
};

var searchPlaylist = exports.searchPlaylist = function searchPlaylist(query) {
    return search(query, 'playlist');
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

var getAlbum = exports.getAlbum = function getAlbum(albumId) {
    return fetch(_config.API_URL + '/albums/' + albumId, _utils.HEADERS).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(albumsId) {
    return fetch(_config.API_URL + '/albums?ids=' + albumsId, _utils.HEADERS).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(tracksId) {
    return fetch(_config.API_URL + '/albums/' + tracksId + '/tracks', _utils.HEADERS).then(_utils.toJSON);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map