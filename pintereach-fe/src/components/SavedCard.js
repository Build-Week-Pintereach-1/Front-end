import React from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import SavedCardForm from './SaveCardForm';
import { useEffect, useState } from 'react';

const SavedCard = (props) => {
    const [SavedCard, setSavedCard] = useState({});

    useEffect(() => {
        axios
        .get(`/*BACKEND/*`)
        .then(res => {
            console.log(res);
            setSavedCard(res);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    const saveArticle = () => {
        const addToArticleBoard = { addToArticleBoard };
        addToArticleBoard(savedCard)
      }

    const { id, title, authors, abstract } = savedCard;

    return(
        <div>
        <ArticleCard article = {savedCard}/>
        <SavedCardForm />
    );
}

export default SavedCard;