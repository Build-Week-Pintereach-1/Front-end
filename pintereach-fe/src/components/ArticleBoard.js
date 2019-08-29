import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SavedCard from './SavedCard';

const ArticleBoard = (props) => {

    const [boardContent, setBoardContent] = useState([]);
    
   
    useEffect(() => {
    

    axios
    .get(`https://cors-anywhere.herokuapp.com/https://nameless-lake-75129.herokuapp.com/articles/users/8`)
    .then((response) => {
    console.log(response.length);
//     const dataArray = response.data
//    let boards = _.groupBy(dataArray, function(item){
   return item.employee;
});
// }
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

