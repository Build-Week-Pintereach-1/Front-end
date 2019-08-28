import React from 'react';
import SavedCard from './SavedCard';

const ArticleBoard = (props) => {

    return(
        <div className= "article-board">
            {props.saved.map(article => (
                <div className = 'testcard'>
                    {article.title_display}
                </div>
            ))}
        </div>
    )
}

export default ArticleBoard;