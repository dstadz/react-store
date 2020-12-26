import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { collectionState } from '../../utils/store';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase/firebase'

import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview'
import CollectionPage from '../CollectionPage/CollectionPage'
import WithSpinner from '../../Components/Spinner/WithSpinner'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

const Shop = ({ match, props }) => {
// console.log(match)
  const setCollections = useSetRecoilState(collectionState)
  const [isLoading, setIsLoading] = useState(true)

  const getCollections = async() => {
    const collectionRef = firestore.collection('collections');
    await collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      setCollections(collectionsMap)
    });
    setIsLoading(false);
  }

  useEffect(() => { getCollections() }, [])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props =>
          <CollectionsOverviewWithSpinner
            isLoading={isLoading}
            {...props}
          />
        }
      />

      <Route
      path={`${match.path}/:collectionId`}
      render={() =>
        <CollectionsPageWithSpinner
          isLoading={isLoading}
          {...props}
          />
        }
      />
    </div>
  )
}

export default Shop
