import React from 'react'
import { IoClose } from 'react-icons/io5'

const AdminModal = ({ isOpen, onClose, title }) => {

    if (!isOpen) {
        return null
    }
    

    return (
        <div className='adminModal'>
            <div className='adminModal-adminModalContainer'>
                <div className='modal-container-title'>
                    <div className='modal-container-title-text'>
                        title
                    </div>
                    <button onClick={onClose}>
                        <IoClose size={30} />
                    </button>
                </div>

                bodyalanı

            </div>
        </div>
    )
}

export default AdminModal
