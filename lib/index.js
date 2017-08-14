'use strict';

var _search = require('./search');

var _album = require('./album');

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