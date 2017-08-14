import { HEADERS, API_URL } from './config'; 
import { toJSON } from './utils.js'

export const search = (query, type) => 
    fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then( toJSON )

export const searchArtist = (query) => 
    search(query, 'artist');

export const searchAlbum = (query) => 
    search(query, 'album');

export const searchTrack = (query) => 
    search(query, 'track');

export const searchPlaylist = (query) => 
    search(query, 'playlist');
