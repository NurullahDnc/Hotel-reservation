import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarBottom = () => {
    return (
        <AppBar position="static" className='navbarBottom'>
            <Toolbar className='navbarBottom-toolbar'>
                <Button component={Link} to="/" className='button'>ANASAYFA</Button>
                <Button component={Link} to="/hakkimizda" className='button'>HAKKIMIZDA</Button>
                <Button component={Link} to="/odalar" className='button'>ODALAR</Button>
                <Button component={Link} to="/aktiviteler" className='button'>AKTİVİTELER</Button>
                <Button component={Link} to="/restoran" className='button'>RESTORAN</Button>
                <Button component={Link} to="/galeri" className='button'>GALERİ</Button>
                <Button component={Link} to="/iletisim" className='button'>İLETİŞİM</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarBottom;
