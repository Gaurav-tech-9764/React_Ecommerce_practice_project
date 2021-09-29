import React from "react";
import { withRouter } from "react-router";
import CollectionItems from "../Collection-item/CollectionItems";
import "./PreviewCollection.Styles.scss";



const PreviewCollection = ({title, items, history, match, routeName}) => {

return(

<div className="collection-preview">
    <h1 className="title" title="Click For More" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
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