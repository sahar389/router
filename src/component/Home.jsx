import React from 'react'
import MovieList from './MovieList'
import Filter from './Filter'
import Rating from './Rating'
import { moviesData } from '../Data';

const Home = ({title,setTitle,rating,setRating}) => {
  return (
    <>
    
    <Filter title={title} setTitle={setTitle} />
    <Rating rating={rating} setRating={setRating}/>
    <MovieList moviesData={moviesData} title={title} setTitle={setTitle}/>
   

    </>
  )
}

export default Home