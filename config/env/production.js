module.exports = {

  trailpacks: {
    disableTrailpacks: [
      'trailpack-repl'
    ]
  },

  log: {
    logger: new winston.Logger({
      level: 'info',
      exitOnError: false,
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          level: 'info',
          filename: 'trails-info.log'
        })
        new winston.transports.File({
          level: 'error',
          filename: 'trails-error.log'
        })
      ]
    })
  }

}
