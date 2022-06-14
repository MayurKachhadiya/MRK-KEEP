import React from 'react';
import ReactDOM from 'react-dom';
import './netflix.css';
// import logo from './Image/logo.jpg';
// import Header from './Header';
import Sdata from './Sdata';
import Card from './Card';
// import Netflix from './Netfix';
// import Amazon from './Amazon';
// import App from './App';
// import Counter from './Counter';
// import Time from './Time';
// import Color from './Color';
// import Form from './Form';

// const screen = 'Amazon';
// const Abc = ()=>{
//   if (screen === 'Netflix') {
//     return(
//      <Netflix/>
//     );
//   } else {
//     return(
//       <Amazon/>
//     );
//   }
// };

// const SlotM = ()=>{
//   let x = '😄';
//   let y = '😄';
//   let z = '🎅';
//       if ((x===y)&&(y===z)) {
//           return (
//               <>
//               <h1 style={{align: 'center'}}>{' '}{x}{y}{z}{' '}</h1>
//               <h1 style={{color:'darkgreen'}}>This is Matchine</h1>
//               <hr/>
//               </>
//           );
//       } else {
//               return (
//               <>    
//               <h1 style={{align:'center'}}>{' '}{x}{y}{z}{' '}</h1>
//               <h1 style={{color:'darkgreen'}}>This is not Matchine</h1>
//               <hr/>
//               </>
//           );
//       }
// }

function ncard(val){
    console.log(val);
    return(
        <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        linksrc={val.linksrc}
        />
    );
}

ReactDOM.render(
    <>
    {/* <Header/> */}
    <h1 style={{color:'white'}} align='center' className='heading_style'><logo/> List of Top New Movies</h1>
    <div className='container'>
    {Sdata.map(ncard)}

    </div>

    {/* <Card/> */}
   {/* <h1 className='heading_style'>🎰 Welcome to <span style={{fontweidth: 'bold'} }>Slot Matchine Game</span> 🎰</h1>
        <SlotM/>
        <SlotM/>
        <SlotM/> */}
        {/* <Counter/> */}
        {/* <Time/> */}
        {/* <Color/> */}
        {/* <Form/> */}
    </>,document.getElementById('root')
);