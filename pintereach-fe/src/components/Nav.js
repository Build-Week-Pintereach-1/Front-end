import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from './StyleVariables'
import SearchForm from './SearchForm'
import Icon from '../assets/images/pintereach-icon.png'

const StyledNav = styled.nav`
    width: 100%;
    font-size: 1.3rem;
    background-image: linear-gradient(135deg, 
        ${Colors.primary.midDark} 36%, 
        ${Colors.primary.mid} 35%, 
        ${Colors.primary.mid} 37%, 
        ${Colors.primary.midDark} 37%, 
        ${Colors.primary.midDark} 38%, 
        ${Colors.primary.mid} 38% );;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    padding: 0 2rem;
    box-shadow: 2px 2px 3px ${Colors.primary.midDark};
    position: relative;
    z-index: 1;
`;

const LogoImg = styled.img`
        width: 3rem;
`;

function Nav ({search, setSearch}) {
    return (
        <StyledNav>
            <Link to="/"><LogoImg src={Icon}/></Link>
            <SearchForm search={search} setSearch={setSearch}/>
            <Link to="/Login">Sign in</Link>
            <Link to="/SignUp">Create account</Link>
        </StyledNav>
    )
}

export default Nav