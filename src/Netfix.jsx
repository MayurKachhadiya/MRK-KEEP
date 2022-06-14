import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Netflix = ()=>{
    return(
        <Card
        key = {Sdata[1].id}
        imgsrc = {Sdata[1].imgsrc}
        sname = {Sdata[1].sname}
        title = {Sdata[1].title}
        linksrc = {Sdata[1].linksrc}
    />
    );
}
export default Netflix;