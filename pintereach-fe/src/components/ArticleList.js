import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleCard from './ArticleCard';

export default function ArticleList() {
    const [article, setArticle] = useState([]);
    const [type, setType] = useState('abstract');
    // Set the field to search, abstract is just an example   
    const [query, setQuery] = useState('biology');
    //Set the search term, biology is just an example

    useEffect(() => {

      axios
      .get(`https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=${type}:${query}&api_key=z2S-nFcgkr5BxkxKRb2v`)
      .then(response => {
        console.log(response.data.response.docs);
        setArticle(response.data.response.docs);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
      
    }, [type, query]);
  
    return (
      <section className="article-list">
        <h1>POEPO</h1>
        <button onClick={() => setType("id")}>Test Search Type</button>
         {/* //This button changes the 'type' field in the axios get. It will be changed to a drop down. */}

        <button onClick={() => setQuery("physics")}>Test Seach Query</button>
          //This button changes the 'search' field in the axios get. It will be changed to a string input.

          {article.map(article => {
            return <ArticleCard key= {article.id} article = {article}/>;
          })}
      </section>
    );
}


