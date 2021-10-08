import React, { Component, useState } from "react"
import "../redux.css"


const ReactHooks =() => {

    const [name, setName] = useState("Gaurav")      ///we can use Usestae as many times as wre want
    const [Address, setAddress] = useState("India")

    return(
        <>
        <div className="App">
        <h1>This is An Sample Test Hook</h1>
      <div className="card">
          <h1>{name}</h1>
          <button onClick={()=>setName("Nakhale")} className="button">Channge Name To Nakhale</button>
      <h1>{Address}</h1>
                 <button onClick={()=>setAddress("Amravti")} className="button">Channge Address To Amravati</button>
            </div>

      </div>
      <div className="App">
        <h1>This is An Sample Test useEffect Hook</h1>
      <div className="card">
         
      </div>
      </div>
</>
    )
       

    

}

////This is the Conversion On Class component To functional Component With React Hooks

// export class ReactHooks extends Component {
//     constructor(){
//         super()
//             this.state ={
//                 name: "Gaurav",
//                 Address:"India"
            
//         }
//     }

//     render(){

//         return(
//             <div className="App">
//               <h1>This is An Sample Test Hook</h1>
//             <div className="card">
//                 <h1>{this.state.name}</h1>
//                 <button onClick={()=>this.setState({name:"Nakhale"})} className="button">Channge Name To Nakhale</button>
//             </div>
//                 <div className="card" >
// //                 <h1>{this.state.Address}</h1>
// //                 <button onClick={()=>this.setState({Address:"Amravti"})} className="button">Channge Address To Amravati</button>
// //             </div>
//             </div>

//         )
//     }
// }

export default ReactHooks