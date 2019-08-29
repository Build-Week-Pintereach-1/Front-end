import React from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import FormikSavedCardForm from './SaveCardForm'

export let saveProps = {
    abstract: "",
    articleId: "",
    authors: "",
    board: "",
    comments: "",
    id: 60,
    journal: "",
    title: "",
    user_id: parseInt(localStorage.getItem("userID"))
}

export const SavedCard = (props) => {

    const [savedCard, setSavedCard] = useState([]);

    const id = props.id

     useEffect(() => {
         axios
         .get(`https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=id:${id}`)
         .then(res => {
             console.log(res.data.response.docs);
             setSavedCard(res.data.response.docs);
             saveProps = {
                 ...saveProps,
                title: res.data.response.docs[0].title_display,
                authors: res.data.response.docs[0].author_display.join(", "),
                journal: res.data.response.docs[0].journal,
                abstract: res.data.response.docs[0].abstract[0].replace("\n", "").replace("\n", ""),
                articleId: res.data.response.docs[0].id
             }
             console.log("saveProps object: ", saveProps)

         })
         .catch(error => {
             console.log(error);
         })
     }, []);

    const saveArticle = () => {
        const addToArticleBoard = { addToArticleBoard };
        addToArticleBoard(savedCard);
      }

    return (
        <div>
            {savedCard.map(savedArticle => (
                <SavedDisplay key = {savedCard.id} savedArticle = {savedArticle} />
            ))}
        </div>
            );
     


    function SavedDisplay({ savedArticle }){
    const { title_display,  journal } = savedArticle;

    return(
     <div className= 'article-card-saved' key="id" >
      <div className='card-content-saved'>
      <h2>{title_display}</h2>
      <h3>{journal}</h3>
      <FormikSavedCardForm savedCard = {savedCard}/>
        </div>
        </div>
    );
}
}

