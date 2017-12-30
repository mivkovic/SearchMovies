import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import ShowMovie from '../../components/ShowMovie/ShowMovie';

import classes from './Genre.css';

const API_KEY = 'f02deaf8414ac8ce4bc6f07a89eca6c6';

class Genre extends Component {
	state = {
		movies: null,
		spinner: true
	}

	componentDidMount() {
		this.fetchMovies();
		document.body.style.backgroundImage = '';
		document.body.style.backgroundColor = 'white';
	}

	fetchMovies = () => {
		let url = `https://api.themoviedb.org/3/genre/${this.props.location.search.split('=')[1]}/movies?api_key=${API_KEY}&language=en-US&include_adult=true&sort_by=created_at.asc`;
		axios.get(url)
			.then(response => {
				let movies = response.data.results;
				this.setState({movies,spinner: false})
			})
	}

	render() {
		let movie = <Spinner />
		if(this.state.movies){
			movie = (
				<div className={classes.Genre}>
					{this.state.movies
						.map(movie => (
							<ShowMovie 
								key={movie.id} 
								movie={movie}>
							</ShowMovie>))
					}
				</div>
			);
		}

		return (
			<Wrapper>
			<h1 className={classes.Text}>Popular {this.props.match.params.genre} Movies</h1>
				 {movie}
			</Wrapper>
		);
			
	}
}

export default Genre;