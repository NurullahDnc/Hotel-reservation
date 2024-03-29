import React from 'react'

const Input = ({ id, type, placeholder, title, required, register, errors }) => {
  return (
    <form className={`inputs`} encType='multipart/form-data'>
      <p className='inputs-title'>{title}</p>
      <input accept="image/*" className={` inputs-input ${errors[id] ? "err" : ""} `} {...register(id, { required })} type={type} name={id} placeholder={placeholder} />
    </form>
  )
}

export default Input
