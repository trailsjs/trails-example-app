/**
 * Trailpack Configuration
 * (app.config.main)
 *
 * @see http://trailsjs.io/doc/config/main
 */
module.exports = {

  /**
   * Order does *not* matter. Each module is loaded according to its own requirements.
   */
  packs: [
    require('trailpack-core'),
    require('trailpack-repl'),
    require('trailpack-waterline'),
    require('trailpack-hapi'),
    require('trailpack-router')
  ],

  paths: {
    root: __dirname + '../'
  }
}
