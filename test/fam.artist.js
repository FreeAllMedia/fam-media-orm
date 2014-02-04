define(['../scripts/fam.artist.js'], function(FamArtist){

  describe('FamArtist', function(){

    var artist;

    beforeEach(function(){
      artist = new FamArtist({id: 1});
    });

    describe('resourcePath', function(){
      it('should be set to /artists', function(){
        expect(artist.resourcePath).to.eql('/artists');
      });
    });

    describe('jsonRoot', function(){
      it('should be set to album', function(){
        expect(artist.jsonRoot).to.eql('artist');
      });
    });

    describe('resourceUrl', function(){
      it('should be set to /albums/1', function(){
        expect(artist.resourceUrl()).to.eql('/artists/1');
      });
    });

    describe('inhereting', function(){
      it('should have the fam model functions', function(){
        expect(artist).to.have.property('save');
        expect(artist).have.property('fetch');
        expect(artist).have.property('get');
        expect(artist).have.property('destroy');
        expect(artist).have.property('set');
      });

    });


  });
});
