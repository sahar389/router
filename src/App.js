
import {Routes,Route,Navigate} from "react-router-dom";
import { useState } from 'react';
import Home from './component/Home';
import Detail from './component/Detail';


function App() {
  
  const[title,setTitle]=useState('');
  const[rating,setRating]=useState('');
  const addMovie = (newMovie) => {
    console.log(newMovie);
    movieData.push(newMovie);
  };
 
  
  return (
    <>
   <Routes>
        <Route path="/" element={<Navigate to ='/movie' />} />
        <Route path="/movie" element={<Home title={title} setTitle={setTitle} rating={rating} setRating={setRating} />} />
        <Route path="/movie/:id" element={<Detail />} />
        
    </Routes>
    
    </>
      
    
  );
}

export default App;
