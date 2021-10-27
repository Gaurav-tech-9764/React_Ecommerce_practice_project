import React, { Profiler }  from "react";

import Directory from "../../Components/directory/Directory";
import HomePageStyles from "./HomePage.styles";



const Homepage = (props) => {
 
    return(
        <HomePageStyles>
     <Profiler id ="Directory" onRender= {(id, phase, actulDureation)=>{
         console.log(id,phase,actulDureation)
     }}>
        <Directory/>
        </Profiler>
     </HomePageStyles>
    )

}

  

 

export default Homepage