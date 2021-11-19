import './inputValute.scss';
const InputValute = ({setValueToConvert, whatValute}) => {
    const labelText = whatValute ? 'Введите необходимое значение в валюте': 'Введите необходимое значение в рублях';
    return (
        <div className="inputWrapper">
            <input onChange={(e) => setValueToConvert(+e.target.value)} type="number" placeholder="Please, enter a number" id="inputValue"/>
            <label htmlFor="inputValue">{labelText}</label>
        </div>
    )
}
export default InputValute;