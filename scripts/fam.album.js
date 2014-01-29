define([
  "require",
  "fam.model"
], function (require, FAMModel) {

  "use strict";

  /**
   * Provides an ORM interface for the FAM music albums. Can use Reliable Data Transport to associate model with remote resource.
   * @class FAMAlbum
   * @constructor
   * @param {Object.<string, *>} [options] passes options to the constructor.
   * @param {FAMRDT} [options.rdt] If using FAM Reliable Data Transport (FAMRDT) as the data source, pass the instantiated rdt object here.
   * @param {string} [options.resource_id] The id with which the Album is uniquelie identified in the remote resource
   * 
   * For more information on the available methods please view FAMModel
   */
  var FAMAlbum = FAMModel.extend({

    resource_path: "/albums"

  });

  return FAMAlbum;


});
