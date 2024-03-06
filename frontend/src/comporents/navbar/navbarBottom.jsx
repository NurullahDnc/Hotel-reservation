import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const NavbarBottom = () => {
    useEffect(() => {
        ScrollReveal().reveal('.button', {
            origin: "top",
            distance: "50px",
            duration: 1000,
            easing: "ease-in-out",
            interval: 400
        });
    }, []);

    const { t } = useTranslation();

    return (
        <AppBar position="static" className='navbarBottom'>
            <Toolbar className='navbarBottom-toolbar'>
                <Button component={Link} to="/" className='button'>{t('homePage')}</Button>
                <Button component={Link} to="/hakkımızda" className='button'>{t('aboutUs')}</Button>
                <Button component={Link} to="/odalar" className='button'>{t('rooms')}</Button>
                <Button component={Link} to="/aktiviteler" className='button'>{t('activities')}</Button>
                <Button component={Link} to="/restaurant" className='button'>{t('restaurant')}</Button>
                <Button component={Link} to="/galeri" className='button'>{t('gallery')}</Button>
                <Button component={Link} to="/iletisim" className='button'>{t('contact')}</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarBottom;
