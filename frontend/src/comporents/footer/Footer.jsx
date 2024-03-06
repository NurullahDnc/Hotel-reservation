// Footer.jsx
import React from 'react';
import { Container, Grid, Typography, Link, TextField, Button, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <Grid container spacing={3} className='footer-container-grid'>
          <Grid item xs={12} md={2} className='footer-container-grid'>
            <img alt="footer-logo" className="footer-container-grid-logo" />
            <Typography className='logo-description'>
              {t('logoDescription')}
            </Typography>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-menu'>
            <Typography variant="h6" className='header'>{t('menu')}</Typography>
            <Link href="#" className='footer-link'>{t('aboutUs')}</Link>
            <Link href="#" className='footer-link'>{t('contact')}</Link>
            <Link href="#" className='footer-link'>{t('termsAndConditions')}</Link>
            <Link href="#" className='footer-link'>{t('privacyPolicy')}</Link>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-follow'>
            <Typography variant="h6" className='header'>{t('followUs')}</Typography>
            <Link href="#" className='footer-link'>{t('facebook')}</Link>
            <Link href="#" className='footer-link'>{t('twitter')}</Link>
            <Link href="#" className='footer-link'>{t('instagram')}</Link>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-newsletter'>
            <Typography variant="h6" className='header'>{t('newsletter')}</Typography>
            <TextField
              className='textfield'
              label={t('emailAddress')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" className='subscribe'>{t('subscribe')}</Button>
          </Grid>
        </Grid>
      </Container>
      <div className='copyright'>
        <Typography className='copyright-text'>
          {t('copyright')}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
