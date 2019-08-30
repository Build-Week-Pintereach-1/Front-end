import React from 'react';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";


export const EditCard = ({id, userdashboard}) => {

    const [editCard, setEditCard] = useState({
        ...userdashboard,
        comments: userdashboard.comments,
        board: userdashboard.board
    });

    const editArticle = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://nameless-lake-75129.herokuapp.com/updatearticle/${editCard.id}`, editCard)
            .then(res => {
                console.log("art edit with PUT: ", res)
            })
            .catch(err => {
                console.log("error PUTTING art: ", err.response)
            })
    }

    const handleChange = (e) => {
        setEditCard( {
            ...editCard,
            [e.target.name]: e.target.value
        })
        console.log(editCard)
    }

    return (
        <div>
            <h2>{userdashboard.title_display}</h2> 
            <h3>{userdashboard.journal}</h3>
            <form onSubmit={editArticle}>
                <label htmlFor="comments">Edit comments</label>
                <input 
                    name="comments"
                    id="comments"
                    value={editCard.comments}
                    placeholder="current comment value"
                    type="textarea"
                    onChange={handleChange}
                />
                <label htmlFor="board">Edit board</label>
                <input 
                    name="board"
                    id="board"
                    value={editCard.board}
                    placeholder="current comment value"
                    type="textarea"
                    onChange={handleChange}
                />
                <button type="submit" onClick={editArticle}>Save edits</button>
            </form>
             
        </div>
    );
}
