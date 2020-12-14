import React ,{Component} from 'react';
import {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactGa from 'react-ga';

import "bootstrap/dist/css/bootstrap.min.css";

import MovieListings from "./components/movieListings.component";
import MovieCrud from "./components/movieCrud.component";

import logo from "./assets/kill-bill.jpg";

class App extends Component {
  componentDidMount(){
    ReactGa.initialize('G-QQ8B8EGC87');
    ReactGa.pageview('/');
  }
  render() {
    return (
      
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"  target="_blank">
              <img src={logo} width="40" height="30" alt="The Eternal Sunshine of the Spotless mind" />
            </a>
            <Link to="/" className="navbar-brand">Movies-App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Movie Repo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/insert" className="nav-link">Add/Update Movies</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={MovieListings} />
          <Route path="/insert" component={MovieCrud} />
        </div>
      </Router>
      
    );
  }
}

export default App;
