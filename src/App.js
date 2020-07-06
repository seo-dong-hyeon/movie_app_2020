import React from 'react';

// react magic -> props 처리
// function Food(props)
// props -> object -> 속성으로 전달한 값들
function Food({fav}){
  return <h3>I love {fav}!!!</h3>
}

// kimchi란 prop 전달
function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi" /> 
      <Food fav="ramen" /> 
      <Food fav="gogi" /> 
    </div>
  );
}

export default App;
