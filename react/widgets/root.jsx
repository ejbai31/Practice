import React from 'react';
import Clock from './frontend/clock';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Clock />
      </div>
    );
  }
}

export default Root;