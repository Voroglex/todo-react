import React from 'react';
import "./NewCard.css"
const NewCard = ({children,onChange,onClick,formInput}) => {
    return (
        <div className='container-input'>
            <input className='input-text' placeholder='Ваше дело' onChange={onChange} value={formInput}></input>
            <button onClick={onClick} className='gg-add-r'>{children}</button>
        </div>
    );
};

export default NewCard;