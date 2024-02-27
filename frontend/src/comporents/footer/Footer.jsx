import React from 'react';
import { Container, Grid, Typography, Link, TextField, Button, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <Grid container spacing={3} className='footer-container-grid'>

          <Grid item xs={12} md={2} className='footer-container-grid'>
            <img alt="footer-logo" className="footer-container-grid-logo" />
            <Typography className='logo-description'>

              Tecrübeli teknik ekibimizle, güvenilir ve verimli hizmet anlayışımızla müşteri memnuniyeti ve kalite odaklı çalışıyoruz. Profesyonel yaklaşımımızla sektör standartlarına uygun çözümler sunarak, sürekli gelişmeyi ve müşteri beklentilerini aşmayı hedefliyoruz.
            </Typography>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-menu'>
            <Typography variant="h6" className='header'>Menu </Typography>
            <Link href="#" className='footer-link'>Hakkımızda</Link>
            <Link href="#" className='footer-link'>İletişim</Link>
            <Link href="#" className='footer-link'>Şartlar ve Koşullar</Link>
            <Link href="#" className='footer-link'>Gizlilik Politikası</Link>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-follow'>
            <Typography variant="h6" className='header'>Bizi Takip Edin</Typography>
            <Link href="#" className='footer-link'>Facebook</Link>
            <Link href="#" className='footer-link'>Twitter</Link>
            <Link href="#" className='footer-link'>Instagram</Link>
          </Grid>

          <Divider orientation="vertical" flexItem className='divider' />

          <Grid item xs={12} md={2.8} className='footer-container-grid-newsletter'>
            <Typography variant="h6" className='header'>Abonelik ve Haber Bülteni</Typography>
            <TextField
              className='textfield'
              label="E-posta Adresiniz"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" className='subscribe'>Abone Ol</Button>
          </Grid>
        </Grid>
      </Container>
      <div className='copyright'>
        <Typography className='copyright-text'>
          &copy; [STAYEASE] [2024] - Tüm Hakları Saklıdır.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
