import React from 'react';
import PropTypes from 'prop-types';

// class component -> rendor 메소드 구현
// state -> object -> component의 date -> 가변적
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState({count: this.state.count + 1}); // setState -> 새로운 state refresh -> rendor 호출
    //this.setState(current => ({count: current.count + 1})); 의존x
  };
  sub = () => {
    this.setState({count: this.state.count - 1}); // setState -> 새로운 state refresh -> rendor 호출
    //this.setState(current => ({count: current.count - 1}));
  };

  /* life cycle */
  constructor(props){ // Javascript
    super(props)
    console.log("constructor");
  }
  componentDidMount(){
    console.log("component did mount");
  }
  componentDidUpdate(){
    console.log("component did update");
  }

  render(){
    console.log("rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
      </div>
    )
  }
}

export default App;
