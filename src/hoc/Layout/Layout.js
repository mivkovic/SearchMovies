import React from 'react';
import Auxiliary from '../Auxiliary';

import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = (props) => {

	return (
		<Auxiliary>
			<Toolbar />
			{props.children}
		</Auxiliary>
	);

}

export default Layout;