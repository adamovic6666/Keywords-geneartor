import React from 'react';
import classes from './Keyword.module.css';

const Keyword = props => {
    return <div className={classes['keyword-wrapper']}>
        <input className={classes.checkbox} type="checkbox" onChange={props.onCheck} value={props.name} />
        <span className={classes.name}>{props.name}</span>
    </div>
}

export default Keyword;