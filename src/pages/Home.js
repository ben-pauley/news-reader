import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [articles, setArticles] = useState([]);

  let url = "https://anderspink.com/code-test/data/sports.json";

  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      setArticles(out);
    })
    .catch((err) => console.log(err));

  if (articles !== []) {
    return (
      <div className="grid-container">
        {articles.map((article) => (
          <div className="grid-child" key={article.id}>
            <h2>{article.title}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Error loading articles</div>;
  }
}

export default Home;
