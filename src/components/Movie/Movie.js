import React, { Component } from 'react';
import NoPic from '../../images/pic.png';
import MovieInfo from './MovieInfo/MovieInfo';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Movie.css';
import Spinner from '../UI/Spinner/Spinner';

class Movie extends Component {

	render() {
		let movie = (
			<div className={classes.Movie}>
				<img 
					src={NoPic} 
					className={classes.Picture}  
					alt={this.props.movie.name}/>
				<MovieInfo 
					className={classes.Content} 
					movie={this.props.movie}/>
			</div>
			);

		if(this.props.movie.poster){
			movie = (<div className={classes.Movie}>
				<img 
					src={'https://image.tmdb.org/t/p/w500/'+ this.props.movie.poster} 
					className={classes.Picture}  
					alt={this.props.movie.name}/>
				<MovieInfo 
					className={classes.Content} 
					movie={this.props.movie}/>
			</div>
			);
		}
			
		if(!this.props.movie){
			movie = <Spinner />
		}
		
		return (
			<Auxiliary>
				{movie}
			</Auxiliary>		
		);
	}
	

} 
	



export default Movie;