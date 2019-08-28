import React from 'react'
import styled from 'styled-components'

import SearchForm from './SearchForm'

const StyledNav = styled.nav`
    width: 100%;
    background-color: teal;
    display: flex;
    justify-content: space-around;
`;

function Nav ({search, setSearch}) {
    return (
        <StyledNav>
        <SearchForm search={search} setSearch={setSearch}/>
        </StyledNav>
    )
}

export default Nav