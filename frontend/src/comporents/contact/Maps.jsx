// GoogleMap.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Heading from '../general/Heading';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 0,
    margin: "30px 0",
};

 
const Maps = () => {
    return (
        <div>
            <Heading title={"Biz Nerdeyiz"} />

            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6380722659196!2d29.024227375561722!3d41.07690331519716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab722108c31fb%3A0x22d0e0353c3ad409!2sAkmerkez!5e0!3m2!1str!2str!4v1709209844910!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ ...mapContainerStyle }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>);
};

export default Maps;
