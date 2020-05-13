import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './Header'
import '../../scss/memo.scss'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Memo = () =>{
  const history = useHistory()
  const [article, setArticle] = useState('')
  const [memo, setMemo] = useState('')
  const ur = "https://with-firstmyapp.herokuapp.com/memos"
  const data = {
          id:article.id,
          title:article.title,
          image:article.image,
          body:article.body,
          memomemo:memo};
  const location = useLocation(); //クエリから情報を所得するために必要
  const root =()=>{ history.push({pathname:'/'})} //トップページへの遷移

  //画面表示のタイミングで呼び出し　
  useEffect(()=>{
  const  art = location.state.atai
  setArticle(art)
  },[])

  ////////////////エイジャックス エンター入力
  let a = document.getElementById('memoarea');
  let b = document.getElementById('form__memo');
  const addevent =()=>{
    a.textContent='';
    a.append(b.textContent);
  }



  ////////////////保存
  const handlesubmit = async() =>{
    await axios.post(ur, data)
    .then((res) => {
      console.log('memo',res.data)
      root()
    });
  }


  /////////////更新/////////////////
  const updatehandle=async({data})=>{

  setMemo()
  await axios.patch(`https://with-firstmyapp.herokuapp.com/memos/${data.id}`, {memo: data})
  .then((res) =>{console.log(res)});
  const respons = await axios.get(ur); //消したデータをすぐに呼び出して表示させている
  console.log(respons)
  setMemo(respons.data.data)
  root()
  }

  /////////////削除/////////////////
  const deletehandle =async({data})=>{
    window.confirm('データを削除しますか？');
    await  axios.delete(`https://with-firstmyapp.herokuapp.com/memos/${data.id}`)
    .then((res) => {console.log(res)});
    const respons = await axios.get(ur); //消したデータをすぐに呼び出して表示させている
    console.log(respons)
    setMemo(respons.data.data);
    root()
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
              <div className="memo__area" id='memoarea' >{article.memomemo || ""}</div>  {/* side空飛んできたメモは表示、mainから飛んできたものはnullを表示 */}
              </div>
            </div>
        </div>

        <div className="koko">

          <form className="form">
            <div className="form__box">
              <label htmlFor="form__memo"></label>
          
              <textarea id="form__memo" className="form__memo" type="memomemo" value={memo}
              onChange={(e)=>setMemo(e.target.value) } placeholder='ここに入力してください' ></textarea>
            

            </div>
          </form>

          {/* 条件分岐 メモがあったら上なければ下のコードが呼ばれる */}
          
          {article.memomemo &&(<> 
            {a.textContent && (
            <button className="enter" onClick={()=> (updatehandle({data}))}>UPDATE</button>
            )}
            <button className="delete" type="submit" onClick={()=> (deletehandle({data}))}>DELETE</button>
            </>
            )}
            {!article.memomemo &&( <>
            <button className="enter" onClick={(addevent)}>ENTER</button>
            <button className="delete" type="submit" onClick={(handlesubmit)}>SAVE</button>
            </>
          )}
        </div>
          

      </div>
    </>
  )

  
}

export default Memo
