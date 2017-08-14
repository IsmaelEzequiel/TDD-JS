import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { getAlbum, getAlbumTracks, getAlbums } from '../src/album.js';

describe('Album', () => {
    let fetchStub;
    let promise;

    beforeEach ( () =>  {
        fetchStub = sinon.stub(global, 'fetch');
        promise = fetchStub.returnsPromise();
    });

    afterEach ( () => {
        fetchStub.restore();
    }); 

    describe('Smoke test', () => {
        it('getAlbum should exist', () => {
            expect(getAlbum).to.exist;
        });

        it('getAlbums', () => {
            expect(getAlbums).to.exist;
        });

        it('getAlbumTracks should exist', () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('sould call a fetch method', () => {
            const album = getAlbum();
            expect(fetchStub).to.have.been.calledOnce;
        }) ;

        it('should call the correct url', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

             const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTajsd');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTajsd');
        });

        it('should return the correct datas', () => {
            promise.resolves({album: 'album'});
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolveValue).to.be.eql({album: 'album'});
        });
    });

    describe('getAlbums', () => {
        it('sould call a fetch method', () => {
            const albums = getAlbums();
            expect(fetchStub).to.have.been.calledOnce;
        }) ;

        it('should call the correct url', () => {
            const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTy']);
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTy');
            
            const album2 = getAlbums(['4aawyAB9vmqN3uQ7FjRGrr','4aawyAB9vmqN3uQ7FjRGcc']);
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGrr,4aawyAB9vmqN3uQ7FjRGcc');
        });

        it('should return the correct datas', () => {
            promise.resolves({album: 'album'});
            const albums = getAlbums('4aawyAB9vmqN3uQ7FjRGTy');
            expect(albums.resolveValue).to.be.eql({album: 'album'});
        });
    });

    describe('getAlbumTrack', () => {
        it('sould call a fetch method', () => {
            const track = getAlbumTracks();
            expect(fetchStub).to.have.been.calledOnce;
        }) ;

        it('should call the correct url', () => {
            const track = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

             const track2 = getAlbumTracks('s4aawyAB9vmqN3uQ7FjRGTajsd');
            expect(fetchStub).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/s4aawyAB9vmqN3uQ7FjRGTajsd/tracks');
        });

        it('should return the correct datas', () => {
            promise.resolves({album: 'album'});
            const track = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(track.resolveValue).to.be.eql({album: 'album'});
        });
    });
});