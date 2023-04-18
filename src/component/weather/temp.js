import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './weatherCard';


const Temp = () => {

    const [searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] = useState({});

 const getWeatherInfo = async () => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=5abeb749470640c5cd3325145fe622ee`;
            const res = await fetch( url);
            const data = await res.json();
            console.log(data);
            const {temp, pressure, humidity} = data.main;
            const { main : weatherMood } = data.weather[0]; 
            const {speed} = data.wind;
            const {name} = data;
            const {country, sunset} = data.sys;

            const myNewWhether = {
                temp,
                pressure,
                humidity,
                weatherMood,
                speed,
                name,
                country,
                sunset
            }

            setTempInfo(myNewWhether);
        }catch(err){
            console.log(err);
        }
 }

 useEffect(() => {
    getWeatherInfo();
 }, []);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input type="search"
            placeholder="Search"
            autoFocus
            id="search"
            className='searchTerm'
            value={ searchValue }
            onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className='searchButton' type="button" onClick={getWeatherInfo}>
                Search
            </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp
