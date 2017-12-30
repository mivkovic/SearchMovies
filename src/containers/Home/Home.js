import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import ShowMovie from '../../components/ShowMovie/ShowMovie';

import classes from './Home.css';

const API_KEY = 'f02deaf8414ac8ce4bc6f07a89eca6c6';


class Home extends Component {
	state = {
		moviesTop: null,
		spinner:true,
		genres: null
	}

	componentDidMount() {
		this.fetchTopMovie();
		document.body.style.backgroundImage = '';
		document.body.style.backgroundColor = 'white';
	}

	fetchTopMovie = () => {
		let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		let url_genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

		axios.get(url)
			.then(response => {
				let movie = response.data.results;
				this.setState({
					moviesTop:movie
				})
				return axios.get(url_genres);
			})
			.then(response => {
				let genres = response.data.genres;
				this.setState({
					genres: genres,
					spinner: false
				})
			})
	}

	render() {
		let movies = (<Spinner />);
		if(this.state.moviesTop && this.state.genres){
			movies = (
				<div >
				<h1 className={classes.Text}>Genres</h1>
					<ul className={classes.Genres}>
						{
							this.state.genres.map(genre => {
								return( <Link 
									key={genre.id} 
									to={{
										pathname: '/genre/' + genre.name,
										search: '?id=' + genre.id
									}}>
										{genre.name}
									</Link>)
							})
						}
					</ul>
				<h1 className={classes.Text}>Popular Movies</h1>
				<div className={classes.PopularMovies}>
					{this.state.moviesTop
						.map(movie => (
							<ShowMovie 
								key={movie.id} 
								movie={movie}>
							</ShowMovie>))
					}
				</div>
				</div>
			)
		}
		return (
		<Wrapper>
			{movies}
		</Wrapper>)
	}

}

export default Home;