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
const initState = {
    username: "",
    password: "",   
    confirmPassword: "",
    terms: false
}

const SignUpForm = (props) => {
    // const [creds, setCreds] = useState({
    //     username:"",
    //     password: "",
    // })

    const [inputs, setInputs] = useState({
        username: "",
        password: "",   
        confirmPassword: "",
        terms: false
    })

    const handleChanges = e => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        console.log("New user inputs after handleChanges: ", inputs)
    }

    const routeToArticleList = () => {
        props.history.push("/")
    }

    const validate = () => {
        let usernameError = "";
        let passwordShortError = "";
        let passwordMatchError = "";
                
        if(!inputs.username) {
            usernameError = "Username is required";
        }
        if(inputs.password.length < 6) {
            passwordShortError = "Password must contain at least 6 characters";
            console.log("password short err")
        }

        if(inputs.password !== inputs.confirmPassword) {
            passwordMatchError = "Passwords do not match";  
            console.log("password match err")
        }

        if(usernameError || passwordShortError || passwordMatchError) {
            setInputs({ usernameError, passwordShortError, passwordMatchError});
            return false
        } else return true
    }

    const handleSubmit = e => {
        let result = validate();
        let submitUN = inputs.username;
        let submitPW = inputs.password;
        console.log(inputs.username, inputs.password);

        e.preventDefault();
        if (result === true) {
            console.log("validate after handleSub: ", result)
           
        let creds = {
            username: submitUN,
            password: submitPW
        }
        
        console.log("Signup info: ", creds.username, creds.password)
        axios
            .post("https://nameless-lake-75129.herokuapp.com/register", creds)
            .then(res => {
                console.log("Reg res: ", res)
                localStorage.setItem("token", res.data.tokenThing)
                routeToArticleList()
            })
            
            .catch(err => console.log("Error signing up: ", err.response))
            
        } 
        else console.log("error signing up", inputs)
    }

    return (
        <div>
            <StyledForm>
                <h3>Sign Up Here</h3>
                <StyledInput
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={inputs.username}
                    onChange={handleChanges}
                />   
                <div style={{ fontSize: 10, color: "red" }}>
                    {inputs.usernameError}
                </div>
                <StyledInput
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={inputs.password}
                    onChange={handleChanges}
                />   
                <div style={{ fontSize: 10, color: "red" }}>
                    {inputs.passwordShortError}
                </div>
                <StyledInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={inputs.confirmPassword}
                    onChange={handleChanges}
                />  
                <div style={{ fontSize: 10, color: "red" }}>
                    {inputs.passwordMatchError}
                </div>
                <StyledButton onClick={handleSubmit} > Sign Up </StyledButton>
            </StyledForm>
        </div>
    )
}

export default SignUpForm;