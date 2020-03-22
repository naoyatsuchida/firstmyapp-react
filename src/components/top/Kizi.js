import React from 'react'

const Kizi =({title, image, body})=>{
  return (
    <>
     <div className="contents">
              <div className="tako">
              <img className="contents__image" src={image}></img>

              </div>
              <div className="contents__body">
              <p className="title">{title}</p>
              <p className="body">{body}</p>
              </div>

            </div>
    </>
  )
}

export default Kizi