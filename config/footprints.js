/**
 * Footprints Configuration
 * (trails.config.footprints)
 *
 * Footprints are routes that are auto-generated from your model and controller
 * definitions in api/controllers and api/models.
 *
 * @see http://trailsjs.io/doc/config/footprints.js
 */
module.exports = {

  /**
   * Generate routes for controller handlers.
   */
  controllers: true,

  /**
   * Generate conventional Create, Read, Update, and Delete (CRUD) routes for
   * each Model.
   */
  models: {
    defaultLImit: 100,

    create: true,
    find: true,
    update: true,
    destroy: true,

    /**
     * Whether to populate all model associations by default (for "find"
     * and "findOne")
     */
    populate: true,

    /**
     * Specify which "association" endpoints to bind.
     */
    createAssociation: true,
    findAssociation: true,
    updateAssociation: true,
    destroyAssociation: true

    /**
     * Subscribe to changes on requested models via WebSocket
     */
    watch: false
  },

  /**
   * Prefix your footprint routes
   */
  prefix: '/api/v1'
}
