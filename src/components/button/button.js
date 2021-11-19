import React from 'react';
import './button.scss';

const Button = ({title, action}) => {
    return (
        <button style={{'display': 'block', 'margin': '0 auto'}} onClick={() => action()} className="button">{title}</button>
    )
}

export default Button;