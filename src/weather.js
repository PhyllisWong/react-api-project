import React from 'react'
import Temperature from './components/temperature'

class Weather extends React.Component {
  // console.log(this.state.weatherData)
  // Take the weather data apart to more easily populate the component
  
  render() {
    const { main, description, icon } = this.props.weatherData.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = this.props.weatherData.main 

    return (
      <div>
        <div>Title: {main}</div>
        <div>Desc: {description}</div>
        <div>Icon: {icon}</div>
        
        <Temperature temp={temp}/>
        <div>Pressure: {pressure}</div>
        <div>Humidity: {humidity}</div>
        <div>Temp Min: {temp_min} Max:{temp_max}</div>
      </div>
    )
  }
};

export default Weather;