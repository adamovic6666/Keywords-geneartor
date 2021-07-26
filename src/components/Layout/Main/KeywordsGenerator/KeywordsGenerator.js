import Button from '../../../../UI/Button/Button';
import classes from './KeywordsGenerator.module.css';
import Results from './Results/Results';
import KeyWords from './KeyWords/KeyWords';

const KeywordsGenerator = props => {

    const changePageHandler = (ev, val) => {
        props.onChangePageHandler(val); 
    }

    return <div className={classes['keyword-generator__wrapper']}>
        <p className={classes.step}>step 3</p>
        <h1 className={classes.heading}>Potential keywords</h1>
        <p className={classes.para}>Sed purus urna, pretium sed neque eget, pulvinar egestas neque.</p>
        <div className={classes['keywords-results__wrapper']}>
            <KeyWords keyWords={props.allKeywords} />
            <Results keywordsCombination={props.keywordsCombination}/>
        </div>
        {/* <div className={classes['button-wrapper']}>
            <Button value={props.count} text="Prev" styleType="prev" onClick={ev => changePageHandler(ev, 'PREV')}>Prev</Button>
            <Button value={props.count} text="Next" styleType="next" onClick={ev => changePageHandler(ev, 'NEXT')}>Next</Button>
        </div> */}
    </div>
}

export default KeywordsGenerator;