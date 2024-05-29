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
            name: 'Single Room',
            image: './image/rooms/single.jpg',
            description: `
                Our single room offers a comfortable stay with modern amenities and stylish design. You can experience unforgettable moments with features like a single bed, city view, and free Wi-Fi.
            `,
            features: [
                { label: 'Bed Type', icon: <KingBedIcon />, value: '1 single bed' },
                { label: 'Room Type', icon: <HotelIcon />, value: 'Single Room' },
                { label: 'WiFi', icon: <WifiIcon />, value: 'Free Wifi' },
                { label: 'View', icon: <LandscapeIcon />, value: 'City view' },
                { label: 'Air Conditioning or Heating', icon: <AcUnitIcon />, value: 'Air Conditioning or Heating' },
                { label: 'Television', icon: <TvIcon />, value: 'Television' },
                { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
                { label: 'Bathroom Type', icon: <BathtubIcon />, value: 'Shower' },
                { label: 'Room Service', icon: <RoomServiceIcon />, value: 'Room Service' },
                { label: 'Check-in and Check-out Times', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
                { label: 'Breakfast Service', icon: <FreeBreakfastIcon />, value: 'Breakfast' },
                { label: 'Security Features', icon: <SecurityIcon />, value: 'Security' },
            ],
            price: 80,
        },
        // {
        //     id: '2',
        //     name: 'Double Room',
        //     image: './image/rooms/double.jpg',
        //     description: `
        //         Our double room combines comfort and convenience with a spacious double bed and city view. You'll enjoy a memorable stay with free Wi-Fi access and other modern amenities.
        //     `,
        //     features: [
        //         { label: 'Bed Type', icon: <KingBedIcon />, value: '1 double bed' },
        //         { label: 'Room Type', icon: <HotelIcon />, value: 'Double Room' },
        //         { label: 'WiFi', icon: <WifiIcon />, value: 'Free Wifi' },
        //         { label: 'View', icon: <LandscapeIcon />, value: 'City view' },
        //         { label: 'Air Conditioning or Heating', icon: <AcUnitIcon />, value: 'Air Conditioning or Heating' },
        //         { label: 'Television', icon: <TvIcon />, value: 'Television' },
        //         { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
        //         { label: 'Bathroom Type', icon: <BathtubIcon />, value: 'Shower' },
        //         { label: 'Room Service', icon: <RoomServiceIcon />, value: 'Room Service' },
        //         { label: 'Check-in and Check-out Times', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
        //         { label: 'Breakfast Service', icon: <FreeBreakfastIcon />, value: 'Breakfast' },
        //         { label: 'Security Features', icon: <SecurityIcon />, value: 'Security' },
        //     ],
        //     price: 120,
        // },
        // {
        //     id: '3',
        //     name: 'Family Room',
        //     image: './image/rooms/family.jpg',
        //     description: `
        //         Our family room, designed specifically for families, features a spacious double bed, separate bedroom with bunk beds, and special entertainment options for children. Enjoy a pleasant stay with garden view and free Wi-Fi access.
        //     `,
        //     features: [
        //         { label: 'Bed Type', icon: <KingBedIcon />, value: '1 double bed, 2 single beds' },
        //         { label: 'Room Type', icon: <HotelIcon />, value: 'Family Room' },
        //         { label: 'WiFi', icon: <WifiIcon />, value: 'Free Wifi' },
        //         { label: 'View', icon: <LandscapeIcon />, value: 'Garden view' },
        //         { label: 'Air Conditioning or Heating', icon: <AcUnitIcon />, value: 'Air Conditioning or Heating' },
        //         { label: 'Television', icon: <TvIcon />, value: 'Television' },
        //         { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
        //         { label: 'Bathroom Type', icon: <BathtubIcon />, value: 'Shower and bathtub' },
        //         { label: 'Room Service', icon: <RoomServiceIcon />, value: 'Room Service' },
        //         { label: 'Check-in and Check-out Times', icon: <ScheduleIcon />, value: 'Check-in: 14:00, Check-out: 12:00' },
        //         { label: 'Breakfast Service', icon: <FreeBreakfastIcon />, value: 'Breakfast' },
        //         { label: 'Security Features', icon: <SecurityIcon />, value: 'Security' },
        //     ],
        //     price: 180,
        // },
        // {
        //     id: '4',
        //     name: 'Junior Suite',
        //     image: './image/rooms/suite.jpg',
        //     description: `
        //         Our Junior Suite offers a comfortable and luxurious stay with a spacious living area, double bed, and private jacuzzi. Enjoy a dreamy holiday with sea view.
        //     `,
        //     features: [
        //         { label: 'Bed Type', icon: <KingBedIcon />, value: '1 double bed' },
        //         { label: 'Room Type', icon: <HotelIcon />, value: 'Junior Suite' },
        //         { label: 'WiFi', icon: <WifiIcon />, value: 'Free Wifi' },
        //         { label: 'View', icon: <LandscapeIcon />, value: 'Sea view' },
        //         { label: 'Air Conditioning or Heating', icon: <AcUnitIcon />, value: 'Air Conditioning or Heating' },
        //         { label: 'Television', icon: <TvIcon />, value: 'Television' },
        //         { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
        //         { label: 'Bathroom Type', icon: <BathtubIcon />, value: 'Private jacuzzi' },
        //         { label: 'Room Service', icon: <RoomServiceIcon />, value: 'Room Service' },
        //         { label: 'Check-in and Check-out Times', icon: <ScheduleIcon />, value: 'Check-in: 15:00, Check-out: 11:00' },
        //         { label: 'Breakfast Service', icon: <FreeBreakfastIcon />, value: 'Breakfast' },
        //         { label: 'Security Features', icon: <SecurityIcon />, value: 'Security' },
        //     ],
        //     price: 250,
        // },
        // {
        //     id: '5',
        //     name: 'Luxury Room',
        //     image: './image/rooms/lux.jpg',
        //     description: `
        //         Our Luxury Room, designed for those seeking the highest level of luxury and comfort, features a spacious living area, bedroom, private terrace, and jacuzzi. A magnificent sea view awaits you for a dreamlike holiday.
        //     `,
        //     features: [
        //         { label: 'Bed Type', icon: <KingBedIcon />, value: '1 king bed' },
        //         { label: 'Room Type', icon: <HotelIcon />, value: 'Luxury Room' },
        //         { label: 'WiFi', icon: <WifiIcon />, value: 'Free Wifi' },
        //         { label: 'View', icon: <LandscapeIcon />, value: 'Sea view' },
        //         { label: 'Air Conditioning or Heating', icon: <AcUnitIcon />, value: 'Air Conditioning or Heating' },
        //         { label: 'Television', icon: <TvIcon />, value: 'Television' },
        //         { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
        //         { label: 'Bathroom Type', icon: <BathtubIcon />, value: 'Private jacuzzi' },
        //         { label: 'Room Service', icon: <RoomServiceIcon />, value: 'Room Service' },
        //         { label: 'Check-in and Check-out Times', icon: <ScheduleIcon />, value: 'Check-in: 15:00, Check-out: 11:00' },
        //         { label: 'Breakfast Service', icon: <FreeBreakfastIcon />, value: 'Breakfast' },
        //         { label: 'Security Features', icon: <SecurityIcon />, value: 'Security' },
        //     ],
        //     price: 500,
        // },
    ],
};

export default roomData;
