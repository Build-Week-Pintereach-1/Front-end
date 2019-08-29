import React, { useState }from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import DashCard from './DashCard';
import StackGrid from "react-stack-grid";

const UserDashboard = (props) => {
    // const userID = localStorage.getItem("userID")
    const [userdashboard, setUserdashboard] = useState([]);

    const getData = () => {
        axiosWithAuth()
        .get(`https://nameless-lake-75129.herokuapp.com/articles/users/1`)
        .then(res => {console.log("GET user arts :", res.data)
            setUserdashboard(res.data)})
        .catch(err => console.log("GET ERROR!", err))
    }

    // const [editedArticle, setEditedArticle] = useState({
    // })

    const editedArticle = {
        abstract: "EXTRA NEw EDITED Background:sting questionnaires. ",
        articleId: "EXTRA NEW EDITED 10.1371/journal.pone.0107039",
        authors: "EXTRA NEW EDITED Emma J. Adams, Mary Goad, Shannon Sahlqvist, Fiona C. Bull, Ashley R. Cooper, David Ogilvie, on behalf of the iConnect Consortium ",
        board: "EXTRA NEW EDITED banana",
        comments: "EXTRA NEW EDITED cute as heck",
        id: 9,
        journal: "EXTRA NEW EDITED PLoS ONE",
        title: "EXTRA NEW EDITED Reliability and Validity of the Transport and Physical Activity Questionnaire (TPAQ) for Assessing Physical Activity Behaviour",
        user_id: 1
    }

    const editArticle = (e) => {
    e.preventDefault();
    axiosWithAuth()
        .put(`https://nameless-lake-75129.herokuapp.com/updatearticle/${editedArticle.id}`, editedArticle)
        .then(res => {
            console.log("art edit with PUT: ", res)
        })
        .catch(err => {
            console.log("error PUTTING art: ", err.response)
        })
    }

    const deleteArticle = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`https://nameless-lake-75129.herokuapp.com/deletearticle/${editedArticle.id}`, editedArticle)
            .then(res => {
                console.log("art delete: ", res)
            })
            .catch(err => {
                console.log("error DELETING art: ", err.response)
            })
        }
    
    return(
        <section className="article-list">
            <button onClick={getData}> Get Articles </button>
            <StackGrid columnWidth={500}>
                {userdashboard.map(userdashboard =>{
                    return <DashCard 
                        key={userdashboard.id} 
                        userdashboard= {userdashboard} 
                        deleteArticle={deleteArticle} 
                        editArticle={editArticle} 
                        editedArticle={editedArticle}
                    />
                })}
            </StackGrid>
        </section>
    )
}

export default UserDashboard;