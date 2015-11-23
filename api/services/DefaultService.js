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
      trails: trails.version,
      trailpacks: trails.trailpacks,
      process: process.versions
    }
  }

}
