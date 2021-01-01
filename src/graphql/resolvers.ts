import { gql } from 'apollo-boost'

export const typeDefs = gql`
  extend type Mutation {
    toggleCartHidden: Boolean!
  }
`

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) => {
      
    }
  }
}