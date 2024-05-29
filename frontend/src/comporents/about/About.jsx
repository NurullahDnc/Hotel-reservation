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
image={"https://images.pexels.com/photos/17154931/pexels-photo-17154931/free-photo-of-deniz-doga-tatil-mavi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}                     title={t('aboutUs')}
            />

            <div className='about-grid'>
                     <Grid item xs={12} md={7} className='about-grid-1'>
                        <img
                            src="https://yapigundem.com/wp-content/uploads/2023/08/yeni-donemde-145-yeni-otel-hizmete-acilacak-1.jpeg"
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
             </div>
        </div>
    );
};

export default About;
