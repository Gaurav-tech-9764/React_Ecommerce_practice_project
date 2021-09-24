import react from "react";
import { Link } from "react-router-dom";
import Directory from "../Components/directory/Directory";
import "./homepage.styles.scss"


const Homepage = (props) => {
    console.log("homepage",props)
    return(
        <div className="homepage">
     
        <Directory></Directory>
     </div>
    )

}

  

 

export default Homepage