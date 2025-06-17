import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import './App.css'

const App = () => {
    const [weatherDetails, setWeatherDetails] = useState(null);
    return (
        <div className='app'>
            <div className='app_container'>
                <Header />
                <Search setWeatherDetails={setWeatherDetails} />
                {weatherDetails && <WeatherCard weatherDetails={weatherDetails} />}
                {/* <WeatherCard /> */}
                <Footer />
            </div>
        </div>
    )
}

export default App
