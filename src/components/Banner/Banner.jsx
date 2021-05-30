import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from "axios"
import Youtube from 'react-youtube'

const image_api = "https://image.tmdb.org/t/p/original"

function Banner() {
    const [state, setState] = useState()
    const [banner_id, setbanner_id] = useState('')
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=29be00fe03756dac4071acdd3d77e965").then(response=>{    
        setState(response.data.results[10])
        })
    },[])
    const banner_trailer=(id)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US`).then(response=>{
            setbanner_id(response.data.results[0])
        })
    }
    const opts = {
        height: '300px',
        width: '400px',
        marginleft : '200px',
        playerVars: {
          autoplay: 1 ,
        },
      };
    return (
        <div style = {{backgroundImage:`url(${state ? image_api +state.backdrop_path : ""})` }} className="banner">
            <div className="content">
                
                <h1 className="title">{state ? state.title : ""}</h1>
                <div className="banner_buttons">
                    <button onClick={()=>banner_trailer(state.id)} className="button" >Watch</button>
                    <button className="button">Add To MyList</button>
                </div>
                <h1 className="description">{state ? state.overview : ""}</h1>
            </div>
            <div className="fade_bottom">
            </div>
            <div className="yt">
            {banner_id && <Youtube  videoId={banner_id.key} opts={opts}/>}
            </div>
        </div>
        
        
    )
}

export default Banner
