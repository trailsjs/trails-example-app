/**
 * Logging Configuration
 * (trails.config.log)
 *
 * @see http://trailsjs.io/doc/config/log.js
 */
const winston = require('winston')

module.exports = {

  /**
   * Specify the logger to use
   * @see https://github.com/trailsjs/trails-logging for supported loggers
   */
  logger: 'winston',

  /**
   * Set the log level/severity, where the logging output should go, etc.
   */
  options: {
    level: 'debug',
    transports: [
      new (winston.transports.Console)()
    ]
  }

}
