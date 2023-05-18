import React from "react";
import { useEffect } from "react";
//524730dd
const URL ="http://www.omdbapi.com?apikey=524730dd"

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
        <h1>hello,react</h1>
    );
}

export default App ;