import React, { useState, useEffect }from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import DashCard from './DashCard';
import StackGrid from "react-stack-grid";

const UserDashboard = (props) => {
    // const userID = localStorage.getItem("userID")
    const [userdashboard, setUserdashboard] = useState([]);
    const [boardNames, setBoardNames] = useState([]);
    const [boardSelected, setBoardSelected] = useState(false);
    const [filteredBoard, setFilteredBoard] = useState([]);

    // let boardNames = [];
    useEffect(() => {
        // const getData = () => {
            axiosWithAuth()
            .get(`https://nameless-lake-75129.herokuapp.com/articles/users/1`)
            .then(res => {
                console.log("GET user arts :", res.data)
                setUserdashboard(res.data)
                setBoardNames([...new Set(res.data.map(obj => obj.board))])
                console.log("boardNames?", boardNames)})
            .catch(err => console.log("GET ERROR!", err))
        // }
    }, [])
    console.log("boardNames redux", boardNames)
    
    // const [editedArticle, setEditedArticle] = useState({
    // })

    const filterBoards = (board) => {
        setBoardSelected(true)
        console.log(`my board is ${board}!`)
        return setFilteredBoard(userdashboard.filter(item => item.board === board))
    }

    const unfilter = () => {
        setBoardSelected(false)
    }

    /**
     * title 
     * display a mapped list of ONLY items that match item.title === board
     */

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
            {/* <button > Get Articles </button> */}
            <button onClick={unfilter}>All saved articles</button>
            {boardNames.map(a => (
                <button key={a} onClick={() => filterBoards(a)}> {a} </button> 
            ))}
            <StackGrid columnWidth={500}>
                { !boardSelected ? userdashboard.map(userdashboard =>{
                    return <DashCard 
                        key={userdashboard.id} 
                        userdashboard= {userdashboard} 
                        deleteArticle={deleteArticle} 
                        editArticle={editArticle} 
                        editedArticle={editedArticle}
                    />
                }) :
                filteredBoard.map(userdashboard => (
                    <DashCard 
                        key={userdashboard.id} 
                        userdashboard= {userdashboard} 
                        deleteArticle={deleteArticle} 
                        editArticle={editArticle} 
                        editedArticle={editedArticle}
                    />
                ))
            }
            </StackGrid>
        </section>
    )
}

export default UserDashboard;