import React from "react";
import { useState } from 'react';
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
    return(
             <section className="article-list">
            <button onClick={getData}>Get data
            </button>
           <StackGrid
              columnWidth={500}>
                {userdashboard.map(userdashboard =>{
                return <DashCard key={userdashboard.id} userdashboard= {userdashboard}/>
            })}
       
        </StackGrid>
        </section>
    )
}

export default UserDashboard;