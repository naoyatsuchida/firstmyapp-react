import React ,{useState,useEffect}from 'react';
import {Link} from 'react-router-dom'


const Head =()=>{
  return(

<header className="header">

<Link to="/" className="LINK" >
<p className="header__title">外部APIを叩いてニュースを表示するアプリ(仮)</p>
</Link>
     
<div className="header__nab">
  <Link to='signup'className="sign_up">😄</Link>
  <Link to='signin'className="log_in">🔑</Link>
</div>
          
       

      
</header>
  )
}

export default Head