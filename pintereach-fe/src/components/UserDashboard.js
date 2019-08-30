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

    const [toggleRefresh, setToggleRefresh] = useState(false)
    // let boardNames = [];
    useEffect(() => {
        // const getData = () => {
            axiosWithAuth()
            .get(`https://nameless-lake-75129.herokuapp.com/articles/users/${localStorage.getItem("userID")}`)
            .then(res => {
                console.log("GET user arts :", res.data)
                setUserdashboard(res.data)
                setBoardNames([...new Set(res.data.map(obj => obj.board))])
            })
            .catch(err => console.log("GET ERROR!", err))
        // }
    }, [ userdashboard.length, toggleRefresh ])
    
   

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
            <div className="button-wrapper">
                <button className='dash-button' onClick={unfilter}>All saved articles</button>
                {boardNames.map(a => (
                    <button className='dash-button' key={a} onClick={() => filterBoards(a)}> {a} </button> 
                ))}
            </div>
            
            <StackGrid columnWidth={500}>
                { !boardSelected ? userdashboard.map(article =>{
                    return <DashCard 
                        key={article.id}
                        article= {article} 
                        setUserDashboard={setUserdashboard}
                        userdashboard={userdashboard}
                        setToggleRefresh={setToggleRefresh}
                        toggleRefresh={toggleRefresh}
                        filteredBoard={filteredBoard}
                        setFilteredBoard={setFilteredBoard}
                        boardSelected={boardSelected}
                        unfilter={unfilter}
                    />
                }) :
                filteredBoard.map(article => (
                    <DashCard 
                        key={article.id} 
                        article= {article} 
                        setUserDashboard={setUserdashboard}
                        userdashboard={userdashboard}
                        setToggleRefresh={setToggleRefresh}
                        toggleRefresh={toggleRefresh}
                        setFilteredBoard={setFilteredBoard}
                        filteredBoard={filteredBoard}
                        boardSelected={boardSelected}
                        unfilter={unfilter}
                    />
                ))
            }
            </StackGrid>
        </section>
    )
}

export default UserDashboard;