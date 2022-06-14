import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Amazon = ()=>{
    return(
        <Card
        key = {Sdata[3].id}
        imgsrc = {Sdata[3].imgsrc}
        sname = {Sdata[3].sname}
        title = {Sdata[3].title}
        linksrc = {Sdata[3].linksrc}
    />
    );
}
export default Amazon;