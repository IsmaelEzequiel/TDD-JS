'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPlaylist = exports.searchTrack = exports.searchAlbum = exports.searchArtist = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils.js');

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