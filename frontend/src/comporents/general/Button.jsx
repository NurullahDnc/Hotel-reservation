import React from 'react';

const Button = ({ outline, btnText, icon: Icon, onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit} className={`buttonGeneral ${outline ? 'btnOutline' : ''}`}>
        {Icon && <Icon size={25} />}
        <h1 className='buttonGeneral-text'>{btnText} </h1>
      </button>
    </div>
  );
};


export default Button;


