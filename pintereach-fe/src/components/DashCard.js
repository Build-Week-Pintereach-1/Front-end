import React from 'react';
import Modali, { useModali } from 'modali';
import axiosWithAuth from "../utils/axiosWithAuth";
import { EditCard } from "./EditCard";

const DashCard = ({ article, setUserDashboard, userdashboard }) =>{

    const { title, id, journal, authors, comments, board, abstract, articleId } = article;

    const [modal, toggleModal] = useModali();

    const deleteArticle = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`https://nameless-lake-75129.herokuapp.com/deletearticle/${id}`)
            .then(res => {
                console.log("art delete: ", res)
                setUserDashboard(userdashboard.filter(a => a.id !== id))
            })
            .catch(err => {
                console.log("error DELETING art: ", err.response)
                console.log(setUserDashboard)
                setUserDashboard(userdashboard.filter(a => a.id !== id))
            })
    }

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
                <button onClick={toggleModal}> Edit Pinned Article </button>
                <button onClick={deleteArticle}> Delete Pinned Article </button>
            </div>
            <Modali.Modal {...modal}>
                <EditCard id = {id} userdashboard={article}/>
            </Modali.Modal>
        </div>
    )
}

export default DashCard;