import React from 'react';

class Headers extends React.Component {
  render(){
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if(index === selected) {
        klass = 'active';
      }
      return (
        <li
          key = {index}
          className = {klass}
          onClick = {this.props.onTabChosen.bind(null, index)}
        >
        {title}
        </li>
      );
    });
    return(
      <ul className='header'>
        {headers}
      </ul>
    );
  }
}

export default class Tabs extends React.Componet{
  constructor(props){
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }
  
  selectTab(num){
    this.setState({selectedPane: num});
  }

  render(){
    let pane = this.props.panes[this.state.selectedPane];
    return(
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selecTab}
            panes={this.props.panes}
            >
          </Headers>
          <div className='tab-content'>
            <p>
              {pane.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}