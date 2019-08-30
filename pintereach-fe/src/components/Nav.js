import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from './StyleVariables'
import SearchForm from './SearchForm'
import Icon from '../assets/images/pintereach-logo.png'


const StyledNav = styled.nav`
    width: 100%;
    font-size: 1.3rem;
    background-color: ${Colors.primary.light};
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    height: 5rem;
    padding: 0 2rem;
    box-shadow: 2px 2px 3px ${Colors.primary.midLight};
    position: fixed;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
        padding-left: 0;
    }
`;

const LogoImg = styled.img`
        width: 11rem;
        margin-left: 2rem;
        position: relative;
        top: 1rem;

        @media (max-width: 500px) {
            border: 2px red solid;
            margin-left: 0;
            order: 3;
            width: 6rem;
        }
`;

const userID = localStorage.getItem("userID")

function Nav ({search, setSearch}) {
    return (
        <StyledNav>
            <div>
                <Link to="/"><LogoImg src={Icon}/></Link>
                <SearchForm search={search} setSearch={setSearch}/>
            </div>
            
            <div>
                <Link to="/Login">Sign in</Link>
                <Link to="/SignUp">Create account</Link>
                <Link to={`/user/${userID}`} >My Boards </Link>
            </div>
            
        </StyledNav>
    )
}

export default Nav