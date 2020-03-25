import React, { useContext } from "react";
import Kizi from "./Kizi";
import AppContext from "../../context/AppContext";
import Side from './Side.js'


const Main = () => {
  const { article,memos } = useContext(AppContext);

  const item = article.map((art, index) => {
    return (
      <Kizi
        
        title={art.title}
        image={art.urlToImage}
        body={art.description}
        key={index}
        
      />
    );
  });
  
  
  const rail = memos.map((memo,index) =>{
    return (
      <Side 
      title={memo.title}
      image={memo.image}
      body={memo.body}
      memo={memo.memomemo}
      key={index}
      />
    );
  })

  return (
    <div className="main">
      {/* サイドーーーー   railsからお気に入り記事データの所得をする*/}
      <div className="said">
        {rail}
        
      </div>
      {/* ------------メインコンテンツーーーー */}
      <div className="content">{item}</div>
{/* ================右の箱＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
      <div className="right">
        <div className="right__box">
          <img
            className="right-image"
            src="https://picsum.photos/id/237/200/300"
          ></img>
          <div className="right-content">
            自分も含め多数の人がメモしたランキングが流れる
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
