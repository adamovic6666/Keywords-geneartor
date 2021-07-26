import classes from './MultiStepForm.module.css';
import InputWrapper from '../../../../UI/InputWrapper/InputWrapper';
import { useState } from 'react';
import Button from '../../../../UI/Button/Button';

const MultiStepForm = props => {

    const [prodKeywords, setProdKeywords] = useState('');
    const [descKeywords, setDescKeywords] = useState('');
    const [onSecondSection, isOnSecondSection] = useState(false);
    const [prodKeywordsAreValid, setProdKeywordsAreValid] = useState(true);
    const [descKeywordsAreValid, setDescKeywordsAreValid] = useState(true);
    const [keyWordsAreValid, setKeyWordsValidationValue] = useState({
        prodKeywords: true,
        descKeywords: true
    });

    const setKeywords = ev => {
        ev.target.name === "product-keywords" ? 
        validate(ev.target.value, 'prodKeywords', 1): 
        validate(ev.target.value, 'descKeywords', 2);
    }

    const validate = (val, desc, count) => {

        let isValid;

        if(props.count === count) {
            isValid = isSixWords(val, desc);
        }

        setKeyWordsValidationValue({
            ...keyWordsAreValid,
            [desc]: isValid
        });

    }

    const splitKeywords = words => {

        let resultOfSplitting = words.split(',');

        let trimmedResult = resultOfSplitting.map(item => {
            return item.trim();
        })
        let filteredResult = trimmedResult.filter(item => {
            return item;
        });

        return filteredResult;
    }


    const countWords = (inputWords, numberOfWords) => {

        let filteredResult = splitKeywords(inputWords);
        
        if(filteredResult.length < numberOfWords) {
            return true;
        } 
        return false;
        
    }

    const isSixWords = (arrayOfKeywords, desc) => {
        let keywords = countWords(arrayOfKeywords, 6);
        desc === 'prodKeywords' ? setProdKeywords(arrayOfKeywords): setDescKeywords(arrayOfKeywords);
        return keywords;
    }

    const changePageHandler = (ev, val) => {

        let pageNumber = ev.target.value;

        if(+pageNumber === 1 && keyWordsAreValid.prodKeywords && val === "NEXT") {
            return;
        }
        if(+pageNumber === 2 && keyWordsAreValid.descKeywords && val === "NEXT") {
            return;
        }
        props.onChangePageHandler(val); 
    }

    const fetchData = async (keywords) => {

        let response = await fetch('http://192.168.100.26:8000/rest/keywords/', {
            method: 'POST',
            body: JSON.stringify(keywords),
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });



        let data = await response.json();
        props.setAppKeywordsCombination(data);
    }

    const submit = ev => {

        ev.preventDefault();

        keyWordsAreValid.prodKeywords ? setProdKeywordsAreValid(false) : setProdKeywordsAreValid(true);

        if(props.count === 1) {
            return;
        }

        if(descKeywords === '' && !onSecondSection && props.count === 2) {
            isOnSecondSection(!onSecondSection);
            return;
        }

        keyWordsAreValid.descKeywords ? setDescKeywordsAreValid(false) : setDescKeywordsAreValid(true);

        if(props.count === 3) {

            let modifiedProdKeywords = splitKeywords(prodKeywords);
            let modifiedDescKeywords = splitKeywords(descKeywords);

            let keywords = {
                prodKeywords: modifiedProdKeywords,
                descKeywords: modifiedDescKeywords
            }

            props.setAllKeyWords(keywords);

            fetchData(keywords);

        }
    }

    let hidden = props.count === 3 || props.count === 0 ? {
        height: '0',
        width: '0',
        overflow: 'hidden',
        visibility: 'hidden'
    } : {}

    return <div style={hidden}>
        <p className={classes.step}>step {props.count === 1 ? '1' : '2'}</p>
        <h1 className={classes.heading}>{props.count === 1 ? 'Product' : 'Description'} keywords</h1>
        <p className={classes.para}>Sed purus urna, pretium sed neque eget, pulvinar egestas neque.</p>
        <form className={classes.form} onSubmit={ev => submit(ev)}>
            {props.count === 1 && <InputWrapper valid={prodKeywordsAreValid.toString()} value={prodKeywords} name="product-keywords" id="product-keywords" type="text" setKeys={setKeywords} />}
            {props.count === 2 && <InputWrapper valid={descKeywordsAreValid.toString()} value={descKeywords} name="description-keywords" id="description-keywords" type="text" setKeys={setKeywords} />}
            <div className={classes['button-wrapper']}>
                <Button value={props.count} styleType="prev" text="Prev" onClick={ev => changePageHandler(ev, 'PREV')}></Button>
                <Button value={props.count} type={props.count === 2 ? "submit" : ''} onClick={ev => changePageHandler(ev, 'NEXT')} styleType="next" text="Next">Next</Button>
            </div>
        </form>
    </div>
}

export default MultiStepForm;