import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const SHeader = styled.header`
    margin-bottom: 5rem;
`;

function Header ({search, setSearch}) {
    return (
        <SHeader>
            <Nav search={search} setSearch={setSearch}/>
        </SHeader>
        
    )
}

export default Header;