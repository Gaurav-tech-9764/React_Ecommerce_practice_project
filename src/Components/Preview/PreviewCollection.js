import React from "react";
import CollectionItems from "../Collection-item/CollectionItems";
import "./PreviewCollection.Styles.scss";



const PreviewCollection = ({title, items}) => {

return(

<div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
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

export default PreviewCollection