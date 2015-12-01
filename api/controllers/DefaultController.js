
/**
 * DefaultController
 *
 * @description Default Controller included with a new Trails app
 */
module.exports = {

  /**
   * Return some info about this application
   */
  info (request, reply) {
    reply(this.api.services.DefaultService.getApplicationInfo())
  }
}
