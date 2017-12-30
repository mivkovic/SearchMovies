import React from 'react';
import classes from './FetchedMovie.css';
import { Link } from 'react-router-dom';
import NotFound from '../../../images/pic.png';

const FetchedMovie = (props) => {
	let movie = props.movie;
	return (	
		<li className={classes.FetchedMovie} onClick={(e) => { props.closeFetchedMovies() } }>
			<img src={ movie.poster ? 'https://image.tmdb.org/t/p/w500/'+ movie.poster : NotFound} className={classes.Image} alt="Movie Poster"/>
			<Link to={'/'+movie.id}>
			{movie.name}
			</Link>
		</li>
		
	);
}

export default FetchedMovie;

