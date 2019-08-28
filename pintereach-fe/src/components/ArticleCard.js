import React from "react";

export default function ArticleCard({ article }) {

  const { id, abstract, title_display, author_display, journal } = article;

  
  //////////
  // abbreviates abstract to the first three sentences...
  // finds sentences based on the pressence of '. ' 

  let abbreviatedAbstract = abstract[0];
  // console.log("abstract: ", abbreviatedAbstract);
  let firstIndex = abbreviatedAbstract.indexOf('. ');
  // console.log("firstIndex: ", firstIndex);

  let secondIndex = abbreviatedAbstract.indexOf('. ', firstIndex+2);
  let thirdIndex = abbreviatedAbstract.indexOf('. ', secondIndex+2);

  abbreviatedAbstract = abbreviatedAbstract.slice(0, thirdIndex);
  abbreviatedAbstract = abbreviatedAbstract + ' . . .';
  //////////

  
  return (
    <div className= 'article-card' key="id" >
      <div className='card-content'>
      <h2>{title_display}</h2>
      <h3>{journal}</h3>
      <div className='article-authors'>
        Author(s):
          {author_display}
      </div>
      <a href={`http://doi.org/${id}`} target='_blank'>View Article</a>
      <p className="article-abstract">{abbreviatedAbstract}</p>   
      </div>
      <button className= "save-button" onClick={()=>console.log("clicked")} >
        Save Article
      </button>
  </div>
  );
}
