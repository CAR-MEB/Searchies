import React, {useState, useEffect}from 'react'
import axios from 'axios'
import SearchItem from './SearchItem/SearchItem'
import './Search.css'




const Search = () => {

    const [searchies, setSearchies] = useState([])
    const getSearchies = () => {
        axios.get('')
            .then((response) => {
                setSearchies(response.data)
            })
    }
    useEffect(() => {
        getSearchies()
    }, [])

    const [value, setValue] = useState('')

    const filteredClothing = searchies.filter(search => {
        return search.name.toLowerCase().inclides(value.toLOwerCase())
    })



  return (
    <div>
        <div className="form">
            <form className="search_form">
                <input 
                    type="text" 
                    placeholder='Search in the clothing...'
                    className="search_input"
                    onChange={(event) => setValue(event.target.value)} 
                />
            </form>
        </div>
        <div className="searchies">
            {
                filteredClothing.map((search, index) => {
                    return (
                        <SearchItem search={search} key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Search