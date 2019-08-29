import React, { useState } from "react";
import axios from "axios";
import Modali, { useModali } from 'modali';
import { SavedCard } from "./SavedCard";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function ArticleCard({ article }) {

  const API = "http://api.plos.org/search?q=";

  const fakeArt = {
    // "id": 9, 
    "user_id":1,
    "board":"FAKENo Spaces Board",
    "title":"No Spaces Title", //article.title_display
    "authors":"No Spaces authors", //article.author_display
    "journal":"No Spaces Journal", //article.journal
    "abstract":"\nNo Spaces\n", //article.abstract
    "articleId":"No Spaces articleID", //`${API}article.id`
    "comments":"No Spaces Comments", //userinput
  }

  const fakePUT = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put("https://nameless-lake-75129.herokuapp.com/updatearticle/9", fakeArt)
    .then(res => {
      console.log("art edit with PUT: ", res)
    })
    .catch(err => {
      console.log("error PUTTING art: ", err.response)
    })
  }

  const fakePOST = (e) => {
    e.preventDefault();
    axios
      .post("https://nameless-lake-75129.herokuapp.com/addarticle", fakeArt)
      .then(res => {
        console.log("new art posted: ", res)
      })
      .catch(err => {
        console.log("error posting new art: ", err.response)
      })
  }

  const saveArticle = e => {
    e.preventDefault();
    console.log("saveArt article obj: ", fakeArt)
  }

  const [modal, toggleModal] = useModali();

  const { id, abstract, title_display, author_display, journal } = article;
  
  return (
    <div className= 'article-card' key="id" >
      <div className='card-content'>
        <h2>{title_display}</h2>
        <h3>{journal}</h3>
        <div className='article-authors'>
          Author(s): {author_display}
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
