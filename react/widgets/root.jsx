import React from 'react';
import Clock from './clock';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Clock />
        <Tabs />
        <Weather />
      </div>
    );
  }
}

export default Root;