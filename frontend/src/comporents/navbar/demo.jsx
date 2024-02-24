import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloseIcon from '@mui/icons-material/Close';



const Demo = ({ onClose }) => {
    return (
        <AppBar position="static" className="demo">
            <Toolbar className="demo-toolbar">
                <img alt="Company Logo" className="demo-toolbar-companyLogo" />
                <DesktopWindowsIcon className="demo-toolbar-monitorLogo" />
                <PhoneAndroidIcon className="demo-toolbar-phoneLogo" />
                <Typography variant="body2" className="demo-toolbar-instructionText">Bu şablonu istediğiniz gibi değiştirebilirsiniz.</Typography>
                <Button variant="contained" color="primary" className="demo-toolbar-requestDemoButton">
                    Demoyu Talep Et
                </Button>
                <IconButton color="inherit" className="demo-toolbar-closeIcon" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Demo;
