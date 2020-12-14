import React ,{Component} from 'react';

import MovieCard from './movieCard.component';
import Search from './search.component';

class MovieListings extends Component{
    //state for maintaining movie response from API
    state = {
        movies:[]
    }

    componentDidMount() {
        // a default movie is made to load 
        fetch('https://www.omdbapi.com/?i=tt0071315&apikey=cc204475')
        .then(res => res.json())
        .then((data) => {
          this.setState({ movies: data })
          console.log("m1",this.state.movies)
        })
        .catch(console.log)
    }

    handleSearch(searchData){
        console.log("sd",searchData)
        this.setState({movies : searchData});
    }

    render(){
        return(
            <div>
                <div>
                    {/* passing a handler function to facilitate search bar to update parent's state */}
                    <Search handler={this.handleSearch.bind(this)}></Search>
                </div>
                <div>
                    {/* passing down the response from API as props to the movieCard Component */}
                    <MovieCard{...this.state.movies}/>
                </div>
                
            </div>
        )
    }
}

export default MovieListings;