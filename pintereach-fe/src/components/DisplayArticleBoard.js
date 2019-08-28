import React from 'react';
import { Link, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import SavedCard from './ArticleCard';
import ArticleBoard from './ArticleBoard';

const DisplayArticleBoard = () => {
const [articleBoard, setArticleBoard] = useState( [] );

const addToArticleBoard = article => {
  setArticleBoard( [...articleBoard, article] );
};

return (
    <div>
      <ArticleBoard saved={articleBoard} />
      <Route render={props => <SavedCard 
            addToArticleBoard = {addToArticleBoard}
            {...props} />}/>
    </div>
  );
}

export default DisplayArticleBoard;