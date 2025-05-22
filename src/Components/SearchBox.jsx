import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1680045a7c5054fc3040ba7d90991c70";

  const getWeatherInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return {
        city: city,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description
      };
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getLocation = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city === "") {
      setError("Please enter a city name");
      return;
    }
    setError(null);
    setCity("");
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    }
  };

  return (
    <>
      <div className="container">
        <h1> Search Here For Weather updates </h1>
        <label>City Name : </label>
        <input type='text' placeholder='placename' value={city} onChange={getLocation}></input>
        <br />
        <button id='btn' onClick={handleSubmit} disabled={loading}>Search</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
}


// export default function SearchBox({ updateInfo}) {

// let [city,setCity] = useState("");

// const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "1680045a7c5054fc3040ba7d90991c70";

// let getWeatherInfo = async () => {
//     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//     let data = await response.json();
//     console.log(data);
//     let result = {
//         city : city,
//         temp : data.main.temp,
//         tempMax : data.main.temp_max,
//         tempMin : data.main.temp_min,
//         humidity : data.main.humidity,
//         wind : data.wind.speed,
//         feelsLike : data.main.feels_like,
//         weather : data.weather[0].description
//     }
//     console.log(result);
//     return result;
// }

//   let getLocation = (e) => {
//     setCity(e.target.value);
//   }

//  let handleSubmit= async(e)=> {
//   e.preventDefault();
//   if(city === ""){
//     alert("Please enter a city name");
//   }
//  console.log(city);
//  setCity("");
//    let newInfo = await getWeatherInfo();
//    updateInfo(newInfo);
//  }

//   return (
//     <>
//     <div className="container">
//     <h1> Search Here For Weather updates </h1>
//     <label>City Name : </label>
//     <input type='text' placeholder='placename' value={city} onChange={getLocation}></input>
//     <br/>
//     <button id='btn' onClick={handleSubmit}>Search</button>
//    </div>
   
//    </>
//   )
// }  