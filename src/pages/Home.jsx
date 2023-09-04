import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar'

const Home = () => {

const nav = useNavigate()

const handleSearchClick = () => {
    nav("/jobs")
}

const handleHireClick = () => {
    nav("/post")
}

  return (
    <div className='home'>
        <Navbar />
        <h1>Hire Peope Or Get Hired</h1>

        <div className='container'>
            <div className='box'>
                <button onClick={handleSearchClick}>Search Jobs</button>

            </div>
            <div className='box'>
                <button onClick={handleHireClick}>Hire Peoples</button>
            </div>
        </div>


    </div>
  )
}

export default Home