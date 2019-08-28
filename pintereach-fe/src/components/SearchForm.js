import React, { useState } from 'react'
import styled from 'styled-components'

import { Colors } from './StyleVariables'

const AdvForm = styled.form`
    width: 50%;
    max-width: 55rem;
    min-width: 51rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1rem;
    color: white;
`;

const FormDivider = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const AdvOptions = styled.div`
    
    background-color: ${Colors.primary.midLight};
    display: flex;
    align-items: center;
    padding: 1rem;
    position: absolute;
    z-index: -1;
    top: 4.5rem;
    margin-left: 4rem;
    
`;

const Input = styled.input`
    padding: .75rem;
    padding-left: 1.5rem;
    width: 25rem;
    border: none;
    font-size: 1rem;
    border-radius: 1.5rem 0 0 1.5rem;
    margin-left: 1rem;
    box-shadow: 1px 1px 2px ${Colors.primary.midDark};

`;

const AdvSearchBtn = styled.button`
    background: none;
    border: 1px ${Colors.primary.mid} solid;
    border-radius: 1.5rem;
    padding: .75rem 1rem;
    color: ${Colors.primary.light};
    cursor: pointer;
    font-size: 1rem;
    transition: background-color .4s ease;
    margin-left: 1rem;

    &:hover {
        background-color: rgba(140, 180, 215, .4);
        box-shadow: 0px 0px 3px ${Colors.primary.light};
        transition: background-color .2s ease;
        color: white;
    }
`;
const SearchBtn = styled.button`
    background-color: ${Colors.secondary.persimmonLight};
    border: none;
    border-radius: 0 1.5rem 1.5rem 0;
    padding: .75rem 1rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color .4s ease;
    box-shadow: 1px 1px 2px ${Colors.primary.midDark};

    &:hover {
        background-color: ${Colors.secondary.persimmon};
        background-image: linear-gradient(120deg, ${Colors.secondary.yellowDark} 60%, ${Colors.secondary.yellow} 20% );
        transition: background-color .2s ease;

    }
`;


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
                if (arr[1]) {
                    console.log("condition 1 called!", arr, index, queryArray.length)
                    return `${arr[0]}:"${arr[1]}"`
                } else {
                    console.log("condition 3 called!", arr, index, queryArray.length)
                    return
                }
            })
            .filter(arr => {
                return !arr === false
            })
            .join(' AND ')
            

        console.log("new Array: ", newArray)
        setSearch(newArray)
    }

    return (
        <AdvForm onSubmit={assembleQuery}>
            <FormDivider>
                <div>
                    <Input
                        type="text"
                        id="query"
                        name="everything"
                        placeholder="Search everything"
                        value={tempSearch.everything}
                        onChange={handleChange}></Input>
                    <SearchBtn type="submit">Search</SearchBtn>
                </div>
                

                <AdvSearchBtn onClick={setAdv}>Search Options</AdvSearchBtn>
            </FormDivider>
            
        
            {advSearch && 
            <AdvOptions>
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
            </AdvOptions>
            }
        </AdvForm>
    )
}

export default SearchForm;