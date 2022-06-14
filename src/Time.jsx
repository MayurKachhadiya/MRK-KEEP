import React,{useState} from "react";

const Time = () => {
    let newTime = new Date().toLocaleTimeString(); 
     let [Ctime, setCtime] = useState(newTime);

     const SetTime=()=>{
     newTime = new Date().toLocaleTimeString(); 
    setCtime(newTime);
     }
     setInterval(SetTime,1000);
     return(
        <>
        <h1 style={{color:'darkgreen'}}>{Ctime}</h1>
        <button type="button" onClick={SetTime} className="btn btn-secondary">Get Time</button>
        </>
    );
}
export default Time;