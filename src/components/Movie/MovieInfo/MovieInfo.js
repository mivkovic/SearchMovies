import React from 'react';
import classes from './MovieInfo.css';

const MovieInfo = (props) => {
	let movie = props.movie;

	let genres = movie.genres.map((genre) => {
		return <span key={genre.name}> {genre.name} </span>;
	});

	return (
		<div className={classes.MovieInfo}>
			<h1>{movie.title}</h1>
			<p className={classes.Desc}>{movie.desc}</p>
			
			<p>
				<span>{movie.language}</span>
				<span style={{color:'#00d474',margin: '0px 10px'}}> | </span>
				<span>{movie.runtime}min</span>
				<span style={{color:'#00d474',margin: '0px 10px'}}> | </span>
				<span>
					{genres}
				</span>
				<span style={{color:'#00d474',margin: '0px 10px'}}> | </span>
				<span>{movie.release}</span>
				<span><a className={classes.Imdb} href={'http://www.imdb.com/title/'+ movie.imdb} target="_blank">IMDB</a></span>
			</p>
			
		</div>
	);

}

export default MovieInfo;