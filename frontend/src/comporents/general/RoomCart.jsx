import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Divider } from '@mui/material';

const RoomCart = ({ id, title, img, price }) => {
    useEffect(() => {
        // Scroll reveal animations
        ScrollReveal().reveal('.RoomCart', {
            delay: 200,
            duration: 800,
            distance: '50px',
            origin: 'bottom'
        });
    }, []);

    return (
        <Card className='RoomCart'>
            <CardMedia component="img" alt={title} image={img} />

            <Divider />

            {/* Details Section */}
            <CardContent>
                <Typography variant='h5' component='div' style={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant='h6'>
                    {`Fiyat: $${price}`}
                </Typography>
            </CardContent>

            <Divider />

            {/* Pricing Section */}
            <CardActions>
                <Button component={Link} to={`/odalar/${id}`} className='card-actions-detail'>
                    Detaylar
                </Button>
                <Button className='card-actions-book'>
                    Rezervasyon Yap
                </Button>
            </CardActions>
        </Card>
    );
};

export default RoomCart;
