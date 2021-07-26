import React from 'react';
import classes from './ProductKeywords.module.css';
import Keyword from '../Keywords/Keyword';

const ProductKeywords = props => {

    let keywords;

    if(props.prodKeywords) {
        keywords = props.prodKeywords.map( keyWord => {
            return <Keyword 
                onCheck={props.onCheck}
                name={keyWord}
                key={keyWord + Math.random()}
            />
        })
    }

    return <div className={`${classes.keywords} ${classes['product-keywords']}`}>
        <div className={classes['heading-wrapper']}><span className={classes.square}></span> All product keywords</div>
        {keywords}
    </div>
}

export default ProductKeywords;