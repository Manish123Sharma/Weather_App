import React from 'react'
import PropTypes from 'prop-types';
import WeatherCloud from '../assets/weather-cloudy.png'

const WeatherCard = ({ weatherDetails }) => {
    // console.log(weatherDetails);
    return (
        <div className="waether_section">
            <div className="weather_card">
                <div className="weather_tempc">
                    {weatherDetails.current.temp_c} <sup>o</sup>
                </div>
                <div className="weather_info">
                    <span>
                        🌈 {weatherDetails.current.humidity}
                    </span>
                    <span>
                        🌥️ {weatherDetails.current.cloud}
                    </span>
                </div>
                <div className="weather_place">
                    {weatherDetails.location.name}, {weatherDetails.location.region}, {weatherDetails.location.country}
                </div>
                <div className="weather_avatar">
                    <img src={WeatherCloud} alt="" />
                </div>
            </div>
        </div>
    )
}
WeatherCard.propTypes = {
    weatherDetails: PropTypes.shape({
        current: PropTypes.shape({
            temp_c: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
            cloud: PropTypes.number.isRequired,
        }).isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired,
            region: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default WeatherCard;
