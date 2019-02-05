
import React, { Component } from 'react'
import Weather from './weather'
import './App.css';

/** 
 * This example illustrates a simple react project 
 * that works with an external API. 
 * 
 * Take note of the comments they point common 
 * problems you will need to solve with React. 
 * 
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components 
 * 
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component. 
 * 
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputZipcode: null,     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  handleSubmit(e) {
    e.preventDefault()     
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    // Get the zip from the input
    const zip = this.state.inputZipcode
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    // Get data from the API with fetch
    fetch(url).then(res => {     
      return res.json()
    }).then((json) => {    
      // If the request was successful assign the data to component state
      if (json.cod === 200) {
        this.setState({ weatherData: json })
      } else {
        // It's possible to get a valid JSON response that is not weather 
        // data, for example when a bad zip code entered.
        alert('You MUST enter a valid zipcode');
      }      
    }).catch((err) => {
      // If there is no data 
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      console.log('-- Error fetching --', err.message)
      // You may want to display an error to the screen here. 
    })
  }

  renderWeather() {
    // This method returns undefined or a JSX component
    if (!this.state.weatherData) {
      // If there is no data return undefined
      return null
    } 
    return <Weather weatherData={this.state.weatherData} />
  }
  /* 
  This next step needs another level of error checking. It's 
  possible to get a JSON response for an invalid zip in which 
  case the step below fails. 
  */ 

  render() {
    return (
      <div className="App">

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
            value={this.state.inputZipcode} 
            onChange={e => this.setState({ inputZipcode: e.target.value })}
            type="text" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />

          <button type="submit">Submit</button>

        </form>

        {/** Conditionally render this component */}
        {this.renderWeather()}

      </div>
    );
  }
}

export default App;
