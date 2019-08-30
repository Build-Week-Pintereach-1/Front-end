import React from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import SavedCardForm from './SaveCardForm'

export const SavedCard = (props) => {

    const [savedCard, setSavedCard] = useState([]);
    const id = props.id

     useEffect(() => {
         axios
         .get(`https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=id:${id}`)
         .then(res => {
             console.log("saveCard becomes: ", res.data.response.docs);
             setSavedCard(res.data.response.docs[0]);

         })
         .catch(error => {
             console.log(error);
         })
     }, []);

    return (
        <div>
            <h2>{savedCard.title_display}</h2> 
            <h3>{savedCard.journal}</h3>
            <SavedCardForm savedCard={savedCard} />
        </div>
    );
}


