import React from 'react';
import logo from '../../../images/logo.png';
import classes from './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => (
	<Link to='/'><img className={classes.Logo} src={logo} alt="Logo"/></Link>
);

export default Logo;