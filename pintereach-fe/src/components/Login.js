import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Colors } from './StyleVariables'


const StyledInput = styled.input`
    padding: 6px;
    width: 60%;
    border-color: ${Colors.secondary.persimmonLight};
    border-width: 1px;
    border-style: solid;
    border-radius: .3rem;
    margin: 1%;
    margin-bottom: 1rem;
    font-size: .75rem;
`
const StyledForm = styled.form`
    width: 50%;
    padding: 3%;
    background-color: ${Colors.primary.light};
    border-radius: .3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 3px ${Colors.primary.mid};
`
const StyledButton = styled.button`
    background-color: ${Colors.primary.dark};
    cursor: pointer;
    transition: background-color .4s ease;

    &:hover {
        background-color: ${Colors.secondary.persimmon};
        transition: background-color .2s ease;
    }
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
                props.setLoggedIn(true)
                props.setUserID(localStorage.getItem("userID"))
                routeToUserDashboard()
            })
            .catch(err => console.log("Error logging in: ", err.response))
    }

    return (
        <div className="form-container">
            <StyledForm>
                <h3>Sign into your account</h3>
                <br/>
                <label htmlFor="username">Username: </label>
                <StyledInput
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username"
                    value={creds.username}
                    onChange={handleChanges}
                />   
                <label htmlFor="username">Password: </label>
                <StyledInput
                    type="password"
                    name="password"
                    id="password"
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