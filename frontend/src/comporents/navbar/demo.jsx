import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloseIcon from '@mui/icons-material/Close';

const Demo = () => {
    return (
        <AppBar position="static" className="demo">
            <Toolbar>
                {/* Şirket Logosu */}
                <img alt="Company Logo" className="company-logo" />

                {/* DesktopWindows Icon (Monitor Ekranı İkonu) */}
                <IconLogo icon={<DesktopWindowsIcon />} className="monitor-logo" />

                {/* PhoneAndroid Icon (Akıllı Telefon Ekranı İkonu) */}
                <IconLogo icon={<PhoneAndroidIcon />} className="phone-logo" />

                {/* Yazı: 'Bu şablonu istediğiniz gibi değiştirebilirsiniz.' */}
                <Typography className="instruction-text">
                    Bu şablonu istediğiniz gibi değiştirebilirsiniz.
                </Typography>

                {/* Demoyu Talep Et Butonu */}
                <Button className="request-demo-button">
                    Demoyu Talep Et
                </Button>

                {/* Kapatma Çarpısı */}
                <IconButton className="close-icon">
                    <CloseIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

// IconLogo bileşeni, icon prop'unu alır ve gerekirse ek bir sınıf ekler
const IconLogo = ({ icon, className }) => {
    return <div className={`logo ${className}`}>{icon}</div>;
}

export default Demo;
