import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import '../../scss/components/_navbar2.scss';

const Navbar2 = () => {
    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="toolbar">
                <Button component={Link} to="/" className="navButton">
                    Anasayfa
                </Button>
                <Button component={Link} to="/hakkimizda" className="navButton">
                    HAKKIMIZDA
                </Button>
                <Button component={Link} to="/odalar" className="navButton">
                    ODALAR
                </Button>
                <Button component={Link} to="/aktiviteler" className="navButton">
                    AKTİVİTELER
                </Button>
                <Button component={Link} to="/restoran" className="navButton">
                    RESTORAN
                </Button>
                <Button component={Link} to="/galeri" className="navButton">
                    GALERİ
                </Button>
                <Button component={Link} to="/iletisim" className="navButton">
                    İLETİŞİM
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar2;
