

import React from 'react'

const Input = ({id, type, placeholder, required, register, errors }) => {
  return (
    <div className={` `}>
      <input className={` input ${errors[id]? "err": "" } `} {...register(id, {required})} type={type} name={id} placeholder={placeholder} />
    </div>
  )
}

export default Input
