import React ,{useState,useEffect}from 'react';
import AppContext from '../context/AppContext'
import '../App.scss';
import Head from './top/Header'
import Main from './top/Main'
import axios from 'axios'

function App() {

  const [article, setArticle] = useState([]);
 
  useEffect(()=>{
    news()
    
    
  },[])


  const news = async() =>{
    const url = 'http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=e50c1e192d364a2a8f35150d178f8df8'
    try {
      const response = await axios.get(url);
      setArticle(response.data.articles)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }






  return (

    <AppContext.Provider value={{article}}>

      <div className='wrapper'>
    
        <Head/>
        <Main/>
      
        <p　className="api">外部apiの索引を春</p>
      </div>
    
    </AppContext.Provider>
  );
}

export default App;


