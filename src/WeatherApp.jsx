
import SearchBox from './Components/SearchBox'
import Card from './Components/Card';
import { useState } from 'react';

export default function WeatherApp() {
  const [weatherInfo,setWeatherInfo] = useState({
      city : "Delhi",
      temp : 35,
      tempMax : 40,
      tempMin : 20,
      humidity : 39,
      wind : 19 ,
      feelsLike : "warm",
      weather : 20.6
  })
  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <Card info={weatherInfo} />
    </div>
  )
}
