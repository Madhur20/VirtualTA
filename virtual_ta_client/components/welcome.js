import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function WelcomeAppBar() {
  return (
    <Box sx={{ padding: 5, flex: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#565656", padding: 1 }}>
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: 'white', textAlign: 'center', fontFamily: "calibri" }}>
            Welcome to your Virtual TA
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}