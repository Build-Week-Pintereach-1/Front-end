import React from 'react';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";


export const EditCard = ({id, userdashboard, editCard, setEditCard, setHasBeenEdited, toggleRefresh, setToggleRefresh, toggleModal}) => {

    // const [editCard, setEditCard] = useState({
    //     ...userdashboard,
    //     comments: userdashboard.comments,
    //     board: userdashboard.board
    // });

    const editArticle = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://nameless-lake-75129.herokuapp.com/updatearticle/${editCard.id}`, editCard)
            .then(res => {
                console.log("art edit with PUT: ", res)
                console.log("toggle in EditCard: ", toggleRefresh)
                setHasBeenEdited(true)
                setToggleRefresh(!toggleRefresh)
                console.log("toggle after put in EditCard: ", toggleRefresh)
            })
            .catch(err => {
                console.log("error PUTTING art: ", err.response)
                console.log("editcard in .catch: ", editCard)
            })
        toggleModal()
    }

    const handleChange = (e) => {
        setEditCard( {
            ...userdashboard,
            comments: editCard.comments,
            board: editCard.board,
            [e.target.name]: e.target.value
        })
        console.log(editCard)
    }
    // const handleCommentChange = (e) => {
    //     setEditCard( {
    //         ...userdashboard,
    //         // comments: userdashboard.comments,
    //         // board: userdashboard.board,
    //         [e.target.name]: e.target.value
    //     })
    //     console.log(editCard)
    // }

    return (
        <div>
            <h2> {userdashboard.title}</h2> 
            <h3>Published in: {userdashboard.journal}</h3>
            <form onSubmit={editArticle}>
                <label htmlFor="comments">Edit comments</label>
                <textarea 
                    rows="4"
                    cols="50"
                    name="comments"
                    id="comments"
                    value={editCard.comments}
                    placeholder={userdashboard.comments}
                    onChange={handleChange}
                />
                <label htmlFor="board">Edit board</label>
                <input 
                    name="board"
                    id="board"
                    value={editCard.board}
                    placeholder={userdashboard.board}
                    type="textarea"
                    onChange={handleChange}
                />
                <button type="submit" onClick={editArticle}>Save edits</button>
            </form>
             
        </div>
    );
}
