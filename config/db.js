/**
 * Database Configuration
 * (trails.config.db)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see http://trailsjs.io/doc/config/database.js
 */
module.exports = {

  /**
   * Specify the ORM layer to use
   */
  orm: 'waterline',

  defaultStore: 'localStorage',

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    /**
     * Define a store called "local" which uses SQLite3 to persist data.
     */
    local: {
      adapter: 'waterline-sqlite3',
      migrate: 'alter'
    }

  }
}
