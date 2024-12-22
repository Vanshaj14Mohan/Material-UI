import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");
    let handleChange = (event) =>{
        setCity(event.target.value);
    };
    return(
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form>
            <TextField id="city" label="City Name" variant="outlined" required value={city} />
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}