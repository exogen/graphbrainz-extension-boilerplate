const schema = require('./schema')
const resolvers = require('./resolvers')

module.exports = {
  name: 'Boilerplate',
  description: 'A boilerplate extension, change me!',
  extendContext(context, options) {
    return context
  },
  extendSchema: {
    schemas: [schema],
    resolvers
  }
}
