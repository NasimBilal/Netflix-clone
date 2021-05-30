import React from 'react'
import './NavBar.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {FcSearch} from 'react-icons/fc'

const image_api = "https://image.tmdb.org/t/p/original"

function NavBar() {
    const [text, settext] = useState("")
    const [search, setsearch] = useState("")
    const [Id, setId] = useState([])
    const [movie_id, setmovie_id] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/company?api_key=29be00fe03756dac4071acdd3d77e965&query=${search}&page=1`).then(response=>{    
        console.log(response.data.results)
        setId(response.data.results)
        })
    })
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Id.id}?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US`).then(response=>{
        console.log(response.data)
        setmovie_id(response.data)
        })
    })
    return (
        <div className="parent">
            <div className="navbar">
                <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"  alt="netflix logo" />
                <h4 className="Home">Home</h4>
                <h4 className="TV-Shows">TV Shows</h4>
                <h4 className="Movies">Movies</h4>
                <input className="box" onChange={(event)=>settext(event.target.value)} maxLength="6" size="12" type="text" placeholder="Enter Movie.." />
                <FcSearch onClick={()=>setsearch(text)} className="icon"/>
                <img className="avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" width="20" height="20" alt="avatat logo" />
            </div>
            <div className="search-results">
                <div className="container">
                    <img src={image_api+movie_id.poster_path} alt="" className="posters" /> 
                </div>
            </div>
        </div>

    )


}

export default NavBar
