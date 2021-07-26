import classes from './ProgressBar.module.css';
import SingleBar from './SingleBar/SingleBar';

const ProgressBar = props => {

    return <div className={classes['progress-bar']}>
        <SingleBar class={props.progressBarChange === 1 || props.progressBarChange === 2 || props.progressBarChange === 3? 
            'progress-bar__percentage' : 'progress-bar__percentage--zero'}>
        </SingleBar>
        <SingleBar class={props.progressBarChange === 2 || props.progressBarChange === 3 ? 
            'progress-bar__percentage' : 'progress-bar__percentage--zero'}>
        </SingleBar>
        <SingleBar class={props.progressBarChange === 3 ? 
            'progress-bar__percentage' : 'progress-bar__percentage--zero'}>
        </SingleBar>
    </div>
}

export default ProgressBar;