import React from "react";
import { connect } from "react-redux";
import "./redux.css"



const ReduxSagas = ({value, increase ,decrease}) =>{
    console.log(value)

    return(
        <div className="App">
         <h1>This is An Sample Test Redux Saga</h1>
            <div className='card'>
            {value}
            <button onClick={increase} className="button">ADD 1</button>
            <button  onClick={decrease} className="button">Minus 1</button>


            </div>

    

        </div>
    )
}

const mapStateToProps = state => ({
    value: state.SagaExample.value
})

const mapDispatchToProps = dispatch => ({
    increase: ()=> dispatch({type:"INCREMENT"}),
    decrease:()=> dispatch({type:"DECREMENT"})
})
export default connect(mapStateToProps, mapDispatchToProps) (ReduxSagas)