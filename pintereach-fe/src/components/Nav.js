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
    height: 7.5rem;
    padding: 0 2rem;
    box-shadow: 2px 2px 3px ${Colors.primary.midLight};
    position: fixed;
    top: 0;
    z-index: 999;
    @media (max-width:600px){
        display: inline;
        height: 25rem;
      }

`;

// const LogoImg = styled.img`
//         width: 11rem;
//         margin-left: 2rem;
//         position: relative;
//         top: 1rem;
// `;

const userID = localStorage.getItem("userID")

function Nav ({search, setSearch}) {
    return (
        <div classname = "mobile-fix">
        <StyledNav>
            <div className="logo-container">
            <Link to="/"><img src={Icon}/></Link>
            </div>
            <div className="nav-container">
            <SearchForm search={search} setSearch={setSearch}/>
            <div className="nav-container-links">
            <Link to="/Login">Sign in</Link>
            <Link to="/SignUp">Create account</Link>
            <Link to={`/user/${userID}`} >My Boards </Link>
            </div>
            </div>
        </StyledNav>
        </div>
    )
}

export default Nav