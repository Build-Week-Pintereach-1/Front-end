import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleCard from './ArticleCard';
import StackGrid from "react-stack-grid";

function ArticleList({search}) {
    const [article, setArticle] = useState([]);
    useEffect(() => {
      axios
      .get(`https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=${search}&start=1&rows=21&api_key=z2S-nFcgkr5BxkxKRb2v`)
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
           <StackGrid
              columnWidth={500}
      >
          {article.map(article => {
            return  <ArticleCard key= {article.id} article = {article}/>;
          })}
          </StackGrid>
      </section>
    );
}
export default ArticleList;