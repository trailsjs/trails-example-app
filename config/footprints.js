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
  handlers: true,

  /**
   * Generate conventional Create, Read, Update, and Delete (CRUD) routes for
   * each Model.
   */
  rest: true,

  /**
   * Prefix your footprint routes
   */
  prefix: '/api',

  /**
   * Automatically populate all model associations
   */
  populate: true
}
