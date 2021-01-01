import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionPage from './CollectionPage'
import Spinner from '../../Components/Spinner/Spinner'


const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title:String!) {
    getCollectionsByTitle(title:$title) {
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



const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner/>
      const { getCollectionsByTitle } = data
      return <CollectionPage collection={getCollectionsByTitle} />
    }}
  </Query>
)


export default CollectionPageContainer