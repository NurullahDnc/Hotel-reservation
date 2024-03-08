import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RoomDetail = ({ text,}) => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderImages = [
        '/image/rooms/standart.jpg',
        '/image/rooms/standart.jpg',
        '/image/rooms/standart.jpg',
        // Diğer resim URL'leri buraya eklenebilir
    ];

    return (
        <div>
            {/* Slider */}
            <Slider {...sliderSettings}>
                {sliderImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slider Resim ${index + 1}`} />
                    </div>
                ))}
            </Slider>

            {/* Açıklama */}
            <div className="description">
                {text}
            </div>

            {/* Özellikler */}
            <div className="features">
                <h2>Özellikler</h2>
                <ul>
                    <li>Kaç Kişilik Yatak: </li>
                    <li>Kaç Oda: </li>
                    <li>Kaç Kişi Kalabilir: </li>
                    <li>Ücretsiz WiFi: </li>
                    <li>Alan (m^2): </li>
                    <li>Manzara: </li>
                    <li>Balkon: </li>
                    <li>Kasa: </li>
                    {/* Diğer özellikler buraya eklenebilir */}
                </ul>
            </div>
        </div>
    );
};

export default RoomDetail;
