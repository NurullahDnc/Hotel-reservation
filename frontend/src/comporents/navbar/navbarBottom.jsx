import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal'

const NavbarBottom = () => {

    useEffect(()=>{


        ScrollReveal().reveal('.button', {
            origin: "top",
            distance: "50px",
            duration: 1000,
            easing: "ease-in-out",
            interval: 400

        })
    },[])

    //menuler uzerinde map ile donulmeli :)

    return (
        <AppBar position="static" className='navbarBottom'>
            <Toolbar className='navbarBottom-toolbar'>
                <Button component={Link} to="/" className='button'>ANASAYFA</Button>
                <Button component={Link} to="/hakkımızda" className='button'>HAKKIMIZDA</Button>
                <Button component={Link} to="/odalar" className='button'>ODALAR</Button>
                <Button component={Link} to="/aktiviteler" className='button'>AKTİVİTELER</Button>
                <Button component={Link} to="/restaurant" className='button'>RESTORAN</Button>
                <Button component={Link} to="/galeri" className='button'>GALERİ</Button>
                <Button component={Link} to="/iletisim" className='button'>İLETİŞİM</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarBottom;
