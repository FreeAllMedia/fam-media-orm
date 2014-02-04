define(['../scripts/fam.playlist.js'], function(FamPlaylist){

  describe('FamPlaylist', function(){

    var playlist;

    beforeEach(function(){
      playlist = new FamPlaylist({id: 1});
    });

    describe('resourcePath', function(){
      it('should be set to /artists', function(){
        expect(playlist.resourcePath).to.eql('/playlists');
      });
    });

    describe('jsonRoot', function(){
      it('should be set to playlist', function(){
        expect(playlist.jsonRoot).to.eql('playlist');
      });
    });

    describe('resourceUrl', function(){
      it('should be set to /albums/1', function(){
        expect(playlist.resourceUrl()).to.eql('/playlists/1');
      });
    });

    describe('inhereting', function(){
      it('should have the fam model functions', function(){
        expect(playlist).to.have.property('save');
        expect(playlist).have.property('fetch');
        expect(playlist).have.property('get');
        expect(playlist).have.property('destroy');
        expect(playlist).have.property('set');
      });

    });

  });
});
