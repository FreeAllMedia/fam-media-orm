define(['../scripts/fam.artist.js'], function(FamArtist){

  describe('FamArtist', function(){

    var artist;

    beforeEach(function(){
      artist = new FamArtist();
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
