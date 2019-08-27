import React, { useState } from 'react'

function SearchForm ({search, setSearch}) {
    const [advSearch, setAdvSearch] = useState(false)
    const [tempSearch, setTempSearch] = useState({
        everything: "",
        title: "",
        author: "",
        journal: "",
        abstract: ""
    })

    const setAdv = (e) => {
        e.preventDefault()
        setAdvSearch(!advSearch)
    }
    
    const handleChange = (e) => {
        setTempSearch({
            ...tempSearch,
            [e.target.name]: e.target.value
        })
        console.log(tempSearch)
        
    }
    
     /**
      * @function assembleQuery
      * 
      * This function takes in the tempSearch object and returns a query string for the API.
      * 
      * @param {e} event for event.preventDefault()
      * 
      * the nested map method:
      * @param {array, index} the item and its index in the array from Object.entries(tempSearch)
      * 
      */

    const assembleQuery = (e) => {
        e.preventDefault()
        console.log("final search", tempSearch)
        console.log(Object.entries(tempSearch))

        const queryArray = Object.entries(tempSearch)

        const newArray = queryArray
            .map((arr, index) => {

                if ((index === queryArray.length-1) && arr[1]) {
                    console.log("condition 1 called!", arr)
                    return `${arr[0]}:"${arr[1]}`
                } else if (arr[1]) {
                    console.log("condition 2 called!", arr)
                    return `${arr[0]}:"${arr[1]}" AND `
                } else {
                    console.log("condition 3 called!", arr)
                    return
                }
            })
            .filter(arr => {
                return !arr === false
            })
            .join('')

        console.log(newArray)
        setSearch(newArray)
        
    }

    return (
        <form onSubmit={assembleQuery}>
            <label htmlFor="query">Search for an article</label>
            <input
                type="text"
                id="query"
                name="everything"
                placeholder="Search everything"
                value={tempSearch.everything}
                onChange={handleChange}></input>
                <button type="submit">Search</button>
            <br/>
            <br/>
            <button onClick={setAdv}> Advanced Search </button>
        
            {advSearch && 
            <React.Fragment>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Search titles"
                value={tempSearch.title}
                onChange={handleChange}></input>

            <label htmlFor="author">Author(s)</label>
            <input
                type="text"
                id="author"
                name="author"
                placeholder="Search authors"
                value={tempSearch.author}
                onChange={handleChange}></input>

            <label htmlFor="journal">Journal</label>
            <input
                type="text"
                id="journal"
                name="journal"
                placeholder="Search journals"
                value={tempSearch.journal}
                onChange={handleChange}></input>

            <label htmlFor="abstract">Abstract</label>
            <input
                type="text"
                id="abstract"
                name="abstract"
                placeholder="Search abstracts"
                value={tempSearch.abstract}
                onChange={handleChange}></input>
            </React.Fragment>
            }
        </form>
    )
}

export default SearchForm;