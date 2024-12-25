//Using Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1ec3f718d37c7ecf8bd2cd370bb03ec0";

    let getWeatherInfo = () =>{
        
    }

    let [city, setCity] = useState("");

    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit = (event) =>{
        event.preventDefault(); //to prevent default behavior of event object
        console.log(city);
        setCity("");
    };

    return(
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}