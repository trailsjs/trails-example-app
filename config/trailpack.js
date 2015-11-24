/**
 * Trailpack Configuration
 * (trails.config.trailpack)
 *
 * @see http://trailsjs.io/doc/config/trailpack.js
 */
module.exports = {

  /**
   * The core pack for this application. Different core packs can be used to
   * load different kinds of applications, e.g. 'trailpack-core-sails'
   */
  core: require('trailpack-core'),

  /**
   * Order does *not* matter
   */
  packs: [
    require('trailpack-repl')
  ],

  paths: {
    root: `${__dirname}/..`
  }

}
