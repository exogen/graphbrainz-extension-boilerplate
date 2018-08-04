const gql = require('graphbrainz/lib/tag').default;

module.exports = gql`
  extend type Artist {
    """
    A message that says hello to the artist.
    """
    helloWorld: String!
  }
`;
