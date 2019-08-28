import React from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const UserDashboard = (props) => {
    const userID = localStorage.getItem("userID")
    const getData = () => {
        axiosWithAuth()
        .get(`https://nameless-lake-75129.herokuapp.com/articles/users/8`)
        .then(res => console.log("GET user arts :", res))
        .catch(err => console.log("GET ERROR!", err))
    }
    return(
        <div>
            <p> UserDashboard goes here </p>
        <button onClick={getData}>Get data</button>
        </div>

    )
}

export default UserDashboard;