import classes from './Button.module.css';

const Button = props => {

    let button;

    switch(props.styleType) {
        case 'next':
            button = <button value={props.value} type={props.type} onClick={props.onClick} className={classes['button-next']}>{props.text}</button>;
            break;
        case 'prev':
            button = <button value={props.value} onClick={props.onClick} className={classes['button-prev']}><span>&#129056;	
            </span>{props.text}</button>;
            break;
        default:
            button = <button value={props.value} onClick={props.onClick} className={classes.button}>{props.text}</button>;
    }
    return button;
}

export default Button;