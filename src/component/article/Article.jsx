import React from "react";
import "./article.css";

function Article({ blg, date, title, rdf }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={blg} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{rdf}</p>
      </div>
    </div>
  );
}

export default Article;
