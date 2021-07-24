const { gql } = require("apollo-server");
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)

  type Query {
    characters: [Character]
    episodes: [Episode]
    character(id: ID!): Character
    episode(id: ID!): Episode
  }

  type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    episodes: [Episode]
  }

  type Episode {
    id: ID
    name: String
    air_date: String
    episode: String
    characters: [Character]
    created: String
  }
`;
