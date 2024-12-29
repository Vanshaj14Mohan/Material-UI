//Gonna be our information box
export default function InfoBox(){
   let info = {
    feelsLike: 17.38,
    humidity: 61,
    temp: 17.94,
    tempMax: 17.94,
    tempMin: 17.94,
    weather: "clear sky",
   };

    return(
        <div className="Info">
        <h2>Weather Information</h2>
        </div>
    );
}