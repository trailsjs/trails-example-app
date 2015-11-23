/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */
module.exports = {

  /**
   * Render the HelloWorld view
   */
  'GET /': {
    view: 'HelloWorld'
  },

  /**
   * Execute the DefaultController.info handler
   */
  'GET /trailsinfo': {
    controller: 'DefaultController',
    handler: 'info'
  }
}
