const TrailsApp = require('trails-app')
const App = require('../../')
const app = new TrailsApp(App)


before(done => {
  return app.start().catch(app.stop)
})

after(() => {
  return global.app.stop()
})
