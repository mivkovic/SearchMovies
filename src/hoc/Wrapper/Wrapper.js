import React from 'react';

import classes from './Wrapper.css';

const Wrapper = (props) => (<div className={classes.Wrapper}>{props.children}</div>)

export default Wrapper;