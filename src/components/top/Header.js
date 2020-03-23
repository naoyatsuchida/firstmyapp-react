import React ,{useState,useEffect}from 'react';
import {Link} from 'react-router-dom'


const Head =()=>{
  return(

<header className="header">


<p className="header__title">外部APIを叩いてニュースを表示するアプリ(仮)</p>
     
<div className="header__nab">
  <Link to=''className="sign_up">新規登録</Link>
  <Link to=''className="log_in">ログイン</Link>
</div>
          
       

      
</header>
  )
}

export default Head