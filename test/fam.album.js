define(['../scripts/fam.album.js'], function(FamAlbum){

  describe('FamAlbum', function(){
    var album;

    beforeEach(function(){
      album = new FamAlbum({id: 1});
    });

    describe('resourcePath', function(){
      it('should be set to /albums', function(){
        expect(album.resourcePath).to.eql('/albums');
      });
    });

    describe('jsonRoot', function(){
      it('should be set to album', function(){
        expect(album.jsonRoot).to.eql('album');
      });
    });

    describe('resourceUrl', function(){
      it('should be set to /albums/1', function(){
        expect(album.resourceUrl()).to.eql('/albums/1');
      });
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
