import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
 const{title,description,posterURL,id}=movie
  return (
    <div className="card" >
    <img src={posterURL} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <div>
      <Link to={`/movie/${id}`}>view detail</Link>
      </div>
    </div>

   
    
  </div>
  )
}

export default MovieCard