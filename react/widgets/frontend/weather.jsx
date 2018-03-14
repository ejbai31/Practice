import React from 'react';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather: null
    };
  }


  render(){
    let content = <div></div>;
    if(this.state.weather){
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)} degrees</p>
                </div>;
    } else {
      content = <div className='loading'>LOADING...</div>;
    }
    return(
      
      <div>
        <h1>Weather</h1>
        {content}
      </div>
    );
  }
}