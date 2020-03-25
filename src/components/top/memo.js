import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './Header'
import '../../scss/memo.scss'
import update from 'react-addons-update';
import axios from 'axios'

const Memo = () =>{
const [article, setArticle] = useState('')
const [memo, setMemo] = useState('')
// const [sousin, setSousin] = useState('')

const location = useLocation(); //クエリから情報を所得する

useEffect(()=>{
const  art = location.state.atai
setArticle(art)

},[])
const data = {
title:article.title,
image:article.image,
body:article.body,
memomemo:memo};

const handlesubmit = async() =>{
      const ur = "http://localhost:3001/memos";
      await axios.post(ur, data)
      .then((res) => {
        // const newdata = update(sousin, {$push:[res.data]})
        // setSousin({sousin: newdata})
        console.log('memo',res.data)
      });
}



let a = document.getElementById('memoarea');
let b = document.getElementById('form__memo');

const addevent =()=>{
a.textContent='';
a.append(b.textContent);

}




  return(
    <>
      <Header/>
      
      <div className="wra">
        <div className="ma__content">
            <form className="ma">
              <p className="ma__title" type="title" value={article.title}>{article.title}</p>
              <img className="ma__image"type="image" value={article.image} src={article.image}/>
              <div className="ma__body" type="body" value={article.body}>{article.body}</div>
            </form>

            <div className="memo">
              <h3 className="memo__title">memo</h3>
              <div className ="tarako">
                  <div className="memo__area" id='memoarea' ></div>
              </div>
            </div>
        </div>

        <div className="koko">

          <form className="form">
            <div className="form__box">
              <label htmlFor="form__memo"></label>
              <textarea id="form__memo" className="form__memo" type="memomemo" value={memo} onChange={(e)=>setMemo(e.target.value) } placeholder="ここに入力してください"></textarea>
            </div>
          </form>
          
            <button className="enter" onClick={(addevent)}>ENTER</button>
            <button className="delete" type="submit" onClick={(handlesubmit)}>保存</button>

        </div>
          

      </div>
    </>
  )

  
}

export default Memo
