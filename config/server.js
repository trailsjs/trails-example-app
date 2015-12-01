/**
 * Server Configuration
 * (app.config.server)
 *
 * Configure the Web Server
 *
 * @see http://trailsjs.io/doc/config/server.js
 */
module.exports = {

  /**
   * The default web server engine used by controllers
   */
  defaultEngine: 'hapi',

  engines: {

    hapi: {
      port: process.env.PORT || 3000
    }
  }
}
