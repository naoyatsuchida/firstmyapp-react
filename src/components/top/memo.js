import React,{useState} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './Header'
import '../../scss/memo.scss'

const Memo = () =>{
const [memo, setMemo] = useState('')

const location = useLocation(); //クエリから情報を所得する
const  art = location.state.atai

const addevent =()=>{
let a = document.getElementById('memoarea');
let b = document.getElementById('form__memo').textContent;
a.innerHTML({b});
}

const textdelete = ()=>{

}



  return(
    <>
      <Header/>
      <div className="wra">

          <div className="ma">
            <p className="ma__title">{art.title}</p>
            <img className="ma__image" src={art.image}/>
            <div className="ma__content">{art.body}</div>
          </div>


          <div className="memo">
            <div className="memoarea" id='memoarea'>

            </div>
          </div>


          <form className="form">
            <div>
              <label htmlFor="form__memo"></label>
              <textarea id="form__memo" className="form__memo" value={memo} onChange={(e)=>setMemo(e.target.value)}/>
            </div>
            <button className="enter" onClick={addevent}>ENTER</button>
            <button className="delete" onClick={textdelete}>delete</button>
          </form>

      </div>
    </>
  )


}

export default Memo