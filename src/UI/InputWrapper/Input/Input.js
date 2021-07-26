import classes from './Input.module.css';

const Input = props => {

    return <input 
        className={`${classes.input} ${!JSON.parse(props.invalid.toLowerCase()) && classes.invalid}`} 
        {...props}
    />
}

export default Input;