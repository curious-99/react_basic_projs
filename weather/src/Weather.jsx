import React, { useState } from 'react'
import './Weather.css'

const api = {
    key : "e1504bedcdabcc510ed8cd70b23b083e",
    base :"https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState();

    const search = async evt => {
        if(evt.key === 'Enter'){
            const res = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            const data = await res.json()
            setWeather(data);
            setQuery('');
            console.log(weather);
        }
    }

    const dateBuilder = (d) => {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];

          let day = days[d.getDay()];
          let date = d.getDate();
          let month = months[d.getMonth()];
          let year = d.getFullYear();

          return `${day} ${date} ${month} ${year}`
    }

  return (
    <div>
      <main>
        <div className='search-box'>
            <input type='text' className='search-bar' placeholder='Search...'
                value = {query}
                onChange={e => setQuery(e.target.value) }
                onKeyPress={search}
            />
        </div>

        {(weather && weather.name==undefined) && <div>{weather.message}</div>}
        {(weather && weather.name!=undefined) && 
        <div>
            <div className='location-box'>
                <div className='location'>
                    {weather.name} , {weather.sys.country}
                    <div className='date'>
                        {dateBuilder(new Date())}
                    </div>
                </div>
                <div className='weather-box'>
                    <div className='temp'>
                        {Math.round(weather.main.temp)}°c
                    </div>
                    <div className='weather'>
                        {weather.weather[0].main}
                    </div>
                </div>
            </div>
        </div>
        }

      </main>
    </div>
  )
}

export default Weather
