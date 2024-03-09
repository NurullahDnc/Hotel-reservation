import React from 'react';
import {
    KingBed as KingBedIcon,
    Hotel as HotelIcon,
    Wifi as WifiIcon,
    Landscape as LandscapeIcon,
    AcUnit as AcUnitIcon,
    Tv as TvIcon,
    LocalBar as LocalBarIcon,
    Bathtub as BathtubIcon,
    RoomService as RoomServiceIcon,
    Schedule as ScheduleIcon,
    FreeBreakfast as FreeBreakfastIcon,
    Security as SecurityIcon,
} from '@mui/icons-material';

const roomData = {
    rooms: [
        {
            id: '1',
            name: 'Standart Oda',
            image: './image/rooms/standart.jpg',
            description: `
                Otelimizin standart odası, modern olanakları ve şık tasarımı ile konforlu bir konaklama sunar. 2 tek kişilik yatak, şehir manzarası ve ücretsiz Wi-Fi gibi özelliklerle unutulmaz bir deneyim yaşayabilirsiniz.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '2 adet tek kişilik yatak' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Standart Oda' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz Wifi' },
                { label: 'Manzara', icon: <LandscapeIcon />, value: 'Şehir manzaralı' },
                { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
                { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Banyo Tipi', icon: <BathtubIcon />, value: 'Duş ve küvet' },
                { label: 'Oda Hizmeti', icon: <RoomServiceIcon />, value: 'Oda Hizmeti' },
                { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
                { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
                { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
            ],
            price: 100,
        },
        {
            id: '2',
            name: 'Deluxe Oda',
            image: './image/rooms/standart.jpg',
            description: `
                Lüks ve rahatlık arayanlar için tasarlanan Deluxe odamızda, geniş bir alana sahip çift kişilik yatak, özel jakuzi ve deniz manzarası sizi bekliyor.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet king bed' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Deluxe Oda' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz Wifi' },
                { label: 'Manzara', icon: <LandscapeIcon />, value: 'Deniz manzaralı' },
                { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
                { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Banyo Tipi', icon: <BathtubIcon />, value: 'Özel jakuzi' },
                { label: 'Oda Hizmeti', icon: <RoomServiceIcon />, value: 'Oda Hizmeti' },
                { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Check-in: 15:00, Check-out: 11:00' },
                { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
                { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
            ],
            price: 150,
        },
        {
            id: '3',
            name: 'Aile Odası',
            image: './image/rooms/standart.jpg',
            description: `
                Aileler için özel olarak tasarlanan odamızda, ayrı yatak odaları, geniş oturma alanı ve çocuklar için özel eğlence seçenekleri bulunmaktadır.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet çift kişilik yatak, 2 adet tek kişilik yatak' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Aile Odası' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz Wifi' },
                { label: 'Manzara', icon: <LandscapeIcon />, value: 'Bahçe manzaralı' },
                { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
                { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Banyo Tipi', icon: <BathtubIcon />, value: 'Duş' },
                { label: 'Oda Hizmeti', icon: <RoomServiceIcon />, value: 'Oda Hizmeti' },
                { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Check-in: 16:00, Check-out: 10:00' },
                { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
                { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
            ],
            price: 200,
        },
    ],
};

export default roomData;
