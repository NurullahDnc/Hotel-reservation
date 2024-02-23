import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const navItems = [
    { to: '/', label: 'Anasayfa' },
    { to: '/hakkimizda', label: 'HAKKIMIZDA' },
    { to: '/odalar', label: 'ODALAR' },
    { to: '/aktiviteler', label: 'AKTİVİTELER' },
    { to: '/restoran', label: 'RESTORAN' },
    { to: '/galeri', label: 'GALERİ' },
    { to: '/iletisim', label: 'İLETİŞİM' },
];

const Navbar2 = () => {
    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="toolbar">
                {navItems.map((item, index) => (
                    <Button key={index} component={Link} to={item.to} className="navButton">
                        {item.label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar2;
