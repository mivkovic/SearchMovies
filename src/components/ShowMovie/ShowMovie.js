import React from 'react';
import { Link } from 'react-router-dom';

import NoPic from '../../images/pic.png';

import classes from './ShowMovie.css';

const ShowMovie = (props) => {
	return (
		<Link className={classes.Movie} key={props.movie.title} to={'/'+props.movie.id}>
				<div >
					<img src={props.movie.poster_path? 'https://image.tmdb.org/t/p/w500/' + props.movie.poster_path:NoPic} alt={props.movie.title}/>
					<div className={classes.Over}>
						{props.movie.vote_average !== 0 ? <h4><i className={['fa','fa-star'].join(' ')} aria-hidden="true"></i> {props.movie.vote_average}/10</h4> : null}
						<h1>{props.movie.title.toUpperCase()}</h1>
					</div>
				</div>
		</Link>

	);

}

export default ShowMovie;