/**
 * Trails Core Configuration
 * (app.config)
 */
exports.env = require('./env')
exports.log = require('./log')
exports.trailpack = require('./trailpack')

/**
 * Addon Configuration
 */
exports.db = require('./db')
exports.footprints = require('./footprints')
exports.routes = require('./routes')
exports.server = require('./server')
exports.session = require('./session')
exports.views = require('./views')
exports.webpack = require('./webpack')
