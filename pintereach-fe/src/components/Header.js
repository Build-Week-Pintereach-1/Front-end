import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const SHeader = styled.header`
    margin-bottom: 5rem;
`;

function Header ({search, setSearch, loggedIn, setLoggedIn}) {
    return (
        <SHeader>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}search={search} setSearch={setSearch}/>
        </SHeader>
    )
}

export default Header;