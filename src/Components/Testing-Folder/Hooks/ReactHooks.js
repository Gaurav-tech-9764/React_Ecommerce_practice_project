import React, {useEffect, useState } from "react"
import "../redux.css"


const ReactHooks =() => {

    const [name, setName] = useState("Gaurav")      ///we can use Usestae as many times as wre want
    const [Address, setAddress] = useState("India")
    const [users, setUsers] = useState(null)
    const [searchQuery, setsearchQuery] = useState('')
   useEffect(()=>{
      console.log('useeffect')
      const fetchFunc = async()=>{
        const responce = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
        const resJson =  await responce.json()
        setUsers(resJson[0])

      }
      fetchFunc()
    
    },[searchQuery])

    return(
        
        <div className="App">
        <h1>This is An Sample Test Hook</h1>
      <div className="card">
          <h1>{name}</h1>
          <button onClick={()=>setName("Nakhale")} className="button">Channge Name To Nakhale</button>
      <h1>{Address}</h1>
                 <button onClick={()=>setAddress("Amravti")} className="button">Channge Address To Amravati</button>
            </div>

    <br/>
        <h1>This is An Sample Test useEffect Hook</h1>
      <div className="card">
      <input type="search" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
{users ?  (<>
  <h3>{users.name}</h3>
  <h1>{users.username}</h1>
  <h1>{users.email}</h1>
  </>
  ):
  
  <p>No result Found!!!</p>
  

}

         
      </div>
      </div>

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