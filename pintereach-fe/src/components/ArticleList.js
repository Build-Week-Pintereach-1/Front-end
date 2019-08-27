import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleCard from './ArticleCard';

export default function ArticleList({ search, setSearch }) {
    const [article, setArticle] = useState([]);
 
    //const [type, setType] = useState('abstract');
    // Set the field to search, abstract is just an example   
    //const [query, setQuery] = useState('biology');
    //Set the search term, biology is just an example

    useEffect(() => {

      axios
      .get(`https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=${search}&api_key=z2S-nFcgkr5BxkxKRb2v`)
      .then(response => {
        console.log(response.data.response.docs);
        setArticle(response.data.response.docs);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
      
    }, [search]);
  
    return (
      <section className="article-list">

          {article.map(article => {
            return <ArticleCard key= {article.id} article = {article}/>;
          })}
      </section>
    );
}


