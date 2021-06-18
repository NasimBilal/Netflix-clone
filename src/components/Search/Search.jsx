import React, {useContext, useState} from 'react';
import {SearchContext} from '../../Context/searchContext';
import './Search.css'
import NavBar from '../NavBar/NavBar';

const image_api = "https://image.tmdb.org/t/p/original"

function Search() {
    const {id} = useContext(SearchContext);
    console.log(id);
    return (
        <div className="search">
            <div className="search-navbar">
                <NavBar/>
            </div>
            <h3 className="search-caption"> Search Results : </h3>
            <div className="search-results">
                {
                    id.map((item)=>
                    <div className="search-poster">
                        <img className="search-img" src={image_api+item.poster_path}  alt={item.title} />
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Search
