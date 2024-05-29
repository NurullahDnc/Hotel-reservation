import React from 'react';

const TextArea = ({ id, placeholder, title, required, register, errors }) => {
  return (
    <div className={`inputs`}>
      <p className='inputs-title'>{title}</p>
      <textarea className={`inputs-input ${errors[id] ? "err" : ""}`} {...register(id, { required })} id={id} name={id} rows={5} placeholder={placeholder} />
      {errors[id] && <span>This field is required</span>}
    </div>
  );
}

export default TextArea;
