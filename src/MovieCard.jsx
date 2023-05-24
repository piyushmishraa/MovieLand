import React from "react";

const MovieCard=({movie})=>{
    return (
        <div className="container">
        <div className="movie">
          <div>
            <h1>{movie.Year}</h1>
          </div>
          <div className="poster">
            <img src={movie.Poster!=='N/A' ?  movie.Poster :"https://via.placeholder.com/400"} alt={movie.Title}/>
          </div>
          <div>
          <h1>{movie.Type}</h1>
          <span>{movie.Title}</span>
          
          </div>

          
        </div>
      </div>

    )
   
}

export  default MovieCard ;