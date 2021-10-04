import React from "react";
import './Collection.Styles.scss'
import CollectionItems from "../../Components/Collection-item/CollectionItems";
import { connect } from "react-redux";
import { SelectDirectorySections } from "../../redux/Directory-redux/DirectorySelector";
import { SelectCollection } from "../../redux/Shop-redux/ShopSelector";


const CollectionPage = ({collections}) => {
  

    const {title, items} = collections
  
    console.log(collections)
    return(
        <div className="Collection-page">
           <h2 className="title">{title}</h2>
           <div className="items">
               {
                   items.map(item=> <CollectionItems key={item.id} item={item}/>)
               }
           </div>

        </div>
    )
   
}

const mapStateToProps=(state, ownProps)=>({
    collections: SelectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage)
