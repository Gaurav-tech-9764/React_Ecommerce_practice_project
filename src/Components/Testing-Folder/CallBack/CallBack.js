import React, { useCallback, useState } from "react";
import "./CallBack.styles.css"
import logo from '../../../logo123.svg';


const functions = new Set()

const CallBack = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    const incrementCount1 = useCallback(() => setCount1(count1 + 1),[count1]);
    const incrementCount2 = useCallback(() => setCount2(count2 + 1),[count2]);

    const logName = useCallback(() => console.log("Gaurav"), [] )

        functions.add(incrementCount1)
        functions.add(incrementCount2)
        console.log(functions)

        return(
            <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              Count1: {count1}
              <button onClick={incrementCount1}>Increase Count1</button>
              Count2: {count2}
              <button onClick={incrementCount2}>Increase Count2</button>
              <button onClick={logName}>Log Name</button>
         
            </header>
          </div>
        )

}
export default CallBack