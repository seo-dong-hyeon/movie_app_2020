import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  // 비동기 처리 -> await 작업이 끝날때까지 기다려
  getMovies = async () =>{
    //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json"); movies.data.data.movies
    const {data : {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false}); // movies: movies
  }
  componentDidMount(){
    /*setTimeout(() =>{
      this.setState({isLoading: false});
    },6000)*/
    this.getMovies();
  };
  
  render(){
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}   
        />
      )
    })}</div>
  }
}

export default App;
