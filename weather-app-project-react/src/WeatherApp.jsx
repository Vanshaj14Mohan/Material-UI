import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Tokyo",
        feelsLike: 17.38,
        humidity: 61,
        temp: 17.94,
        tempMax: 17.94,
        tempMin: 17.94,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };


    return(<div style={{textAlign: "center"}}>
    <h2>Weather App by Vanshaj</h2>
    <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>)
}