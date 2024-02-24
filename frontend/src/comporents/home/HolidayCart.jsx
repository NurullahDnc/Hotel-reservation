import React from 'react'

//anasayfada tatil comporenti
const HolidayCart = () => {
    return (
        <div className='HolidayCart'>

            {/*tatil comporentinin solda metin kismi */}
            <div className='HolidayCart-left'>
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
