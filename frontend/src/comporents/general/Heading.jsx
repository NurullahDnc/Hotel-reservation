import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Heading = ({title}) => {

  useEffect(()=>{

    ScrollReveal().reveal('.Heading', {
      duration :1000,
      origin: "top",
      distance: "100px",
      easing: "ease-in-out",

    })
    
  }, [])

  return (

    <h1 className='Heading'>
      {title}
    </h1>
    
  )
}

export default Heading
