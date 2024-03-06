import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const Demo = ({ onClose }) => {
    const { t } = useTranslation();

    return (
        <AppBar position="static" className="demo">
            <Toolbar className="demo-toolbar">
                <img alt='companyLogo' className="demo-toolbar-companyLogo" />
                <DesktopWindowsIcon className="demo-toolbar-monitorLogo" />
                <PhoneAndroidIcon className="demo-toolbar-phoneLogo" />
                <Typography variant="body2" className="demo-toolbar-instructionText">{t('instructionText')}</Typography>
                <Button variant="contained" className="demo-toolbar-requestDemoButton">
                    {t('requestDemoButton')}
                </Button>
                <IconButton className="demo-toolbar-closeIcon" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Demo;
