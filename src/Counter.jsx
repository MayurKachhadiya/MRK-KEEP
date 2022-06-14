import React,{ useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);
    const Incval = ()=>{
        setCount(count+1);
    };
    const Dncval = ()=>{
        setCount(count-1);
    };
    return(
        <>
            <h1 style={{color: 'red'}}>{count}</h1>
            <button type="button" onClick={Incval} class="btn btn-secondary">Increment</button><hr/>
            <button type="button" onClick={Dncval} class="btn btn-secondary">Decrement</button>
        </>
    );
}
export default Counter;