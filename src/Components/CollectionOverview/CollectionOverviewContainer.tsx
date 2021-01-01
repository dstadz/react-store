import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionOverview from './CollectionOverview'
import Spinner from '../Spinner/Spinner'

const GET_COLLECTIONS = gql`
{
  collections {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`




const CollectionOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner/>
      return <CollectionOverview collections={data.collections} />
    }}
  </Query>
)

export default CollectionOverviewContainer
