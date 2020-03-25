import React from 'react'
import {Link} from 'react-router-dom'

const Head = () =>{


  return(
    
      <>
          <header className="header">
          <Link to="/" className="LINK" >
          <p className="header__title">外部APIを叩いてニュースを表示するアプリ(仮)</p>
          </Link>
          </header>
      </>
    
  )


}

export default Head