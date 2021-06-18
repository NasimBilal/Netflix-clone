import React, {useContext, useState} from 'react'
import './NavBar.css';
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {SearchContext} from '../../Context/searchContext';
import axios from 'axios';
import logo from '../../Pages/netflix-log.png';

function NavBar() {
    const history = useHistory();
    const {setId} = useContext(SearchContext);
    const [query, setQuery] = useState("");
    const handleQuery=(e)=>{
        setQuery(e.target.value);
    }
    const handleSearch=()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=29be00fe03756dac4071acdd3d77e965&language=en-US&query=${query}&page=1`)
        .then(response=>{setId(response.data.results)}).then(()=>history.push('./search'));
    }
    
    return (
        <div className="parent">
            <div className="navbar">
                <img className="logo" src={logo}  alt="netflix logo" />
                <h4 className="Home" onClick={()=>history.push('./home')}>Home</h4>
                <h4 className="TV-Shows" onClick={()=>history.push('./tv-shows')} >TV Shows</h4>
                <h4 className="Movies" onClick={()=>history.push('./movies')}>Movies</h4>
                <div className="search-box">
                    <input className="search-label" type="text" value={query} onChange={(e)=>handleQuery(e)} placeholder="Search Movies" />
                </div>
                <SearchIcon color="primary" className="search-icon" disabled={!query} onClick={handleSearch} />
                <img className="avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" width="20" height="20" alt="avatat logo" />
            </div>
        </div>
    )
}

export default NavBar;
