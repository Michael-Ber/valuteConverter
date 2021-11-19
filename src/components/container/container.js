import React from 'react';
import './container.scss';
import Header from '../app-header';
import Counter from '../counter';
import InputValute from '../inputValute/inputValute';
import Button from '../button';

const Container = ({valutes, value, setValue, whatValute, setWhatValute}) => {
    const title = whatValute ? 'Перевод в рубли' : "Перевод в валюту";
    return (
        <div className="container">
            <Header/>
            <Button title={title} action={() => setWhatValute(!whatValute)}/>
            <InputValute whatValute={whatValute} setValueToConvert={setValue}/>
            <Counter whatValute={whatValute} valueToConvert={value} valutes={valutes}/>
        </div>
    )
}

export default Container;