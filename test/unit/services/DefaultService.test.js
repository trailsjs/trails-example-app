const assert = require('assert')
const DefaultService = require('../../../api/services/DefaultService')

/**
 * DefaultService Unit Tests
 */
describe('DefaultService', () => {
  it('should exist', () => {
    assert(DefaultService)
  })

  describe('#getApplicationInfo', () => {
    it('should return application info', () => {
      const info = DefaultService.getApplicationInfo({ })

      assert(info)
    })
  })
})
