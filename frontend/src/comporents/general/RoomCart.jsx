import React, { useState } from 'react';
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

const RoomCart = ({ roomInfo }) => {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="room-cart" sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
            <div className="room-cart-content" style={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component="img"
                    image={roomInfo.image}
                    alt={roomInfo.name}
                    sx={{ flex: 1.3 }}
                    className="room-image"
                />

                <CardContent sx={{ flex: 3, marginLeft: 1 }} className="room-card-content">
                    <Typography variant="h6" gutterBottom className="room-name">
                        {roomInfo.name}
                    </Typography>
                    <Accordion
                        expanded={expanded}
                        onChange={handleAccordionChange}
                        sx={{ marginTop: 1 }}
                        className="room-accordion"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="room-details"
                            className="room-details-header"
                        >
                            <Typography variant="body2">Özellikler</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="room-details">
                                <Typography variant="body2" className="room-description">
                                    {roomInfo.description}
                                </Typography>
                                <Grid container spacing={1}>
                                    {roomInfo.features.map((feature, index) => (
                                        <Grid item key={index} xs={4} className="room-feature">
                                            <IconButton
                                                size="small"
                                                sx={{ marginRight: 1 }}
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
                </CardContent>

                <CardContent sx={{ flex: 0.9 }} className="room-price">
                    <Typography variant="h6" sx={{ marginTop: 1 }}>
                        Fiyat: {roomInfo.price} ₺
                    </Typography>
                    <Button variant="contained" sx={{ marginTop: 2 }} className="reservation-button">
                        Rezervasyon Yap
                    </Button>
                </CardContent>
            </div>
        </Card>
    );
};

export default RoomCart;
