define(['../scripts/fam.album.js'], function(FamAlbum){

  describe('FamAlbum', function(){
    var album;

    beforeEach(function(){
      album = new FamAlbum();
    });

    describe('inhereting', function(){
      it('should have the fam model functions', function(){
        expect(album).to.have.property('save');
        expect(album).have.property('fetch');
        expect(album).have.property('get');
        expect(album).have.property('destroy');
        expect(album).have.property('set');
      });

    });

  });
});
