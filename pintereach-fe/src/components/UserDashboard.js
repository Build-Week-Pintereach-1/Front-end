import React, { useState, useEffect }from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import DashCard from './DashCard';
import StackGrid from "react-stack-grid";
import Modali, { useModali } from 'modali';

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
    }, [ userdashboard.length ])
    console.log("boardNames redux", boardNames)
    
   

    const filterBoards = (board) => {
        setBoardSelected(true)
        console.log(`my board is ${board}!`)
        return setFilteredBoard(userdashboard.filter(item => item.board === board))
    }

    const unfilter = () => {
        setBoardSelected(false)
    }

    // const deleteArticle = (e) => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //         .delete(`https://nameless-lake-75129.herokuapp.com/deletearticle/${userdashboard.id}`)
    //         .then(res => {
    //             console.log("art delete: ", res)
    //         })
    //         .catch(err => {
    //             console.log("error DELETING art: ", err.response)
    //         })
    //     }
    
    return(
        <section className="article-list">
            {/* <button > Get Articles </button> */}
            <button onClick={unfilter}>All saved articles</button>
            {boardNames.map(a => (
                <button key={a} onClick={() => filterBoards(a)}> {a} </button> 
            ))}
            <StackGrid columnWidth={500}>
                { !boardSelected ? userdashboard.map(article =>{
                    return <DashCard 
                        key={article.id}
                        article= {article} 
                        setUserDashboard={setUserdashboard}
                        userdashboard={userdashboard}
                    />
                }) :
                filteredBoard.map(article => (
                    <DashCard 
                        key={article.id} 
                        article= {article} 
                        setUserDashboard={setUserdashboard}
                        userdashboard={userdashboard}
                    />
                ))
            }
            </StackGrid>
        </section>
    )
}

export default UserDashboard;