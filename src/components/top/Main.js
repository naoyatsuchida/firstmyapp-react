import React, { useContext } from "react";
import Kizi from "./Kizi";
import AppContext from "../../context/AppContext";

const Main = () => {
  const { article } = useContext(AppContext);

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

  return (
    <div className="main">
      {/* サイドーーーー   railsからお気に入り記事データの所得をする*/}
      <div className="said">
        <div className="said__box">
          <img
            className="said-image"
            src="https://picsum.photos/id/237/200/300"
          ></img>
          <div className="said-content">直也は初めてアプリを作った</div>
        </div>
      </div>
      {/* 　　　　　　　　　メインコンテンツーーーー */}
      <div className="content">{item}</div>

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
