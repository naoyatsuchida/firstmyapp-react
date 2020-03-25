import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './Header'
import '../../scss/memo.scss'

const Memo = () =>{
const [article, setArticle] = useState('')
const [memo, setMemo] = useState('')


const location = useLocation(); //クエリから情報を所得する

useEffect(()=>{
const  art = location.state.atai
setArticle(art)

},[])



let b = document.getElementById('form__memo');
let a = document.getElementById('memoarea');

const addevent =()=>{
a.textContent='';
a.append(b.textContent);

}


const deletehtml = ()=>{
a.textContent = '';
b.value ='';

}





  return(
    <>
      <Header/>
      
      <div className="wra">
        <div className="ma__content">

          <div className="ma">
            <p className="ma__title">{article.title}</p>
            <img className="ma__image" src={article.image}/>
            <div className="ma__body">{article.body}</div>
          </div>


          <div className="memo">
            <h3 className="memo__title">memo</h3>
            <div className ="tarako">
            <div className="memo__area" id='memoarea'>

            </div>

            </div>
          </div>


         

        </div>
        <div className="koko">

          <form className="form">
            <div className="form__box">
              <label htmlFor="form__memo"></label>
              <textarea id="form__memo" className="form__memo" value={memo} onChange={(e)=>setMemo(e.target.value) } placeholder="ここに入力してください"></textarea>
            </div>
          </form>
            {/* <button className="delete" >delete</button> */}
            <button className="enter" onClick={(addevent)}>ENTER</button>
            <button className="delete" onClick={(deletehtml)}>delete</button>
        </div>
          

      </div>
    </>
  )

  
}

export default Memo