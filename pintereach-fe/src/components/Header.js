import React from 'react'
import Nav from './Nav'
import SearchForm from './SearchForm'

function Header ({search, setSearch}) {
    return (
        <header>
            <p>I am a header, maybe with a header image!!</p>
            <Nav />
            <SearchForm search={search} setSearch={setSearch}/>
        </header>
        
    )
}

export default Header;