import React, { useState } from "react";
import moment from "moment";
import { useContext } from "react";
import { NewsContext } from "../NewsContext";

function Bookmarks() {
  const { bookmarks, setBookmarks } = useContext(NewsContext);

  const [sportsArticles, setSportsArticles] = useState([]);
  const [marketingArticles, setMarketingArticles] = useState([]);
  const [environmentArticles, setEnvironmentArticles] = useState([]);

  let sportsUrl = "https://anderspink.com/code-test/data/sports.json";

  fetch(sportsUrl)
    .then((res) => res.json())
    .then((out) => {
      for (let i = 0; i < bookmarks.length; i++) {
        setSportsArticles(out.filter((x) => x.id === bookmarks[i]));
      }
    })
    .catch((err) => console.log(err));

  let marketingUrl = "https://anderspink.com/code-test/data/marketing.json";

  fetch(marketingUrl)
    .then((res) => res.json())
    .then((out) => {
      for (let i = 0; i < bookmarks.length; i++) {
        setMarketingArticles(out.filter((x) => x.id === bookmarks[i]));
      }
    })
    .catch((err) => console.log(err));

  let environmentUrl = "https://anderspink.com/code-test/data/environment.json";

  fetch(environmentUrl)
    .then((res) => res.json())
    .then((out) => {
      for (let i = 0; i < bookmarks.length; i++) {
        setEnvironmentArticles(out.filter((x) => x.id === bookmarks[i]));
      }
    })
    .catch((err) => console.log(err));

  if (
    sportsArticles === [] ||
    marketingArticles === [] ||
    environmentArticles === []
  ) {
    return <div>Error loading articles</div>;
  } else {
    return (
      <div className="grid-container">
        {sportsArticles.map((article) => (
          <div className="grid-child" key={article.id}>
            <img src={article.image} alt={article.title}></img>
            <h3>{article.title}</h3>
            <a href={article.domain}>{article.domain}</a>
            <p>{moment(article.date).fromNow()}</p>
            <p>{article.content}</p>
            <p>Category: Sports</p>
          </div>
        ))}
        {marketingArticles.map((article) => (
          <div className="grid-child" key={article.id}>
            <img src={article.image} alt={article.title}></img>
            <h3>{article.title}</h3>
            <a href={article.domain}>{article.domain}</a>
            <p>{moment(article.date).fromNow()}</p>
            <p>{article.content}</p>
            <p>Category: Marketing</p>
          </div>
        ))}
        {environmentArticles.map((article) => (
          <div className="grid-child" key={article.id}>
            <img src={article.image} alt={article.title}></img>
            <h3>{article.title}</h3>
            <a href={article.domain}>{article.domain}</a>
            <p>{moment(article.date).fromNow()}</p>
            <p>{article.content}</p>
            <p>Category: Environment</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Bookmarks;
