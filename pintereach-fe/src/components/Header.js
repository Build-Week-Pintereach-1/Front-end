import React from 'react'
import Nav from './Nav'

function Header ({search, setSearch}) {
    return (
        <header>
            <Nav search={search} setSearch={setSearch}/>
        </header>
        
    )
}

export default Header;