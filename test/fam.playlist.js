define(['../scripts/fam.playlist.js'], function(FamPlaylist){

  describe('FamPlaylist', function(){

    var playlist;

    beforeEach(function(){
      playlist = new FamPlaylist();
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
