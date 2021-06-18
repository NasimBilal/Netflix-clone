import axios from 'axios';
import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar';
import '../NavBar/NavBar.css'
import './Tvshows.css';


const image_api = "https://image.tmdb.org/t/p/original";

function Tvshows() {
    const [popular, setPopular] = useState([]);
    const [top, setTop] = useState([]);

    useEffect(() => {
         axios.get("https://api.themoviedb.org/3/tv/popular?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&page=1")
        .then(response=>{setPopular(response.data.results)})
        return axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&page=1")
        .then(response=>{setTop(response.data.results)}) 
    }, [])
    return (
        <div className="tvshows">
            <div className="tvshows-navbar">
                <NavBar/>
            </div>
            <div className="tvshows-row">
                <h2>Popular on Netflix Originals</h2>
                <div className="posters">
                {
                    popular.map((item,key)=>
                    <div className="container">
                        <img className="poster-netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <div className="text">{item.name} <br /><br /> {`Rating ${item.vote_average}`}</div>
                        </div>
                    </div>
                )}
                </div>
                <h2>Netflix Originals For Kids</h2>
                <div className="posters">
                {
                    top.map((item,key)=>
                    <div className="container">
                        <img className="poster-netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <div className="text">{item.name} <br /><br /> {`Rating ${item.vote_average}`}</div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Tvshows;
