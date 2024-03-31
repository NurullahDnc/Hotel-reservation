import React from 'react';

const Select = ({ register, errors, id, title, placeholder, options, defaultValue }) => {
    
    return (
        <div className='inputs'>
            <p className='inputs-title'>{title}</p>
            <select style={{fontSize: "15px",}} className={`inputs-input ${errors[id] ? "error" : ""}`} {...register(id)} defaultValue={defaultValue}>

                <option value="" disabled>{placeholder} </option>

                {options.map(option => (
                    <option key={option._id || option.id} value={option._id || option.id}>{option.category}</option>
                ))}        

            </select>

        </div>
    )
}

export default Select;
