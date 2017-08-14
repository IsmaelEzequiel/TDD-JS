import { HEADERS, API_URL } from './config';
import { toJSON } from './utils.js';


export const getAlbum = (albumId) => 
    fetch(`${API_URL}/albums/${albumId}`, HEADERS).then( toJSON );

export const getAlbums = (albumsId) => 
    fetch(`${API_URL}/albums?ids=${albumsId}`, HEADERS).then( toJSON );

export const getAlbumTracks = (tracksId) =>
    fetch(`${API_URL}/albums/${tracksId}/tracks`, HEADERS).then( toJSON );