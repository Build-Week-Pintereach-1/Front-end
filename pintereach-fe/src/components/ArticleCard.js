import React from "react";
import Modali, { useModali } from 'modali';
import { SavedCard } from "./SavedCard";

export default function ArticleCard({ article }) {

  const [modal, toggleModal] = useModali();

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


  // strips ugly <i></> tags from appearing in the title display
  let strippedTitle = title_display.replace(/(<([^>]+)>)/ig,"");
  
  return (
    <div className= 'article-card' key="id" >
      <div className='card-content'>
      <h2>{strippedTitle}</h2>
      <h3>{journal}</h3>
      <div className='article-authors'>
        Author(s):
          {author_display}
      </div>
      <a href={`http://doi.org/${id}`} target='_blank'>View Article</a>
      <p className="article-abstract">{abbreviatedAbstract}</p>   
      </div>
      /*This button should maybe post the article to our backend too */
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
