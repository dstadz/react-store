import React from 'react'
import { Query, QueryResult } from 'react-apollo';
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
    {({ loading, error, data }: QueryResult<any, Record<string, any>>): JSX.Element => {
      if (loading) return <Spinner/>
      console.log(data)
      return <CollectionOverview collections={data.collections} />
    }}
  </Query>
)

export default CollectionOverviewContainer
