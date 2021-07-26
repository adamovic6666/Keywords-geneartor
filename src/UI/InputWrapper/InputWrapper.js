import classes from './InputWrapper.module.css';
import React from 'react';
import Input from './Input/Input';

const InputWrapper = props => {

    return <div className={classes['input-wrapper']}>
        <label htmlFor={props.id} className={classes.label}><span>*</span> Fill a list of keywords</label>
        <Input onChange={ev => props.setKeys(ev)} invalid={props.valid} name={props.name} id={props.id} type={props.type} value={props.value}/>
        <p className={`${classes.para} ${!JSON.parse(props.valid.toLowerCase()) && classes.invalid}`}>Min. six keywords/key phrases, seperated witha comma</p>
    </div>
}

export default InputWrapper;