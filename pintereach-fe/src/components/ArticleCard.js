import React from "react";


export default function ArticleCard({ article }) {
  const { id, title, abstract } = article;
  return (
  <div className= 'articleCard' key ={id}>
    
    <h2> {title} </h2>
    
    <p> {abstract} </p>
  </div>
  
  );
}

