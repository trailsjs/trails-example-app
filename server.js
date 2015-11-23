const Trails = require('trails-core')
const App = require('./')

Trails.configure(App.config, App.pkg)
  .initialize(App.api)
  .then(app => {
    global.trails = app
    return app.start()
  })
  .catch(err => {
    app.log.error(err)
    return app.stop()
  })
