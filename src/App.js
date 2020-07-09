import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import "./App.css";

// Link는 Router안에서 사용되어야 함
function App() {
  return (
    <HashRouter> 
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
   </HashRouter>
  );
}

export default App;