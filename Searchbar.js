import { useState } from "react";
import axios from "axios";
// import "../assets/css/searchbar.css";



function App() {

    const [titleState, setTitleState] = useState("Enter a movie title below");
    const [data, setData] = useState("");
    const fetchMovie = async () => {

        const { data } = await axios.get(

            //api key here

            "http://www.omdbapi.com/?i=tt3896198&apikey=682f64da&t=" + titleState

        );

        setData(data);

    };
    
    return (
   <div>

<div className="b-example-divider bg-dark"></div>

<div className="bg-dark text-secondary px-4 py-5">
  
  
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-center">
  <div className="col-lg-4 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-center">
  <div className="col-lg-7 d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
     
      <img src={data.Poster} alt="The poster"></img>
        </div>
        </div>

    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 border shadow mb-4">
      
      <h2 className="display-4 fw-bold lh-1">Pick a Film</h2>
      
      <p className="lead fw-bold" > 
      <input type="text" onChange={(e) => setTitleState(e.target.value)}></input>
      </p>
      
      <p className="lead">   <button onClick={(e) => fetchMovie(e)}>Search</button> </p>
            
      <p className="lead"> <h2>{data.Title}</h2></p>
      
      <p className="lead"> <h5>Release date: {data.Released}</h5></p>
      <p className="lead"> <h4>Director: {data.Director}</h4></p>
      <p className="lead"> <h4>{data.Genre}</h4></p>
      <p className="lead"> <h4>{data.Plot}</h4></p>
      <p className="lead"><h6>Classified: {data.Rated} | IMdb Rating: {data.imdbRating}</h6></p>

      
      </div>
      
     
      
      </div>
      </div>

<div className="b-example-divider bg-dark"></div>

    </div>
   
  )
}




export default App;