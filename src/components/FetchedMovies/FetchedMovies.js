import React from 'react';
import FetchedMovie from './FetchedMovie/FetchedMovie';
import classes from './FetchedMovies.css';

const FetchedMovies = (props) => {
	let displayMovie = null;

	if(props.movies) {
		displayMovie = (
			props.movies
			.splice(0,6)
			.map(movie => {
				return {
					name: movie.original_title,
					id: movie.id,
					poster: movie.poster_path
				};			
			})
			.map(movie => {
					return <FetchedMovie closeFetchedMovies={props.closeFetchedMovies} key={movie.id} movie={movie} />
				})
		);
	}

	return (

		<ul className={classes.FetchedMovies}>
				{displayMovie}
		</ul>
	);
}

export default FetchedMovies;
