import React, { Component } from 'react';
import axios from 'axios'; 

import Movie from '../../components/Movie/Movie';
import Spinner from '../../components/UI/Spinner/Spinner';

const API_KEY = 'f02deaf8414ac8ce4bc6f07a89eca6c6';

class Movies extends Component {

	state = {
		spinner: true,
		movie: null
	}

	componentDidMount = () => {
		this.fetchMovie(this.props.match.params.id);
	}

	componentDidUpdate = () => {
		this.fetchMovie(this.props.match.params.id);

		document.body.style.backgroundImage = '';
		document.body.style.backgroundColor ='rgba(0,0,0,0.5)';

		if(this.state.movie.backdrop){
			document.body.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${this.state.movie.backdrop}')`;
			document.body.style.backgroundSize = 'cover';
			document.body.style.backgroundPosition = 'center center';
		}
	}

	fetchMovie = (id) => {
		let url = `https://api.themoviedb.org/3/movie/${ id }?api_key=${API_KEY}`;
		
		if(!this.state.movie || ( this.state.movie && this.state.movie.id !==  +this.props.match.params.id )){
			axios.get(url)
				.then(response => {
					let movie = response.data;
					this.setState(
						{
					movie: {
						title: movie.original_title,
						language: movie.original_language,
						desc: movie.overview,
						imdb: movie.imdb_id,
						genres: movie.genres,
						budget: movie.budget,
						poster: movie.poster_path,
						runtime: movie.runtime,
						tagline: movie.tagline,
						release: movie.release_date,
						id: movie.id,
						backdrop: movie.backdrop_path
					},
					spinner:false}
					)
				})
			}
		
	}


	render() {
		let movie = <Spinner />

		if(this.state.movie){
			movie = <Movie 
				{...this.props}  
				movieID={this.state.movieID} 
				movie={this.state.movie} />;
		}

		return (movie);
	}

}

export default Movies;