import React, { Component } from "react"
import PreviewCollection from "../../Components/Preview/PreviewCollection";
import ShopData from "./ShopData";


class Shop extends Component{

    constructor(props){
        super(props);

        this.state = {

            collection :ShopData

        }

    }
    render(){
        const {collection} = this.state
        return(

            <div className="shop-page">

                {

                    collection.map(({id, ...othercollectionProps}) => (

                    <PreviewCollection key={id} {...othercollectionProps}/>
                    ))
                }
            </div>
        )
    }
    
}
export default Shop