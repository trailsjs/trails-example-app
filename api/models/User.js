'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description User account object
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema () {
    return {
      username: {
        type: 'string'
      },
      tokens: {
        collection: 'WebToken',
        via: 'user'
      }
    }
  }
}
