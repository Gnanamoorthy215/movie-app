import React , {Component} from 'react';

import "../css/movieCrud.css"

class MovieCrud extends Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            plot: '',
            released: '',
            runtime: ''
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePlot = this.onChangePlot.bind(this);
        this.onChangeReleased = this.onChangeReleased.bind(this);
        this.onChangeRuntime = this.onChangeRuntime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangePlot(e) {
        this.setState({
            plot: e.target.value
        });
    }

    onChangeReleased(e) {
        this.setState({
            released: e.target.value
        });
    }

    onChangeRuntime(e){
        this.setState({
            runtime : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const newMovie = {
            title: this.state.title,
            plot: this.state.plot,
            released: this.state.released,
            runtime: this.state.runtime
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie)
        };
        fetch('http://localhost:4000/movies/add', requestOptions)
            .then(response => response.json())
        
        this.setState({
            title: '',
            plot: '',
            released: '',
            runtime: ''
        })
    }
    
    render(){
        return (
            <div className="movieForm">
                <h3>Create New Movie entity</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Plot: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.plot}
                                onChange={this.onChangePlot}
                                />
                    </div>
                    <div className="form-group">
                    <label>Released: </label>
                        <input 
                                type="number"
                                min="1900"
                                max="2020" 
                                className="form-control"
                                value={this.state.released}
                                onChange={this.onChangeReleased}
                                />
                    </div>

                    <div className="form-group">
                    <label>Runtime: </label>
                        <input 
                                type="text"
                                className="form-control"
                                value={this.state.runtime}
                                onChange={this.onChangeRuntime}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default MovieCrud;