import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Search.css';
import axios from 'axios';
import FetchedMovies from '../../FetchedMovies/FetchedMovies';
const API_KEY = 'f02deaf8414ac8ce4bc6f07a89eca6c6';

class Search extends Component {
	state = {
		toggleSearch: false,
		movies: null
	}

	toggleSearch = () =>{
		if(this.state.toggleSearch){
			this.setState({movies:null, toggleSearch: false});
			this.input.value = '';
		}else{
			this.setState({toggleSearch: true})
		}
		
	}
	
	fetchMovie = (url,query) => {
		if(!query){
			axios.get(url)
			.then(response => {
				let movies = response.data.results;
				let moviesFetched = [...movies];
				this.setState({movies: moviesFetched});
			})
		}
		this.setState({movies: []})
	}

	closeFetchedMovies = () => {
		this.toggleSearch();
		this.setState({movies:null,toggleSearch: false});
		this.input.value = '';
	}

	fetchID = (query) => {
		let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
		this.fetchMovie(url, !query);
	}

	changeHandler = (e) => {
		this.fetchID(e.target.value);
	}

	render() {
		let classSearch = [classes.Search];

		if(this.state.toggleSearch){
			classSearch.push(classes['Open']);
		}
		
		return (
			<Auxiliary>
				<label htmlFor="search" className={classes.Label}>
					<i 
						className={[classes.SearchBtn,'fa', 'fa-search'].join(' ')} 
						aria-hidden="true" 
						onClick={this.toggleSearch} />
					<input 
						id='search' 
						onChange={this.changeHandler} 
						ref={(input) => this.input = input} 
						className={classSearch.join(' ')} 
						type="text"/>
					<FetchedMovies 
						closeFetchedMovies={this.closeFetchedMovies} 
						movies={this.state.movies} />
				</label>
			</Auxiliary>
		);	
			
	}
}
export default Search;