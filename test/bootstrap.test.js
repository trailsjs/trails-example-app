const Trails = require('trails-core')
const App = require('../')

before(() => {
  return Trails.configure(App.config, App.pkg)
    .initialize(App.api)
    .then(app => {
      global.trails = app
      return app.start()
    })
    .catch(err => {
      global.trails.log.error(err)
      return global.trails.stop()
    })
})

after(() => {
  return global.trails.stop()
})
