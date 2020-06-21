import React from 'react';

import '../css/movieCard.css'

//A simple movie component containing the basic details.

class MovieCard extends React.Component {
   render() {
       const {Title, Poster, Year, Actors,Awards, Director,Genre,
        Plot,Response,Runtime,imdbRating} = this.props;
       
        return (
           
           <div className="movie">
                
               <div className="title-year">
                   <h1 className="title">Title : {Title}</h1>
                   <h2 className="year">Released : {Year}</h2>
               </div>
               <div className="poster">
                   <div className="row">
                       <div className="col-md-4">
                            <img src={Poster}  alt="my movie poster"/>
                       </div>
                       <div className="col-md-8">
                            <p>Actors : {Actors}</p>
                            <p>Director : {Director}</p>
                            <p>Genre : {Genre}</p>
                            <p>Awards : {Awards}</p>
                            <p>Plot : {Plot}</p>
                            <p>Runtime : {Runtime}</p>
                            <p>imdbRating : {imdbRating}</p>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}

export default MovieCard;