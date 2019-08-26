import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleCard from './ArticleCard.js';

export default function ArticleList() {
 
const [article, setArticle] = useState()
 useEffect(() => {
            axios
              .get('http://api.plos.org/search?q=abstract:science&api_key=shsiy9LkzZU4ckFrMirE')
              .then(response => {
                console.log(response.data.response.docs)
                setArticle(response.data.response.docs);
              })
              .catch(error => {
                console.error('Server Error', error);
              });
        }, []);
    

  return (
    <section className="article-list">
        {article.map(article => {
          return <ArticleCard key={article.id} title = {article.title_display} abstract = {article.abstract} />;
        })}
    </section>
  );
}

