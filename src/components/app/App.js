import {useState, useEffect} from 'react';
import './app.scss';
import Container from '../container';
import getData from '../../service/getMoneyData';
import bg from '../../img/bank.jpg';


function App() {
	const [valutes, setValutes] = useState(); // объект с валютами
	const [value, setValue] = useState(1); // введенное значение для перевода
	const [whatValute, setWhatValute] = useState(true); //true - рубли, false - другая валюта
	useEffect(() => {
		getData()
			.then(res => JSON.parse(res))
			.then(res => setValutes(res.Valute));
	}, []);
	return (
	<div className="app">
		<img src={bg} alt="background" />
		<Container setWhatValute={setWhatValute} whatValute={whatValute} valutes={valutes} value={value} setValue={setValue}/>
	</div>
	);
}

export default App;
