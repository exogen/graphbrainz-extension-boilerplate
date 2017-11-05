/**
 * Build schema documentation into the README.
 */
const path = require('path')
const { graphql, introspectionQuery } = require('graphql')
const { default: baseSchema, createSchema } = require('graphbrainz/lib/schema')
const { updateSchema, diffSchema } = require('graphql-markdown')
const extension = require('../src')

const baseSchemaURL = 'https://github.com/exogen/graphbrainz/docs/types.md'
const schema = createSchema(baseSchema, { extensions: [extension] })

function getSchemaJSON(schema) {
  return graphql(schema, introspectionQuery).then(result => result.data)
}

Promise.all([getSchemaJSON(baseSchema), getSchemaJSON(schema)])
  .then(([baseSchemaJSON, schemaJSON]) => {
    const outputSchema = diffSchema(baseSchemaJSON, schemaJSON, {
      processTypeDiff(type) {
        if (type.description === undefined) {
          type.description = `:small_blue_diamond: *This type has been extended.
See the [base schema](${baseSchemaURL}) for a description and additional fields.*`
        }
        return type
      }
    })
    const outputPath = path.resolve(__dirname, '../README.md')
    return updateSchema(outputPath, outputSchema, {
      unknownTypeURL: baseSchemaURL,
      headingLevel: 2
    })
  })
  .catch(err => {
    console.log('Error:', err)
  })
