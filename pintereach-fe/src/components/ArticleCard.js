import React from "react";


export default function ArticleCard({ article }) {
  const { id, abstract, article_title, author_display } = article;

  return (
    <div className= 'article-card' key="id" >
      <h2>{article_title}</h2>
      <div className='article-authors'>
        Author(s):
          {author_display.map(author => (
          <ul key = {author} >
          <li>{author}</li>
          </ul>
          ))}
      </div>
      <a href={`http://doi.org/${id}`}>View Article</a>
      <p>{abstract}</p>
  </div>
  );
}
