import React from "react";

const Weather = props => {
  const { temperature, humidity, city, country, description, error } = props;
  console.log(error);
  return (
    <div className="weather__info">
      {error ? (
        <p className="weather__error">{error}</p>
      ) : city && country ? (
        <>
          <p className="weather__key">
            Location:{" "}
            <span className="weather__value">
              {city}, {country}
            </span>
          </p>
          <p className="weather__key">
            Temperature: <span className="weather__value"> {temperature}</span>
          </p>
          <p className="weather__key">
            Humidity: <span className="weather__value"> {humidity}</span>
          </p>
          <p className="weather__key">
            Conditions: <span className="weather__value"> {description}</span>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Weather;
