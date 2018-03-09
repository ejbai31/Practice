import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
  }

  tick(){
    this.setState({
      time: new Date()
    });
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