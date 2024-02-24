import React from 'react'

const ActivityCart = ({title, text, imgOne, imgTwo }) => {
  return (
    <div className='ActivityCart'>

        <div className='ActivityCart-left'>
            <h1 className='ActivityCart-left-title'>{title}</h1>
            <p className='ActivityCart-left-text'>
                {text}
            </p>

        </div>

        <div className='ActivityCart-right'>
            <div className='ActivityCart-right-image'>
                <img src={imgOne} alt="" />
            </div>
            <div className='ActivityCart-right-image'>
                <img src={imgTwo} alt="" />
            </div>
        
        </div>     
    </div>
  )
}



export default ActivityCart
