import React from 'react';

const Button = ({ outline, btnText, icon: Icon, onSubmit, small }) => {
  return (
    <div>
      <button onClick={onSubmit} className={`buttonGeneral ${outline ? 'btnOutline' : ''} ${small?"btnSmall": "" }`}>
        {Icon && <Icon size={25} />}
        <h1 className='buttonGeneral-text'>{btnText} </h1>
      </button>
    </div>
  );
};


export default Button;


