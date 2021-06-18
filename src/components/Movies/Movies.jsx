import axios from 'axios';
import React,{useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import './Movies.css';
import YouTube from 'react-youtube';

const image_api = "https://image.tmdb.org/t/p/original"

function Movies() {
    const [top, setTop] = useState([]);
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [now, setNow] = useState([]);
    const [movie_id, setMovie_id] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const RespPopular = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&page=1")
            const RespNow = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&page=1")
            setPopular(RespPopular.data.results);
            setNow(RespNow.data.results);
        };
        fetchData();

        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&page=1")
        .then(response=>{setTop(response.data.results)});
        return axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=29be00fe03756dac4071acdd3d77e965")
        .then(response=>{setTrending(response.data.results)});
    }, [])

    const movie_trailer=(id)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US`).then(response=>{
            setMovie_id(response.data.results[0])
        })
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0 ,
        },
    };

    return (
        <div className="movies">
            <div className="movies-navbar">
                <NavBar/>
            </div>
            <div className="movies-row">
                <h2>Top Rated on Netflix</h2>
                <div className="posters">
                {
                    top.map((item,key)=>
                    <div className="container">
                        <img className="poster-netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <button onClick={()=>movie_trailer(item.id)} className="movies-watch">Watch Trailer</button>
                        <div className="text">{item.title} <br /><br /> {`Rating ${item.vote_average}`}</div>
                    </div>
                    </div>
                )}
                </div>
                { movie_id && <YouTube videoId={movie_id.key} opts={opts} />}
                <h2>Trending</h2>
                <div className="posters">
                {
                    trending.map((item,key)=>
                    <div className="container">
                        <img className="poster-netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <div className="text">{item.title} <br /><br /> {`Rating ${item.vote_average}`}</div>
                        </div>
                    </div>
                )}
                </div>
                <h2>Popular Movies</h2>
                <div className="posters">
                {
                    popular.map((item,key)=>
                    <div className="container">
                        <img className="poster-netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <div className="text">{item.title} <br /><br /> {`Rating ${item.vote_average}`}</div>
                        </div>
                    </div>
                )}
                </div>
                <h2>Now On Theaters</h2>
                <div className="posters">
                {
                    now.map((item,key)=>
                    <div className="container">
                        <img className="poster-netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <div className="text">{item.title} <br /><br /> {`Rating ${item.vote_average}`}</div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Movies;
