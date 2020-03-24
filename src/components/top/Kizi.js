import React from 'react'
import {useHistory} from 'react-router-dom'



const Kizi =({title, image, body})=>{
  
  const query = {title,image,body}
const history = useHistory()
  return (
    
    
  
    <div  className="kizi-link" onClick={()=> history.push({
      pathname: '/memo',
      state: {atai:query}
    }
    )} >
     <div className="contents">
              <div className="tako">
              <img className="contents__image" src={image}></img>

              </div>
              <div className="contents__body">
              <p className="title">{title}</p>
              <p className="body">{body}</p>
              </div>

            </div>
    </div>
 
    
  
  )
}

export default Kizi