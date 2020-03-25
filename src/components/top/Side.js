import React from 'react'



const Side =({title,image})=>{

  return(
      <div className="said__box">
        {!image && <img
            className="said-image"
            src={image}
        ></img>}
        <div className="said-content">{title}</div>
      </div>
    );
  }








export default Side