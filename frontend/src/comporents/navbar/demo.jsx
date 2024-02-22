import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloseIcon from '@mui/icons-material/Close';


import '../../scss/components/_demo.scss';

const Demo = () => {
    return (
        <AppBar position="static" className="demo">
            <Toolbar>
                {/* Şirket Logosu */}
                <img alt="Company Logo" className="company-logo" />

                {/* DesktopWindows Icon (Monitor Ekranı İkonu) */}
                <DesktopWindowsIcon className="monitor-logo" />

                {/* PhoneAndroid Icon (Akıllı Telefon Ekranı İkonu) */}
                <PhoneAndroidIcon className="phone-logo" />

                {/* Yazı: 'Bu şablonu istediğiniz gibi değiştirebilirsiniz.' */}
                <Typography variant="body2" className="instruction-text">Bu şablonu istediğiniz gibi değiştirebilirsiniz.</Typography>


                {/* Demoyu Talep Et Butonu */}
                <Button variant="contained" color="primary" className="request-demo-button">
                    Demoyu Talep Et
                </Button>

                {/* Kapatma Çarpısı */}
                <IconButton color="inherit" className="close-icon">
                    <CloseIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Demo;
