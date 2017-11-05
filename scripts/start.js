/**
 * Run a demo server with the extension enabled.
 */
const start = require('graphbrainz').start
const extension = require('../src')

start({ extensions: [extension] })
