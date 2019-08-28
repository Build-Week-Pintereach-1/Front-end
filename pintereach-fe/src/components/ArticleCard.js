import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function ArticleCard({ article }) {

  const API = "http://api.plos.org/search?q=";

  // const [newArt, setNewArt] = useState({
  //   "id": "", //article.id
  //   "user_id": "", //?
  //   "board": "", //user input
  //   "title": "", //article.title_display
  //   "authors": "", //article.author_display
  //   "journal": "", //article.journal
  //   "abstract": "", //article.abstract
  //   "articleId": "", //`${API}article.id`
  //   "comments": "" //userinput
  // })  

  const fakePUT = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put("https://nameless-lake-75129.herokuapp.com/updatearticle/1", fakeArt)
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
      <button className= "save-button" onClick={fakePOST} >
        Save Article
      </button>
  </div>
  );
}
