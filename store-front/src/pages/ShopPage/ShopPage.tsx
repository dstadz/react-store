import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview'
import CollectionPage from '../CollectionPage/CollectionPage'

const Shop = ({ match }) => {
// console.log(match)
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`}
      // render={() => <CollectionPage  {...collection}/>}
      component={CollectionPage}
      />
    </div>
  )
}

export default Shop
