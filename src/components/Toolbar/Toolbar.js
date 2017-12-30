import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import classes from './Toolbar.css';
import Wrapper from '../../hoc/Wrapper/Wrapper';

import { withRouter } from 'react-router-dom';

const Toolbar = (props) => {
	let nav = (
	<div 
		className={classes.Nav}>
		<Search />
	</div>);

	return (
		<div className={classes.Toolbar}>
			<Wrapper>
				<div className={classes.ToolbarContent}>
					<Logo />
					{nav}
				</div>
			</Wrapper>
		</div>
	);
}

export default withRouter(Toolbar);

