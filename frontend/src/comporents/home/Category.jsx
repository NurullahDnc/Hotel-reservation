import React from 'react'

const Category = () => {

    const categories = [
        { id: 1, name: 'Kategori 1', imageUrl: './image/ozel2.jpg', },
        { id: 2, name: 'Kategori 2', imageUrl: './image/ozel3.jpg', },
        { id: 3, name: 'Kategori 3', imageUrl: './image/ozel2.jpg', },
        { id: 4, name: 'Kategori 3', imageUrl: './image/ozel.jpg', },
        { id: 5, name: 'Kategori 1', imageUrl: './image/ozel3.jpg', },


    ];

    return (

        <div className='Category'>
            <h1>
                Konfor ve Huzurun Buluştuğu Adres
            </h1>
            <div className='Category-Categorys'>
                {
                    categories.map(item => (
                        <div key={item.id} className='Category-Categorys-container'>

                            {/*kategorinin gorseli */}
                            <div className='Category-Categorys-container-image'>
                                <img src={item.imageUrl} alt="" />
                            </div>

                            {/*kategorinin adı */}
                            <div className='Category-Categorys-container-text'>
                                {item.name}
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Category
