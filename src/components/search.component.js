import React from 'react';
import '../css/search.css'

//A search Bar thats lets us search for a movie by title 

class Search extends React.Component {
   state= {
       title: '',
       listOfMovies:[]
   }

   getMoviesByTitle(searchString){
       //searching the OMDB API for title and maintaining it in components state
    fetch('http://www.omdbapi.com/?t='+ searchString +'&apikey=cc204475')
    .then(res => res.json())
    .then((data) => {
      this.setState({ listOfMovies : data })
      console.log("list-of-movies",this.state.listOfMovies)
      //updating the Parents state from child -Search component by passing a func as props to this child component
      this.props.handler(this.state.listOfMovies);
    })
    .catch(console.log)
   }

   handleSubmit = () => {
       const {title} = this.state;
       this.getMoviesByTitle(title);
      this.setState({title: ''})
   }

   handleInputTitle = (event) => {
       event.preventDefault();
       const title = event.target.value;
       this.setState({title});
   }

   render() {
       const {title} = this.state;
       return (
           <div className="search">
               <input className="search-box" type="text" onChange={this.handleInputTitle} value={title}/>
               <input className="button" type="submit" onClick={this.handleSubmit} value="Search"/>
           </div>
       )
   }
}

export default Search;