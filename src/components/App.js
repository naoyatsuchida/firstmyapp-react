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
    const url = 'http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=e50c1e192d364a2a8f35150d178f8df8'
    try {
      const response = await axios.get(url);
      setArticle(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }


  const rails = async()=>{
    const memourl = 'http://localhost:3001/memos'
    try {
      const respons = await axios.get(memourl);
      setMemos(respons.data.data);
      
    } catch (error) {
      console.error(error);
    }
    }
  
   





  return (

    <AppContext.Provider value={{article}}>

      <div className='wrapper'>
    
        <Head/>
        <Main/>
      
        <a　className="api" href="https://newsapi.org/" target="_blank">&copy;News API : https://newsapi.org/</a>
      </div>
    
    </AppContext.Provider>
  );
}

export default App;


