import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import { search, searchPlaylist, searchTrack, searchAlbum, searchArtist } from '../src/search';

describe('General test', () => {
    let fetchStub;
    let promise;

    beforeEach( () => {
        fetchStub = sinon.stub(global, 'fetch');
        promise = fetchStub.returnsPromise();
    });

    afterEach( () => {
        fetchStub.restore();
    });

    describe('Smock tests:', () => {
        it('function search must exist', () => {
            expect(search).to.exist;
        });

        it('function searchAuthor must exist', () => {
            expect(searchArtist).to.exist;
        });
        
        it('function searchAlbum must exist', () => {
            expect(searchAlbum).to.exist;
        });
        
        it('function searchTrack must exist', () => {
            expect(searchTrack).to.exist;
        });
        
        it('function searchPlaylist must exist', () => {
            expect(search).to.exist;
        });
    });

    describe('Generic tests', () => {
        
        it('should call fetch function', () => {
            const artist = search();
            expect(fetchStub).to.have.been.calledOnce;
        });
        
        it('should receive the correct url to fetch', () => {
            context('passing one type', () => {
                const artist = search('Nirvana', 'Artist');
                expect(fetchStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=Artist');        

                const albums = search('Nirvana', 'Album');
                expect(fetchStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=Album');
            });

            context('passing multiple types', () => {
                const artistAndAlbum = search('Nirvana', ['artist', 'albums']);
                expect(fetchStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=artist,albums');
            });
        });

        it('should return the json data from the promise', () => { 
            promise.resolves({body:'json'});
            const artist = search('Nirvana', 'artist');

            expect(artist.resolveValue).to.be.eql({body:'json'});
        });
    });

    describe('Search artist', () => {
        it('should call fetch function', () => {
            const artist = searchArtist(); 
            expect(fetchStub).to.have.been.calledOnce;    
        });

        it('should fetch the correct url', () => {
            const artist = searchArtist('Nirvana');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=artist');

            const artist2 = searchArtist('Muse');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
        });
    });

    describe('Search album', () => {
        it('should call fetch function', () => {
            const album = searchAlbum(); 
            expect(fetchStub).to.have.been.calledOnce;    
        });

        it('should fetch the correct url', () => {
            const album = searchAlbum('Nirvana');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=album');

            const album2 = searchAlbum('Muse');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
        });
    });

    describe('Search playlist', () => {
        it('should call fetch function', () => {
            const playlist = searchPlaylist(); 
            expect(fetchStub).to.have.been.calledOnce;    
        });

        it('should fetch the correct url', () => {
            const Playlist = searchPlaylist('Nirvana');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=playlist');

            const Playlist2 = searchPlaylist('Muse');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
        });
    });

    describe('Search track', () => {
        it('should call fetch function', () => {
            const track = searchTrack(); 
            expect(fetchStub).to.have.been.calledOnce;    
        });

        it('should fetch the correct url', () => {
            const track = searchTrack('Nirvana');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=track');

            const track2 = searchTrack('Muse');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
        });
    });
});















