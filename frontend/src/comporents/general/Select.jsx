import React from 'react';

const Select = ({ register, errors, id, title, placeholder, options, defaultValue }) => {
    return (
        <div className='inputs'>
            <p className='inputs-title'>{title}</p>
            <select className={`inputs-input ${errors[id] ? "error" : ""}`} {...register(id)} defaultValue={defaultValue}>

                <option value="" disabled>{placeholder} </option>

                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}        

            </select>

        </div>
    )
}

export default Select;
