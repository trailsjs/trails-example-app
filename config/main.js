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
    require('trails-smokesignals').Trailpack,
    //require('trailpack-core'),
    //require('trailpack-repl'),
    //require('trailpack-router'),
    require('trailpack-waterline'),
  /*
    */
  ],

  paths: {
    root: __dirname + '../'
  }
}
