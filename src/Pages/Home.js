import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import RawPost from '../components/RawPost/RawPost';
import Banner from '../components/Banner/Banner';
import './home.css'

function Home() {
    return (
        <div className="home">
            <NavBar/>
            <Banner/>
            <RawPost/>
        </div>
    )
}

export default Home
