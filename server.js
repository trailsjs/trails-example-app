/**
 * Trails App Server
 *
 * This file is generated. We strongly recommend that you do not edit it.
 */
process.env.NODE_ENV || (process.env.NODE_ENV = 'development')

const TrailsApp = require('trails-app')
const App = require('./')
const app = new TrailsApp(App)

app.start().catch(app.stop)
