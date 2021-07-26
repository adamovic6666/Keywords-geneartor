import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import Result from './Result/Result';

const Results = props => {

    const [results, setResults] = useState([]);
    let result;

    useEffect(() => {
        if(props.keywordsCombination) {
            let data = props.keywordsCombination.map( arrays => {
                return arrays[1];
            });
            setResults(data);
        }
    },[props.keywordsCombination])

    if(results) {
        result = results.map( result => {
            return <Result 
                id={result + Math.random()}
                result={result}
            />
        })
    }

    return <div className={classes.results}>
        <h2 className={classes.heading}>Results({results.length})</h2>
        <div className={classes["result-grid__wrapper"]}>
            {result}
        </div>
    </div>
}

export default Results;