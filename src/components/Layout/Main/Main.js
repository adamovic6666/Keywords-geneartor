import classes from './Main.module.css';
import Card from '../../../UI/Card/Card';
import FirstSection from './FirstSection/FirstSection';
import MultiStepForm from './MultiStepForm/MultiStepForm';
import KeywordsGenerator from './KeywordsGenerator/KeywordsGenerator';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import { useState } from 'react';

const Main = props => {

    const [count, setNewPage] = useState(0);
    const [allKeyWords, setAllKeyWords] = useState([]);
    const [keywordsCombination, setAllKeywordsCombinations] = useState([]);

    const openFirstPageHandler = val => {
        setNewPage(val)
    }

    let newVal = count;

    const setAllKeyWordsHandler = allWords => {
        setAllKeyWords(allWords)
    }

    const keywordsCombiinations = combinations => {
        setAllKeywordsCombinations(combinations)
    };

    const setNewPageHandler = val => {

        if(val === 'PREV') {
            newVal -= 1;
            setNewPage(newVal);
        }

        if(val === 'NEXT') {
            if(newVal >= 3) {
                return;
            }
            newVal += 1;
            setNewPage(newVal);
        }
    }

    let multiStepForm = count === 0 || count === 1 || count === 2 || count === 3 ? 
    <MultiStepForm 
        count={count} 
        onChangePageHandler={setNewPageHandler}
        setAllKeyWords={setAllKeyWordsHandler}
        setAppKeywordsCombination={keywordsCombiinations}
    /> : null;

    return (
        <div className={classes.main}>
            <Card>
                { count === 0 && <FirstSection 
                    onClickSetFirstPageHandler={openFirstPageHandler}/>}
                { multiStepForm }
                { count === 3 && <KeywordsGenerator
                    allKeywords= {allKeyWords} 
                    keywordsCombination= {keywordsCombination}
                    onChangePageHandler={setNewPageHandler}/>}
            </Card>
            <ProgressBar progressBarChange={count}/>
        </div>
    );
};

export default Main;