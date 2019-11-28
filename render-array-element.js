import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const AUx = (props) => props.children;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  users = [{name:'ABC', age:24},{name:'GHUI', age:29},{name:'XYZ', age:32}]

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        {(this.users || []).map((x, index, usersArray) => {
          return(
            <AUx key={index}>
            <div>Index : {index}</div>
            <div>{x.name}</div>
            <div>{x.age}</div>
            <br />
            </AUx>
          )
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
