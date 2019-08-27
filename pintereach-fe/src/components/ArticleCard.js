import React from "react";


export default function ArticleCard({ article }) {
  const { id, abstract, title_display, author_display } = article;

  return (
    <div className= 'article-card' key="id" >
      <h2>{title_display}</h2>
      <div className='article-authors'>
        Author(s):
          {author_display.map(author => (
          <ul key = {author} >
          <li>{author}</li>
          </ul>
          ))}
      </div>
      <a href={`http://doi.org/${id}`} target='_blank'>View Article</a>
      <p>{abstract}</p>
  </div>
  );
}
