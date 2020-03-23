import React from 'react'
import {Link} from 'react-router-dom'



const Kizi =({title, image, body})=>{
  
  
  return (
    
    
  
    <Link to="memo" className="kizi-link" >
     <div className="contents">
              <div className="tako">
              <img className="contents__image" src={image}></img>

              </div>
              <div className="contents__body">
              <p className="title">{title}</p>
              <p className="body">{body}</p>
              </div>

            </div>
    </Link>
 
    
  
  )
}

export default Kizi