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

    const holidayData = [
        {
            id: "1",
            logo: "STAYEASE",
            title: "Hayalleriniz bizim önceliklerimiz",
            text: "İyi bir tatilde beklentilerin ne kadar yüksek olduğunun bilincinde olan bir ekibin hizmet verdiği çok özel bir tesistesiniz. En büyük motivasyonumuz bizi tekrar ziyaret eden misafirlerimizin sürekli artması. Sizleri de misafir etmekten mutluluk duyarız.",
            img: "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1110.jpg?t=st=1710068557~exp=1710072157~hmac=14ad1bd20d8812b47122b273f44c5377c0c4817963cadfd5d9418680a98abdc9&w=996"

        }
    ]

    return (
       <>
        {
            holidayData.map((item)=>(
                <div key={item.id} className='HolidayCart'>

                {/*tatil comporentinin solda metin kismi */}
                <div className='HolidayCart-left'>
                    <p className='HolidayCart-left-logo'>~{item.logo}</p>
                    <h1 className='HolidayCart-left-title'>{item.title}</h1>
                    <p className='HolidayCart-left-text'> {item.text} </p>
    
                </div>
    
                {/*tatil comporentinin sagda gorsel kismi */}
                <div className='HolidayCart-right'>
                    <div className='HolidayCart-right-image'>
                        <img src={item.img} alt="" />
                    </div>
    
                </div>
            </div>
            ))
        }
       </>
    )
}

export default HolidayCart
