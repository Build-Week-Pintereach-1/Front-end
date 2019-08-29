import React from "react";
import Modali, { useModali } from 'modali';
import { SavedCard } from "./SavedCard";

export default function ArticleCard({ article }) {

  const [modal, toggleModal] = useModali();

  const { id, abstract, title_display, author_display, journal } = article;
  
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
      <p className="article-abstract">{abstract}</p>   
      </div>
      <div>
      <button className= "save-button" onClick={toggleModal} >
        Save Article
      </button>
      </div>
      <Modali.Modal {...modal}>
      <SavedCard id = {id}/>
      </Modali.Modal>
  </div>
  );
}
