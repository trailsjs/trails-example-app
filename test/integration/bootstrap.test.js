const TrailsApp = require('trails')
const App = require('./app')
const app = new TrailsApp(App)

before(done => {
  return app.start().catch(app.stop)
})

after(() => {
  return global.app.stop()
})
