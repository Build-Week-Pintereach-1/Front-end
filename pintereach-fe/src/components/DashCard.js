import React, {useState, useEffect} from 'react';
import Modali, { useModali } from 'modali';
import axiosWithAuth from "../utils/axiosWithAuth";
import { EditCard } from "./EditCard";



const DashCard = ({ article, setUserDashboard, userdashboard, setToggleRefresh, toggleRefresh, setFilteredBoard, filteredBoard, boardSelected, unfilter }) =>{

    const { title, id, journal, authors, comments, board, abstract, articleId } = article;

    const [modal, toggleModal] = useModali({closeButton: false});

    const [editCard, setEditCard] = useState({
        comments: comments,
        board: board
    });
    const [hasBeenEdited, setHasBeenEdited] = useState(false)

    /**
     * we need to check:
     * userdashboard.comments === editCard.comments && userdash.board === edit.board
     * 
     * if edited.board, show edit.comments/board
    */


    const deleteArticle = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`https://nameless-lake-75129.herokuapp.com/deletearticle/${id}`)
            .then(res => {
                // console.log("art delete: ", toggleRefresh)
                // setToggleRefresh(!toggleRefresh)
                // console.log("toggling refresh??", toggleRefresh)
                setFilteredBoard(filteredBoard.filter(a => a.id !== id))
            })
            .catch(err => {
                console.log("error DELETING art: ", err.response)
                // console.log("After delete userdash: ", userdashboard)
                // setToggleRefresh(!toggleRefresh)
                // console.log("toggling refresh??", toggleRefresh)
                

                if (!boardSelected) {
                    setUserDashboard(userdashboard.filter(a => a.id !== id))
                } else {   // if there IS a board selected
                    setFilteredBoard(filteredBoard.filter(a => a.id !== id)) 
                    setUserDashboard(userdashboard.filter(a => a.id !== id))
                    if (filteredBoard.length === 1) {
                        unfilter()
                    }
                }
            })
    }        
    /**
     * 
     * 1: if BOTH board lengths are 1 exactly
     * 2: 
     */

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
                <p><span className='bold-title'>Comments: </span> {hasBeenEdited.comments ? editCard.comments : comments}</p>
                <p><span className='bold-title'>Board: </span>{hasBeenEdited.board ? editCard.board : board}</p>
                <button className= 'save-button' onClick={toggleModal}> Edit Pinned Article </button>
                <button className= 'save-button' onClick={deleteArticle}> Delete Pinned Article </button>
            </div>
            <Modali.Modal {...modal}>
                <EditCard
                    id = {id}
                    userdashboard={article}
                    editCard={editCard} 
                    setEditCard={setEditCard} 
                    setHasBeenEdited={setHasBeenEdited}
                    setToggleRefresh={setToggleRefresh}
                    toggleRefresh={toggleRefresh}
                    toggleModal={toggleModal}
                    />
            </Modali.Modal>
        </div>
    )
}

export default DashCard;