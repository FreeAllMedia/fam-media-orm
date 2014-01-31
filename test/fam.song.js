define(['../scripts/fam.song.js'], function(FamSong){

  describe('FamSong', function(){

    var song;

    beforeEach(function(){
      song = new FamSong();
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
