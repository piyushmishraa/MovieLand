import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import searchIcon from './search.svg'
//524730dd
const URL ="http://www.omdbapi.com?apikey=524730dd"
 // eslint-disable-next-line
 const movie1={
Poster: "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg",
Title: "Lauf um Dein Leben - Vom Junkie zum Ironman",
Type: "movie",
Year: "2008",
imdbID: "tt0954542"
}

const App= ()=>{
       const[searchTerm,setSearchTerm]=useState('');
       const [movies,setmovies]=useState([]);
       const searchMovies=async(title)=>{
       const response=await fetch(`${URL}&s=${title}`) 
       const data=await response.json();
       
      setmovies(data.Search);
    } 


    useEffect(()=>{
      searchMovies('ironman');
    },[])
    return(
     <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value) 

        }
        />
        <img
        src={searchIcon}
        alt="search"
        onClick={()=>searchMovies(searchTerm)

        }
        />
      </div>
      {
        movies?.length>0
        ?(
          <div className="container">
          { movies.map((movie)=>(
           <MovieCard movie={movie} />
          ))}
          </div>
        ) : (
          <div className="empty">
            <h1>No movie found</h1>
          </div>
        )
      }
    
     
     </div>
        
    );
}

export default App ;