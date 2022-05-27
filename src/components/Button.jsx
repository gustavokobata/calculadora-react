import React from 'react';

const Button = ({ child, onClick}) => {
    return (
        <button className='button' onClick={onClick}>
            {child}
        </button>
     );
}

export default Button;