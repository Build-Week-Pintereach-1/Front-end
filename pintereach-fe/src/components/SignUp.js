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
                props.setLoggedIn(true)
                localStorage.setItem("token", res.data.tokenThing)
                routeToArticleList()
            })
            
            .catch(err => console.log("Error signing up: ", err.response))
            
        } 
        else console.log("error signing up", inputs)
    }

    return (
        <div className= 'form-container'>
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
                <StyledButton className='default-button' onClick={handleSubmit} > Sign Up </StyledButton>
            </StyledForm>
        </div>
    )
}

export default SignUpForm;