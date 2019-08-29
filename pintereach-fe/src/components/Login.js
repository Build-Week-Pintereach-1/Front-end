import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 6px;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    margin: 1%;
`
const StyledForm = styled.form`
    width: 50%;
    padding: 3%;
    border: 1px solid blue;
    border-radius: 6px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledButton = styled.button`

`

const LoginForm = (props) => {

    const [creds, setCreds] = useState({
        username: "",
        password: "",
    })

    const handleChanges = e => {
        e.preventDefault();
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
        console.log("creds after handleChanges: ", creds)
    }

    const routeToUserDashboard = () => {
        props.history.push("/")
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Login un + pw: ", creds.username, creds.password)
        axios
            .post("https://nameless-lake-75129.herokuapp.com/login", creds)
            .then(res => {
                console.log("Login res: ", res)
                localStorage.setItem("token", res.data.tokenThing)
                localStorage.setItem("userID", res.data.id)
                props.setUserID(localStorage.getItem("userID"))
                routeToUserDashboard()
            })
            .catch(err => console.log("Error logging in: ", err.response))
    }

    return (
        <div className="login-form">
            <StyledForm>
                <h3>Login Here</h3>
                <StyledInput
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={creds.username}
                    onChange={handleChanges}
                />   
                <StyledInput
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={creds.password}
                    onChange={handleChanges}
                />   
                <StyledButton onClick={handleSubmit} > Login </StyledButton>
            </StyledForm>
        </div>
    )
}

export default LoginForm;