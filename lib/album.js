'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils.js');

var getAlbum = exports.getAlbum = function getAlbum(albumId) {
    return fetch(_config.API_URL + '/albums/' + albumId, _utils.HEADERS).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(albumsId) {
    return fetch(_config.API_URL + '/albums?ids=' + albumsId, _utils.HEADERS).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(tracksId) {
    return fetch(_config.API_URL + '/albums/' + tracksId + '/tracks', _utils.HEADERS).then(_utils.toJSON);
};