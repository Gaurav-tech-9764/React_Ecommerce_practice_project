import react, { Component } from "react";
import MenuItems from "../menu-item/menu-item";
import "./Directory.styles.scss"

class Directory extends Component{

constructor(){

    super();

    this.state = {

        sections :[
            {
              title: 'Hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'Shop/Hats'
            },
            {
              title: 'Jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'Shop/Jackets'
            },
            {
              title: 'Sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'Shop/Sneakers'
            },
            {
              title: 'Womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'Shop/Womens'
            },
            {
              title: 'Mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'Shop/Mens'
            }
          ],

           
    }


}

render(){
        return(

            <div className="directory-menu">
            {
                this.state.sections.map(({id, ...sectionsParam}) => (
                    <MenuItems key={id} {...sectionsParam}/>
                ))
            }

            </div>
        )

    }

} 

export default Directory;