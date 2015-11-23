const assert = require('assert')

describe('Trails Application', () => {

  it('is running', () => {
    assert.ok(global.trails)
    assert(global.trails.state.initialized)
  })

})
