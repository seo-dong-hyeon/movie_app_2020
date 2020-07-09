import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';


function App() {
  // Route -> 랜더링할 스크린 주소, 해야할 일
  /* 해당되는 모든 url을 가져옴 
     http://localhost:3000/movie_app_2020#/about -> "/" -> Home 호출
                                                 -> "about" -> About 호출
  */
  // exact={true} -> 정확하게 일치하는 url만 렌더링
  return <HashRouter> 
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
}

export default App;