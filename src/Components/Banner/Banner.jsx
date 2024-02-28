import React, { useEffect, useState } from "react";
import './Banner.css';
import axios from "../../axios";
import { imageUrl } from "../../constants/constant";


function Banner() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmViOTI5ODNmZGYyZGNmMzU0NWU0OTFjNjg5NjFhOSIsInN1YiI6IjY1ZGVkMTBjZDVkYmMyMDE3YzU3ZTViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKK7RQwi7UqIcbpEAGKF6Qhv3hGEY07J4p_5B44REh0'
    }
  };
 const [movie,setMovie]= useState()
  useEffect(() => {
   
    axios.get('/movie/popular?language=en-US&page=1',options)
      .then((response) => {            
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        console.log(response.data);
        setMovie(response.data.results[randomIndex])
      }) 
  }, []);

  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path:""})`}}
     className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview :""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

