import React from 'react';
import classes from './KeyWords.module.css';
import ProductKeywords from './ProductKeywords/ProductKeywords';
import DescKeywords from './DescKeywords/DescKeywords';

const KeyWords = props => {

    const { descKeywords, prodKeywords} = props.keyWords;

    const filterAndIncludeKeyword = keyword => {console.log("ubaci")};

    const filterAndExcludeKeyword = keyword => {console.log("izbaci")};

    const checkKeywordHandler = ev => {
        ev.target.checked ? filterAndIncludeKeyword(ev.target.value) : filterAndExcludeKeyword(ev.target.value);
    }

    return <div className={classes.keywords}>
        <ProductKeywords prodKeywords={prodKeywords} onCheck={ev => checkKeywordHandler(ev)}/>
        <DescKeywords descKeywords={descKeywords} onCheck={ev => checkKeywordHandler(ev)}/>
    </div>
}

export default KeyWords;