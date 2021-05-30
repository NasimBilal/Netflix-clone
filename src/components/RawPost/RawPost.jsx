import React from 'react'
import './RawPost.css'
import axios from 'axios'
import Youtube from 'react-youtube'



const image_api = "https://image.tmdb.org/t/p/original"
 
class RawPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            originals : [],
            action : [],
            comedy : [],
            animation : [],
            crime : [],
            scifi : [],
            document : [],
            horror : [],
            yt_id : ""
        }
    } 

    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=29be00fe03756dac4071acdd3d77e965&with_networks=213").then(response=>{
            this.setState({originals:response.data.results});
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate")
        })
        .then(response=>{
            this.setState({action:response.data.results});
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate");
        })
        .then(response=>{
            this.setState({comedy:response.data.results});
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate");
        })
        .then(response=>{
            this.setState({animation:response.data.results})
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate");
        })
        .then(response=>{
            this.setState({crime:response.data.results})
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate")
        })
        .then(response=>{
            this.setState({scifi:response.data.results})
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate")
        })
        .then(response=>{
            this.setState({document:response.data.results})
            return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate")
        })
        .then(response=>{
            this.setState({horror:response.data.results})
        })
    }

    render(){
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              autoplay: 0 ,
            },
          };
        const yt_trailer=(id)=>{
            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US`).then(response=>{
                console.log(response.data.results)
                if(response.data.results.length!==0){
                    this.setState({yt_id:response.data.results[0]})
                }else {
                    console.log(response.data)
                }
            })
        }
        return (

            <div className="row">
                <h2>NetFlix Originals</h2>
                <div className="posters">
                {
                    this.state.originals.map((item,key)=>
                    <div className="container">
                            <img className="poster_netflix" src={image_api+item.poster_path}  alt={item.title} />
                        <div className="overlay">
                            <button className="watch_netflix">Watch Now</button>
                            <div className="text">{item.overview} {item.vote_average}</div>
                        </div>
                    </div>
                )}
                </div>
                <h2>Action Movies</h2>
                <div className="posters">
                {
                    this.state.action.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button onClick={()=>yt_trailer(item.id)} className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
                { this.state.yt_id && <Youtube videoId={this.state.yt_id.key} opts={opts}/> }
                <h2>Comedy Movies</h2>
                <div className="posters">
                {
                    this.state.comedy.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
                <h2>Animation Movies</h2>
                <div className="posters">
                {
                    this.state.animation.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
                <h2>Crime Movies</h2>
                <div className="posters">
                {
                    this.state.crime.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
                <h2>Sci-Fi Movies</h2>
                <div className="posters">
                {
                    this.state.scifi.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
                <h2>Documentries</h2>
                <div className="posters">
                {
                    this.state.document.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
                <h2>Horror Movies</h2>
                <div className="posters">
                {
                    this.state.horror.map((item,key)=>
                    <div className="container">
                    <img className="poster" src={image_api+item.poster_path}  alt={item.title} />
                    <div className="overlay">
                        <button className="watch">Watch Now</button>
                        <div className="text">{item.title} {item.vote_average}</div>
                    </div>
                </div>
                )}
                </div>
            </div>
        )
    }
}

export default RawPost
