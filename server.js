const TrailsApp = require('trails-app')
const App = require('./')
const app = new TrailsApp(App)

app.start().catch(app.stop)
