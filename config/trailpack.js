/**
 * Trailpack Configuration
 * (trails.config.trailpack)
 *
 * @see http://trailsjs.io/doc/config/trailpack.js
 */
module.exports = {

  /**
   * Order does *not* matter. Each module is loaded according to its own requirements.
   */
  packs: [
    require('trailpack-core'),
    require('trailpack-repl')
  ],

  paths: {
    root: `${__dirname}/..`
  }

}
