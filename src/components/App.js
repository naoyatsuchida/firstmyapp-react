import React ,{useState,useEffect}from 'react';
import AppContext from '../context/AppContext'
import '../scss/App.scss';
import Head from './top/Header'
import Main from './top/Main'
import axios from 'axios'

function App() {

  const [article, setArticle] = useState([]);
  const [memos, setMemos] = useState([]);
 
  useEffect(()=>{
    news();
    rails();
    
  },[])


  const news = async() =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=e50c1e192d364a2a8f35150d178f8df8'
    try {
      const response = await axios.get(url);
      console.log(response)
      setArticle(response.data.articles)
      
    } catch (error) {
      console.error(error);
    }
  }


  const rails = async()=>{
    const memourl = 'https://with-firstmyapp.herokuapp.com/memos/'
    try {
      const respons = await axios.get(memourl);
      console.log(respons)
      setMemos(respons.data.data);
      
      
    } catch (error) {
      console.error(error);
    }
    }
  
  





  return (

    <AppContext.Provider value={{article,memos}}>

      <div className='wrapper'>
    
        <Head/>
        <Main/>
      　<div className="footer">
        <a className="footer__api" href="https://newsapi.org/" target="_blank">&copy;News API : https://newsapi.org/</a>
      　</div>
      </div>
    
    </AppContext.Provider>
  );
}

export default App;


