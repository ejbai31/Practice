import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="contain">
        <h1>Clock</h1>
        <div className="data">

        </div>
      </div>
    );
  }
}

export default Clock;