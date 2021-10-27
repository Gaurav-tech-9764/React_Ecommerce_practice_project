import React from "react"
import { useHistory} from "react-router-dom"
import "./menu-item.styles.scss"
import { useRouteMatch } from "react-router"

const MenuItems = ({title , imageUrl, size , linkUrl}) =>{ 
    const {url} = useRouteMatch()
    const history = useHistory()
    
  
    return(


<div className={`${size} menu-item`} onClick={() => history.push(`${url}${linkUrl}`)}>
<div  style={{backgroundImage:`url(${imageUrl})`}} className="background"/>
    <div className="content">
    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">Shop Now</span>
</div>

</div>
)}

export default MenuItems