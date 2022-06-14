import React from 'react';

function Card(pro) {
    console.log(pro);
    return(
        <>
    <div class="card">
      <div class="box">
        <div class="content">
        <img style={{width:299,height:168}} src={pro.imgsrc} alt='myPic' className='card_image'/>
        <span color='white'>{pro.title}</span>
          <h3 color='white'>{pro.name}</h3>
          <a href={pro.linksrc}>WATCH NOW</a>
        </div>
      </div>
    </div>
   
</>
    );
  }

  export default Card;
