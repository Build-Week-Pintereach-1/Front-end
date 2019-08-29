import React from "react";
import axios from "axios";



const UserDashboard = () => {
const getData = () => {
    axios.get("https://nameless-lake-75129.herokuapp.com/articles/")
        .then(res => console.log(res))
        .catch(err => console.log("ERROR!", err))
    }

    return(
        <div>
            <p> UserDashboard goes here </p>
            <button onClick={getData}>Get data</button>
        </div>

    )
}

export default UserDashboard;