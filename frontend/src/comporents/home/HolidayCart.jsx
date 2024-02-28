import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
//anasayfada tatil comporenti
const HolidayCart = () => {

    useEffect(() => {
        ScrollReveal().reveal('.HolidayCart-right', {
            duration: 1000,
            scale: 0.5, // İlk durumda %50 küçük
            easing: 'ease-in-out',
        });

        ScrollReveal().reveal('.HolidayCart-left-title, .HolidayCart-left-logo', {
            distance: "150px",
            duration: 1000 ,
            easing: "ease-in-out",
            origin: "top",
        })

        ScrollReveal().reveal('.HolidayCart-left-text', {
            distance: "250px",
            duration: 1000 ,
            easing: "ease-in-out",
            origin: "left",
        })
        

    }, [])

    return (
        <div className='HolidayCart'>

            {/*tatil comporentinin solda metin kismi */}
            <div className='HolidayCart-left'>
                <p className='HolidayCart-left-logo'>~STAYEASE</p>
                <h1 className='HolidayCart-left-title'>Hayalleriniz bizim önceliklerimiz</h1>
                <p className='HolidayCart-left-text'>
                    İyi bir tatilde beklentilerin ne kadar yüksek olduğunun bilincinde olan bir ekibin hizmet verdiği çok özel bir tesistesiniz. En büyük motivasyonumuz bizi tekrar ziyaret eden misafirlerimizin sürekli artması. Sizleri de misafir etmekten mutluluk duyarız.                </p>

            </div>

            {/*tatil comporentinin sagda gorsel kismi */}
            <div className='HolidayCart-right'>
                <div className='HolidayCart-right-image'>
                    <img src="https://img.freepik.com/free-photo/beautiful-seaside-landscape_23-2150423954.jpg?t=st=1708722763~exp=1708726363~hmac=c1227733f0254b86d5bc157618152ec80067b724bab0d32a254210a32ee3e2b4&w=996" alt="" />
                </div>

            </div>
        </div>
    )
}

export default HolidayCart
