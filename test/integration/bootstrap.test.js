const TrailsCore = require('trails-core')
const App = require('../../')
const core = new TrailsCore()

before(done => {
  return core
    .configure(App.config, App.pkg)
    .then(() => core.initialize(App.api))
    .then(app => {
      return app.start()
    })
    .catch(err => {
      done(err)
      global.app.log.error(err)
      return global.app.stop()
    })
})

after(() => {
  return global.app.stop()
})
