import React from 'react';
import { useTranslation } from 'react-i18next';
import Heading from '../general/Heading';
import PageTitleImage from '../general/PageTitleImage';

import { Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const About = () => {
    const { t } = useTranslation();
    const phoneNumber = '1 (234) 567-891';

    return (
        <div className='about'>
            <PageTitleImage
                image="https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"
                title={t('aboutUs')}
            />

            <div className='about-grid'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} className='about-grid-1'>
                        <img
                            src="./image/about.jpg"
                            alt="about-image"
                            className="about-grid-1-image"
                        />
                    </Grid>
                    <Grid item xs={12} md={5} className='about-grid-2'>
                        <div className='about-grid-2-typography'>
                            <Heading title={t('whoAreWe')} />
                            {t('logoDescription')}</div>
                        <div className='about-grid-2-telNo'>
                            <PhoneIcon style={{ marginRight: '8px', color: 'blue' }} /> {phoneNumber}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default About;
