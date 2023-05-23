import React from "react";
import { useEffect } from "react";

import './App.css';
import searchIcon from './search.svg'
//524730dd
const URL ="http://www.omdbapi.com?apikey=524730dd"

const movie1={
Poster: "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg",
Title: "Lauf um Dein Leben - Vom Junkie zum Ironman",
Type: "movie",
Year: "2008",
imdbID: "tt0954542"
}

const App= ()=>{
       const searchMovies=async(title)=>{
       const response=await fetch(`${URL}&s=${title}`) 
       const data=await response.json();
       
       console.log(data.Search);
    } 


    useEffect(()=>{
      searchMovies('ironman');
    },[])
    return(
     <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies"
        value="ironman"
        onChange={()=>{

        }}
        />
        <img
        src={searchIcon}
        alt="search"
        onClick={()=>{

        }}
        />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <h1>{movie1.Year}</h1>
          </div>
          <div className="poster">
            <img src={movie1.Poster!=='N/A' ?  movie1.Poster :"https://via.placeholder.com/400"} alt={movie1.Title}/>
          </div>
          <div>
          <h1>{movie1.Type}</h1>
          <span>{movie1.Title}</span>
          
          </div>

          
        </div>
      </div>
     </div>
        
    );
}

export default App ;