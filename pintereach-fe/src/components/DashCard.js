import React from 'react';

const DashCard = ({ userdashboard, deleteArticle, editArticle, editedArticle }) =>{

    const { title, id, journal, authors, comments, board, abstract, articleId } = userdashboard;

    return(
        <div className= 'article-card' key={id}>
            <div className='card-content'>
                <h2>{title}</h2>
                <h3>{journal}</h3>
                    <div className='article-authors'>
                        Author(s): {authors}
                    </div>
                <a href={`http://doi.org/${articleId}`} target='_blank'>View Article</a>
                <p>{abstract}</p>
                <p><span className='bold-title'>Comments: </span> {comments}</p>
                <p><span className='bold-title'>Board: </span>{board}</p>
                <button onClick={editArticle}> Edit Pinned Article </button>
                <button onClick={deleteArticle}> Delete Pinned Article </button>
            </div>
        </div>
    )
}

export default DashCard;