import React from 'react';
import classes from './DescKeywords.module.css';
import Keyword from '../Keywords/Keyword';

const DescKeywords = props => {

    let keywords;

    if(props.descKeywords) {
        keywords = props.descKeywords.map( keyWord => {
            return <Keyword 
                onCheck={props.onCheck}
                name={keyWord}
                key={keyWord + Math.random()}
            />
        })
    }

    return <div className={`${classes.keywords} ${classes['description-keywords']}`}>
        <div className={classes['heading-wrapper']}><span className={classes.square}></span> All description keywords</div>
        {keywords}
    </div>
}

export default DescKeywords;