import React from 'react'
import {useHistory} from 'react-router-dom'


const Side =({id,title,image,body,memomemo})=>{
const sidequery ={id, title,image,body,memomemo}

const history = useHistory()

  return(
      <div className="said__box" onClick={()=> history.push({
        pathname: '/memo',
        state: {atai:sidequery}})}>
          
          {image &&(<img className="said-image" src={image}></img>)}
          {!image && (<img className="said-image" src={"https://placehold.jp/150x150.png"}></img>)} 
          {/* 写真がある時は表示、ない時は未表示の実装する */}
          <div className="said-content">{memomemo}</div>
      </div>
    );
  }








export default Side