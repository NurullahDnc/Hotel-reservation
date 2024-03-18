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
            name: 'Tek Kişilik Oda',
            image: './image/rooms/single.jpg',
            description: `
                Otelimizin tek kişilik odası, modern olanakları ve şık tasarımı ile konforlu bir konaklama sunar. Tek kişilik yatak, şehir manzarası ve ücretsiz Wi-Fi gibi özelliklerle unutulmaz bir deneyim yaşayabilirsiniz.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet tek kişilik yatak' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Tek Kişilik Oda' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz Wifi' },
                { label: 'Manzara', icon: <LandscapeIcon />, value: 'Şehir manzaralı' },
                { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
                { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Banyo Tipi', icon: <BathtubIcon />, value: 'Duş' },
                { label: 'Oda Hizmeti', icon: <RoomServiceIcon />, value: 'Oda Hizmeti' },
                { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
                { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
                { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
            ],
            price: 80,
        },
        {
            id: '2',
            name: 'Çift Kişilik Oda',
            image: './image/rooms/double.jpg',
            description: `
                Rahatlık ve konforun bir araya geldiği çift kişilik odamızda, geniş bir alana sahip çift kişilik yatak ve şehir manzarası bulunmaktadır. Ücretsiz Wi-Fi erişimi ve diğer modern olanaklarla unutulmaz bir konaklama deneyimi yaşayacaksınız.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet çift kişilik yatak' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Çift Kişilik Oda' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz Wifi' },
                { label: 'Manzara', icon: <LandscapeIcon />, value: 'Şehir manzaralı' },
                { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
                { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Banyo Tipi', icon: <BathtubIcon />, value: 'Duş' },
                { label: 'Oda Hizmeti', icon: <RoomServiceIcon />, value: 'Oda Hizmeti' },
                { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
                { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
                { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
            ],
            price: 120,
        },
        {
            id: '3',
            name: 'Aile Odası',
            image: './image/rooms/family.jpg',
            description: `
                Aileler için özel olarak tasarlanan odamızda, geniş bir alana sahip çift kişilik yatak, ayrı yatak odası ve çocuklar için özel eğlence seçenekleri bulunmaktadır. Bahçe manzarası ve ücretsiz Wi-Fi erişimi ile keyifli bir konaklama geçireceksiniz.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet çift kişilik yatak, 2 adet tek kişilik yatak' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Aile Odası' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz Wifi' },
                { label: 'Manzara', icon: <LandscapeIcon />, value: 'Bahçe manzaralı' },
                { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
                { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Banyo Tipi', icon: <BathtubIcon />, value: 'Duş ve küvet' },
                { label: 'Oda Hizmeti', icon: <RoomServiceIcon />, value: 'Oda Hizmeti' },
                { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
                { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
                { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
            ],
            price: 180,
        },
        {
            id: '4',
            name: 'Junior Süit',
            image: './image/rooms/suite.jpg',
            description: `
                Konforlu ve lüks bir konaklama deneyimi için ideal olan Junior Süit odamızda, geniş bir oturma alanı, çift kişilik yatak ve özel jakuzi bulunmaktadır. Deniz manzarasıyla unutulmaz bir tatil geçireceksiniz.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet çift kişilik yatak' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Junior Süit' },
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
            price: 250,
        },
        {
            id: '5',
            name: 'Lüks Oda',
            image: './image/rooms/lux.jpg',
            description: `
                En üst düzey lüks ve konfor arayanlar için özel olarak tasarlanan Lüks Oda'da, geniş bir oturma alanı, yatak odası, özel teras ve jakuzi bulunmaktadır. Muhteşem deniz manzarası ile rüya gibi bir tatil sizi bekliyor.
            `,
            features: [
                { label: 'Yatak Sayısı ve Türleri', icon: <KingBedIcon />, value: '1 adet king bed' },
                { label: 'Oda Tipi', icon: <HotelIcon />, value: 'Lüks Oda' },
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
            price: 500,
        },
    ],
};

export default roomData;
