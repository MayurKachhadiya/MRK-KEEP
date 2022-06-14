import React,{useState} from "react";

const Color =()=> {
    const green = "green";
    // const nm = "Mayur";
    const [Clr, setClr] = useState(green);
    // const [Name, setName] = useState(nm);

    const btn = () =>{
      let red = "red";
        setClr(red);
        // let md = "Rohit";
        // setc
    };
    return (
        <>
            <div style={{ backgroundColor: Clr }}>
            <button type="button" onClick={btn} className="btn btn-secondary">Get Color</button>
            </div>
        </>
    );
};

export default Color;