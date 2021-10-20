import { useLayoutEffect, useEffect, useRef } from 'react';
import './hookStyles.css'



const Hooks = () => {

    const ref = useRef()

    console.log("this is the ref",ref)

    useEffect(()=>{
       setTimeout(() => {
        console.log("this is in Effect");
        ref.current.style.backgroundColor = 'red';
       }, 1000);
    },[ref])

    useLayoutEffect(()=>{
        console.log("this ins layouteffect")
        
    },[ref]);

    return(
        <div id="div" ref={ref}>
            this is uselayout and useEffect
        </div>
    )
}

export default Hooks