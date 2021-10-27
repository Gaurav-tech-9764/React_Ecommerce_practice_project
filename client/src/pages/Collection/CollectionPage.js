import React from "react";
import './Collection.Styles.scss'
import CollectionItems from "../../Components/Collection-item/CollectionItems";
import {  useSelector } from "react-redux";
import { SelectCollection } from "../../redux/Shop-redux/ShopSelector";

import { useParams } from "react-router";
import { CollectionContainer, CollectionTitle, CollectionItemsContainer} from "./CollectionPage.Style";


const CollectionPage = () => {
    //cleanup function bye useeffect as componentWillUnMount()
// useEffect(()=>{
//     console.log("I am mounting")
//     const unsubcribeFromCollections = firestore.collection('collections').onSnapshot(snapshot=>console.log(snapshot))

//     return() =>{

//         console.log("I am Unmounting")
//         unsubcribeFromCollections()

//     }
// },)
const {collectionId} = useParams()
const collections = useSelector(SelectCollection(collectionId))

    const {title, items} = collections
  

    return(
       <CollectionContainer>
       <CollectionTitle>{title}</CollectionTitle>
           <CollectionItemsContainer>
           {
                   items.map(item=> <CollectionItems key={item.id} item={item}/>)
               }
            </CollectionItemsContainer>
       </CollectionContainer>
           

        
    )
   
}

// const mapStateToProps=(state, ownProps)=>({
//     collections: SelectCollection(ownProps.match.params.collectionId)(state)
// })

export default CollectionPage
