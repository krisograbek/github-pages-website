import Brightness4 from '@mui/icons-material/Brightness4';
import WbSunny from '@mui/icons-material/WbSunny';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';

function SwitchThemeMode(props) {
  const { themeMode, setThemeMode } = props;
  const Icon = themeMode ? WbSunny : Brightness4;
  const trigger = useScrollTrigger();

  return (
    <Box
      role="presentation"
      position='fixed'
      right={{ xs: 8, sm: 24, lg: 32 }}
      top={trigger ? 20 : 60}
      onClick={() => setThemeMode(!themeMode)}
    >
      <IconButton
        edge="end"
        color="primary"
        size="small"
        aria-label="mode"
      >
        <Icon fontSize="medium" />
      </IconButton>
    </Box >
  )
}

export default SwitchThemeMode
