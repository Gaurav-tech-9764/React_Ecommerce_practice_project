import React from "react";
import { BackgroundImage } from "../../Collection-item/CollectionItem.Styles";
import {FirstName, LastName} from "./../../../App"

const ComC = (props) => {
  

    
    return (
    
        <>
        <FirstName.Consumer>
        {(collection)=>{
            
            const {hats} =collection
            const {title, items, imageUrl} = hats
            return (<>
            <h1>{title}</h1>

            {
                   items.map(item=><> <h2 key={item.id} >{item.name}</h2>
                    <img src={item.imageUrl} alt="item"/>
</>)
               }
               </>
               
            )
        }
    }

      </FirstName.Consumer>
         
        </>
   
    )


}

export default ComC


// <LastName.Consumer>

// { (lname)=>{
//     return(
//         <h1>This is the Context from {fname} {lname}</h1>

//     )
//   } 
// }
// </LastName.Consumer>
