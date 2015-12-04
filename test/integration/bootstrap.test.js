const Trails = require('trails')
const App = require('../../')
global.app = new Trails(App)

before(() => {
  return global.app.start().catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})
