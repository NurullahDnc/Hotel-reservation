import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const ActivityCart = ({ title, text, imgOne, imgTwo, btnText, btnUrl }) => {

    useEffect(() => {

        ScrollReveal().reveal('.ActivityCart-right-image', {
            duration: 1100,
            scale: 0.5,
            easing: 'ease-in-out',
            interval: 500
        })

        ScrollReveal().reveal('.ActivityCart-left-title', {
            origin: "top",
            distance: "100px",
            duration: 1000,
            easing: "ease-in-out",

        })

        ScrollReveal().reveal('.ActivityCart-left-text, .ActivityCart-left-button', {
            origin: "left",
            distance: "200px",
            duration: 1000,
            easing: "ease-in-out",
        })

    }, [])

    return (
        <div className='ActivityCart'>

            <div className='ActivityCart-left'>
                <h1 className='ActivityCart-left-title'>{title}</h1>
                <p className='ActivityCart-left-text'>
                    {text}
                </p>

                {/* btnText varsa goster btn text yoksa gosterme ekranda*/

                    btnText ?
                        <Link to={btnUrl} >
                            <button className='ActivityCart-left-button'>
                                {btnText}

                            </button>
                        </Link> : ""
                }

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
