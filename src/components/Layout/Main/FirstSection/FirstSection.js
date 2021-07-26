import Button from '../../../../UI/Button/Button';
import classes from './FirstSection.module.css';

const FirstSection = props => {

    const setFirstPage = () => {
        props.onClickSetFirstPageHandler(1);
    }

    return <div className={classes['main-wellcome']}>
        <h1>Welcome <span>Ilia!</span> 🎉</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem odio, mollis ut ornare non, tristique in eros. Sed purus urna, pretium sed neque eget, pulvinar egestas neque.</p>
        <div className={classes['button-wrapper']}>
            <Button text="Get started" onClick={setFirstPage}/>
        </div>
    </div>
}

export default FirstSection;