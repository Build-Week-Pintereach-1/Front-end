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
      .get(`http://api.plos.org/search?q=${type}:${query}&api_key=z2S-nFcgkr5BxkxKRb2v`)
      .then(response => {
        console.log(response.data.data);
        setArticle(response.data.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
      
    }, [type, query]);
  
    return (
      <section className="article-list">
          {article.map(article => {
            return <ArticleCard key= {article.id} article = {article}/>;
          })}
      </section>
    );
}


