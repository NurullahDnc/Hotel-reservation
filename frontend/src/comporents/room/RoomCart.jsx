import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Button,
    Grid,
} from '@mui/material';

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


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getRoom } from '../../redux/RoomSlice';

const RoomCart = ({ roomInfo }) => {
    const { t } = useTranslation();
    const [expandedRooms, setExpandedRooms] = useState({});
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.getRoom.rooms);

    useEffect(() => {
        dispatch(getRoom());
    }, [dispatch]);

    const features = [
        { label: 'Yatak Türü', icon: <KingBedIcon />, value: '1 çift kişilik yatak' },
        { label: 'Oda Türü', icon: <HotelIcon />, value: 'Çift Kişilik Oda' },
        { label: 'WiFi', icon: <WifiIcon />, value: 'Ücretsiz WiFi' },
        { label: 'Manzara', icon: <LandscapeIcon />, value: 'Şehir manzarası' },
        { label: 'Klima veya Isıtma', icon: <AcUnitIcon />, value: 'Klima veya Isıtma' },
        { label: 'Televizyon', icon: <TvIcon />, value: 'Televizyon' },
        { label: 'Minibar', icon: <LocalBarIcon />, value: 'Minibar' },
        { label: 'Banyo Türü', icon: <BathtubIcon />, value: 'Duş' },
        { label: 'Oda Servisi', icon: <RoomServiceIcon />, value: 'Oda Servisi' },
        { label: 'Giriş ve Çıkış Saatleri', icon: <ScheduleIcon />, value: 'Giriş: 14:00, Çıkış: 12:00' },
        { label: 'Kahvaltı Hizmeti', icon: <FreeBreakfastIcon />, value: 'Kahvaltı' },
        { label: 'Güvenlik Özellikleri', icon: <SecurityIcon />, value: 'Güvenlik' },
    ]


    //ozelikleri aç kapa
    const handleAccordionChange = (roomId) => {
        setExpandedRooms({
            ...expandedRooms,
            [roomId]: !expandedRooms[roomId]
        });
    };

    //secilen oda 
    const handleRoomSelection = (selectedRoom) => {
        console.log("Seçilen Oda:", selectedRoom);
 
    };

    return (
        <div>
            {Object.keys(rooms).map(roomId => {

                const roomInfo = rooms[roomId];

                return (
                    <Card className="room-card" key={roomId}>
                        <div className="room-card-content">
                            <CardContent className="room-card-content-1">
                                <CardMedia
                                    component="img"
                                    image={roomInfo.image}
                                    alt={roomInfo.image}
                                    className="room-card-content-1-image"
                                />
                            </CardContent>

                            <CardContent className="room-card-content-2">
                                <Typography variant="h6" gutterBottom className="room-card-content-2-name">
                                    {t(roomInfo.category)}
                                </Typography>
                                <Accordion
                                    expanded={expandedRooms[roomId] || false}
                                    onChange={() => handleAccordionChange(roomId)}
                                    className="room-card-content-2-accordion"
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="room-details"
                                        className="room-details-header"
                                    >
                                        <Typography variant="body2">{t('properties')}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div className="room-details">
                                            <Typography variant="body2" className="room-card-content-2-accordion-description">
                                                {t(roomInfo.description)}
                                            </Typography>
                                            <Grid container spacing={1}>
                                                {features.map((feature, index) => (
                                                    <Grid item key={index} xs={4} className="room-feature">
                                                        <IconButton
                                                            size="small"
                                                            aria-label={feature.label}
                                                            className="feature-icon"
                                                        >  
                                                            {feature.icon}
                                                        </IconButton>
                                                        {feature.value}
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>


                                <div className="star-icons">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                            </CardContent>

                            <CardContent className="room-card-content-3">
                                <Typography variant="h6" className='room-card-content-3-price'>
                                    {t('price')} : {roomInfo.price} ₺
                                </Typography>
                                <Button onClick={() => handleRoomSelection(roomInfo)} variant="contained" className="reservation-button">
                                    {t('bookNow')}
                                </Button>
                            </CardContent>
                        </div>
                    </Card>
                );
            })}
        </div>
    );


};

export default RoomCart;
