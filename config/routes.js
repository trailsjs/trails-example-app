/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */
module.exports = [

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: 'GET',
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }
]
