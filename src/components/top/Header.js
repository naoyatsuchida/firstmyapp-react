import React ,{useState,useEffect}from 'react';
import {Link} from 'react-router-dom'


const Head =()=>{
  return(

<header className="header">

<Link to="/" className="LINK" >
<p className="header__title">外部APIを叩いてニュースを表示するアプリ(仮)</p>
</Link>
     
<div className="header__nab">
  <Link to='../rogin/Signup'className="sign_up">新規登録</Link>
  <Link to='../rogin/Signin'className="log_in">ログイン</Link>
</div>
          
       

      
</header>
  )
}

export default Head