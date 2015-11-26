/**
 * Footprints Configuration
 * (trails.config.footprints)
 *
 * Footprints are routes that are auto-generated from your models and controllers.
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
    create: true,
    find: true,
    update: true,
    destroy: true,

    /**
     * Automatically populate all model associations
     */
    populate: true,


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
