import React from 'react'
import {useHistory} from 'react-router-dom'


const Side =({title,image,body,memomemo})=>{
const sidequery ={ title,image,body,memomemo}

const history = useHistory()

  return(
      <div className="said__box" onClick={()=> history.push({
        pathname: '/memo',
        state: {atai:sidequery}
      })}>
        <img
            className="said-image"
            src={image}
        ></img> 
        {/* 写真がある時は表示、ない時は未表示の実装する */}
        <div className="said-content">{memomemo}</div>
      </div>
    );
  }








export default Side