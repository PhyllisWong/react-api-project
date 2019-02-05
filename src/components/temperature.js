/*
- **Temperature component**. Create a component whose sole task is to display the temperature. 
    You should pass the temperature into the component as a prop and the component should display it. 
  - Bonus! The temperature is supplied in kelvin. Your Temperature component should be able to display 
    the temperature as fahrenheit. The formula is: `300K × 9/5 - 459.67`. 
  - Stretch goal! Temperature component takes a parameter `isMetric` if this is true the component converts 
    the temperature from Kelvin to Celsius.
*/

import React, { Component } from 'react'
import './temperature.css'

class Temperature extends Component {

  convertKelvinToFahrenheit = (kelvin) => {
    // Celsius is 273 degrees less than Kelvin
    const celsius = kelvin - 273;

    // Calculating Fahrenheit temperature to the nearest integer
    let fahrenheit = Math.floor(celsius * (9/5) + 32);

    // Displaying the temperature using string interpolation
    console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
    return fahrenheit
  }

  render() {
    const kelvin = this.props.temp;

    return (
      <div className='temp-container'>
        <h1 className='temp'>fahrenheit: {this.convertKelvinToFahrenheit(kelvin)}</h1>
      </div>
      
    )
  }
}

export default Temperature