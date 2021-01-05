import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { collectionState } from '../../utils/store';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase/firebase'

// import CollectionOverviewContainer from '../../Components/CollectionOverview/CollectionOverviewContainer'
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview'
import CollectionPage from '../CollectionPage/CollectionPage'
import WithSpinner from '../../Components/Spinner/WithSpinner'


const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

const Shop = ({ match, props }) => {
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
      <Route exact path={`${match.path}`} component={CollectionOverview} />

      <Route path={`${match.path}/:collectionId`}
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
      
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
export default Shop