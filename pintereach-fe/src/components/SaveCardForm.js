import React from 'react';
import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'
import Modali, { useModali } from 'modali';

// import { saveProps } from './SavedCard'


const SavedCardForm = ( { savedCard, toggleModal }) => {
    console.log("savedCard in Form", savedCard)
    const [comment, setComment] = useState("");
    const [board, setBoard] = useState("");

    const handleCommentChanges = e => {
        e.preventDefault();
        setComment(e.target.value)
    }

    const handleBoardChanges = e => {
        e.preventDefault();
        setBoard(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        let submitMe = {
            abstract: savedCard.abstract[0],
            authors:   savedCard.author_display.join(", "), // IT WORKS...USUALLY!!!
            articleId:  savedCard.id, // IT WORKS!!!
            journal: savedCard.journal, // IT WORKS!!!
            title: savedCard.title_display,
            comments: comment,
            board: board,
            user_id: localStorage.getItem("userID")
        }
        
        axios.post('https://nameless-lake-75129.herokuapp.com/addarticle', submitMe)
       
        .then(response => {
            console.log('SubmitMe after post then: ', submitMe)
             console.log("Then res: ", response)
            //  resetForm();

         })
         .catch(error => {
            console.log("catch err: ", error);
         });
        toggleModal()
    }
    
    return(
        <div className="saved-card-form">
            <form>
                <input type="textarea" name="notes" placeholder="Notes" onChange={handleCommentChanges}/>
                <input type="text" name="board" placeholder="Board Title" onChange={handleBoardChanges}/>
                <button type="submit" onClick={handleSubmit}>Save</button>
            </form>
 
        </div>
    );
};

export default SavedCardForm;