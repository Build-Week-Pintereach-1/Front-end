import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SavedCard from './SavedCard';

const ArticleBoard = (props) => {

    const [boardContent, setBoardContent] = useState([]);
   
    const userID = localStorage.getItem('userID');
  
    useEffect(() => {
   

       axios
       .get(`https://nameless-lake-75129.herokuapp.com/articles/users/${userID}`)
       .then((response) => {
           console.log(response.length);
            const dataArray = response.data
       })
  
   }, [])

    return(
        <div className= "article-board">
            {/* {props.saved.map(article => (
                <div className = 'testcard'>
                    {article.title_display}
                </div>
            ))} */}
        </div>
    )
}

export default ArticleBoard;

