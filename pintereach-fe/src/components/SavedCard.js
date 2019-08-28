import React from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import FormikSavedCardForm from './SaveCardForm'

const SavedCard = (props) => {

    const fake = [{
        abstract: ["This article uses data from Thomson Reute… data and draw conclusions for themselves."],
        author_display:[
             "Paul Oldham",
            "Stephen Hall",   
            "Geoff Burton"
        ],
        id: "10.1371/journal.pone.0034368",
        journal: "PLoS ONE",
        title_display: "Synthetic Biology: Mapping the Scientific Landscape"
        }]

    const [SavedCard, setSavedCard] = useState({});

    // const saveArticle = () => {
    //     const addToArticleBoard = { addToArticleBoard };
    //     addToArticleBoard(savedCard)
    //   }

    // useEffect(() => {
    //     axios
    //     .get(`/*BACKEND/*`)
    //     .then(res => {
    //         console.log(res);
    //         setSavedCard(res);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }, []);

    return (
        <div>
            {fake.map(savedArticle => (
                <SavedDisplay savedArticle = {savedArticle} />
            ))}
        </div>
            );
     }


    function SavedDisplay({ savedArticle }){
    const { id, title_display, author_display, journal, abstract } = savedArticle;

    return(
     <div className= 'article-card saved' key="id" >
      <div className='card-content saved'>
      <h2>{title_display}</h2>
      <h3>{journal}</h3>
      <div className='article-authors saved'>
        Author(s):
          {author_display}
      </div>
      <a href={`http://doi.org/${id}`} target='_blank'>View Article</a>
      <p className="article-abstract saved">{abstract}</p>   
      </div>
      <FormikSavedCardForm />
        </div>
    );
}

export default SavedCard;