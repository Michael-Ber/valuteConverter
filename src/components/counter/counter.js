import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import Button from '../button';
import './counter.scss';

const Counter = ({valutes, valueToConvert, whatValute}) => {
    const [value, setValue] = useState(0);
    const [valuteName, setValuteName] = useState('RUB');
    
    useEffect(() => {  //при выборе в какую валюту переводить устанавливаем соответствующее название валюты
        if(whatValute) {
            setValuteName('RUB');
        }else {
            Object.values(valutes).forEach(item => {
                if(item.Value === value) {
                    setValuteName(item.CharCode);
                }
            })
        }
    }, [whatValute, valutes, value]);

    let result = 0;
    if(valueToConvert && whatValute) {
        result = valueToConvert * value; // валюту в рубли
    }else {
        result = valueToConvert / value; // рубли в валюту
    }

    let resName;
    switch(valuteName) {
        case 'RUB': resName = 'рублей';break;
        case 'USD': resName = 'долларов';break;
        case 'EUR': resName = 'евро';break;
        case 'CHF': resName = 'франков';break;
        default: resName = 'выберите валюту';break;
    }

    return (
        <div className="counter">
            <div className="counter-result">{`${result.toFixed(2)} ${resName}`}</div>
            <div className="counter__btns">
                <Button title="USD" action={() => {setValue(valutes.USD.Value); setValuteName('USD')}}/>
                <Button title="EUR" action={() => {setValue(valutes.EUR.Value); setValuteName('EUR')}}/>
                <Button title="CHF" action = {() => {setValue(valutes.CHF.Value); setValuteName('CHF')}}/>
            </div>
        </div>
    )
}

export default Counter;