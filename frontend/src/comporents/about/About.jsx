import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitleImage from '../general/PageTitleImage';
import { Grid, Typography, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { blue } from '@mui/material/colors';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className='about'>
            <PageTitleImage
                image="https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"
                title={t('Hakkımızda')}
            />

            <div className='about-grid'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6.8} className='about-grid-1'>
                        <img
                            alt="about-image"
                            className="about-grid-1-image"
                        />
                    </Grid>
                    <Grid item xs={12} md={5.2} className='about-grid-2'>
                        <div className='about-grid-2-typography'>{t('logoDescription')}</div>
                        <div className='about-grid-2-telNo'>
                            <PhoneIcon style={{ marginRight: '8px', color: 'blue' }} /> 1 (234) 567-891
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default About;
