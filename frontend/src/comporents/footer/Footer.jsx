import React from 'react';
import { Container, Grid, Typography, Link, TextField, Button, Divider } from '@mui/material';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <Grid container spacing={3} className='footer-container-grid'>

          <Grid item xs={12} md={2} className='footer-container-grid-logo'>
            {/*<img src={logoImage} alt="Logo" style={{ width: '100%', height: 'auto' }} />*/}
            LOGO
            <Typography variant="body2" className='logo-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sem in urna porttitor tincidunt.
            </Typography>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-menu'>
            <Typography variant="h6" >Menu </Typography>
            <Link href="#">Hakkımızda</Link>
            <Link href="#">İletişim</Link>
            <Link href="#">Şartlar ve Koşullar</Link>
            <Link href="#">Gizlilik Politikası</Link>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-follow'>
            <Typography variant="h6">Bizi Takip Edin:</Typography>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-newsletter'>
            <Typography variant="h6">Abonelik ve Haber Bülteni</Typography>
            {/* Abonelik ve haber bülteni formu veya input bileşeni buraya gelebilir */}
            <TextField className='textfield' label="E-posta Adresiniz" variant="outlined" fullWidth />
            <Button variant="contained" color="primary">Abone Ol</Button>
          </Grid>
        </Grid>

        <Typography variant="body2" color="textSecondary" align="center" >
          &copy; [Şirket Adı] [Yıl] - Tüm Hakları Saklıdır.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
