import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleCard from './ArticleCard';

<<<<<<< HEAD
export default function ArticleList({ search, setSearch }) {
    const [article, setArticle] = useState([]);
 
    //const [type, setType] = useState('abstract');
    // Set the field to search, abstract is just an example   
    //const [query, setQuery] = useState('biology');
    //Set the search term, biology is just an example
=======
function ArticleList({search}) {
    const [article, setArticle] = useState([]);
>>>>>>> aba21a007263bae2731eeeea68431917b284dcfc

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
<<<<<<< HEAD
=======
        <button onClick={() => console.log("button 1")}>Test Search Type</button>
         //This button changes the 'type' field in the axios get. It will be changed to a drop down.

        <button onClick={() => console.log("button 2")}>Test Seach Query</button>
          //This button changes the 'search' field in the axios get. It will be changed to a string input.
>>>>>>> aba21a007263bae2731eeeea68431917b284dcfc

          {article.map(article => {
            return <ArticleCard key= {article.id} article = {article}/>;
          })}
      </section>
    );
}
export default ArticleList