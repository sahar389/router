
import { useParams, useNavigate } from "react-router-dom";
import {  moviesData } from "../Data";
const Detail = ()=> {
  const navigate = useNavigate();
  const {id} =useParams();
 
  const movie = moviesData.find((el) => el.id == id);
  const onClick = () => navigate("/movie");
  return (
    <div className="container">
    <div className="card" style={{ width: "25%" }}>
      <p>{movie.description}</p>
      
      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button className="btn btn-primary" onClick={onClick}>
        Go Back
      </button>
    </div>
  </div>
);

};

export default Detail;