/**
 * Run a demo server with the extension enabled.
 */
const { start } = require('graphbrainz')
const extension = require('../src')

start({ extensions: [extension] })
