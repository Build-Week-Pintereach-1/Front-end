import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleCard from './ArticleCard';

function ArticleList({search}) {
    const [article, setArticle] = useState([]);

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
        <button onClick={() => console.log("button 1")}>Test Search Type</button>
         //This button changes the 'type' field in the axios get. It will be changed to a drop down.

        <button onClick={() => console.log("button 2")}>Test Seach Query</button>
          //This button changes the 'search' field in the axios get. It will be changed to a string input.

          {article.map(article => {
            return <ArticleCard key= {article.id} article = {article}/>;
          })}
      </section>
    );
}
export default ArticleList;