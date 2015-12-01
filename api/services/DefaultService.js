const _ = require('lodash')

/**
 * DefaultService
 *
 * @description Default Service included with a new Trails app
 */
module.exports = {

  /**
   * Return some info about this application
   */
  getApplicationInfo () {
    return {
      node: process.versions,
      trailpacks: _.map(_.omit(this.packs, 'inspect'), pack => {
        return {
          name: pack.name,
          version: pack.pkg.version
        }
      })
    }
    /*
    return {
      trails: this.version,
      trailpacks: this.packs,
      process: process.versions
    }
    */
  }

}
