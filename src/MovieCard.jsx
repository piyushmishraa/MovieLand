import React from "react";

const MovieCard=()=>{
    return (
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

    )
   
}