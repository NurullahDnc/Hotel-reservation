import React, { useState } from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const RoomCart = ({ roomInfo }) => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="room-card">
            <div className="room-card-content">
                <CardContent className="room-card-content-1">
                    <CardMedia
                        component="img"
                        image={roomInfo.image}
                        alt={roomInfo.name}
                        className="room-card-content-1-image"
                    />
                </CardContent>

                <CardContent className="room-card-content-2">
                    <Typography variant="h6" gutterBottom className="room-card-content-2-name">
                        {t(roomInfo.name)}
                    </Typography>
                    <Accordion
                        expanded={expanded}
                        onChange={handleAccordionChange}
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
                                    {roomInfo.features.map((feature, index) => (
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
                    <Button variant="contained" className="reservation-button">
                        {t('bookNow')}
                    </Button>
                </CardContent>
            </div>
        </Card>
    );
};

export default RoomCart;
