//import React from 'react'

export default function Card({info}) {
    return (
      <>
        <div className="card-container">
          <div className="card" style={{ width: '18rem' }}>

            <img
              src="./nature.jpg"
              alt="Card Image"
            />
    
            <div className="card-body">
            <h1>{info.city}</h1>
              <p className="card-text">
               <div>Temperature : {info.temp}°C </div>
               <div>Humidity : {info.humidity}°C</div>
               <div>Minimun Temperature: {info.tempMin}°C</div>
               <div>Maximum Temperature : {info.tempMax}°C</div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  