import React from "react";
import { withRouter } from "react-router";
import CollectionItems from "../Collection-item/CollectionItems";
import "./PreviewCollection.Styles.scss";



const PreviewCollection = ({title, items, history, match, routeName}) => {
console.log("inpre",match)
return(

<div className="collection-preview">
    <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
        {
            items.filter((item , idx)=> idx <4 ).map(item=> (
                <CollectionItems key={item.id} item={item}/>
            )
          
            )
        }


        </div>
</div>
)


}

export default withRouter(PreviewCollection)