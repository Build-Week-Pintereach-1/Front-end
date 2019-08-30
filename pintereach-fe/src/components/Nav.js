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
    justify-content: center;
    align-items: center;
    height: 6.9rem;
    padding: 0 2rem;
    box-shadow: 2px 2px 3px rgb(253, 132, 110);
    position: fixed;
    top: 0;
    z-index: 999;

    @media screen and (max-width:600px) {
      flex-direction: column;
      position: relative;
      border: 1px red solid;
      height: 15rem;
      }

`;

const userID = localStorage.getItem("userID")

function Nav ({search, setSearch, loggedIn, setLoggedIn}) {
  const logout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("userID");
    localStorage.removeItem("searchTerm");
    setLoggedIn(false)
  }
  return (
    <div className = "header-container">
      <StyledNav>
          <div className="logo-container">
              <Link to="/"><img src={Icon}/></Link>
          </div>
          <SearchForm search={search} setSearch={setSearch}/>
          <div className="nav-container">
              {loggedIn ? (
               <div className="nav-container-links">
                 {console.log("LI", loggedIn)}
                    <Link to={`/user/${userID}`} >My Boards </Link>
                    <Link to="/" onClick={logout}>Log out</Link>
                </div>
                    ) : (
                <div className="nav-container-links">
                    <Link to="/Login">Sign in</Link>
                    <Link to="/SignUp">Create account</Link>
                </div>
              )}
          </div>
      </StyledNav>
    </div>
  )
}

export default Nav