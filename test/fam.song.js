define(['../scripts/fam.song.js'], function(FamSong){

  describe('FamSong', function(){

    var song;

    beforeEach(function(){
      song = new FamSong({id: 1});
    });

    describe('resourcePath', function(){
      it('should be set to /artists', function(){
        expect(song.resourcePath).to.eql('/songs');
      });
    });

    describe('jsonRoot', function(){
      it('should be set to playlist', function(){
        expect(song.jsonRoot).to.eql('song');
      });
    });

    describe('resourceUrl', function(){
      it('should be set to /albums/1', function(){
        expect(song.resourceUrl()).to.eql('/songs/1');
      });
    });

    describe('inhereting', function(){
      it('should have the fam model functions', function(){
        expect(song).to.have.property('save');
        expect(song).have.property('fetch');
        expect(song).have.property('get');
        expect(song).have.property('destroy');
        expect(song).have.property('set');
      });

    });

  });
});
