// External imports
import * as React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Box, Drawer, CssBaseline, Toolbar, List, Divider,
IconButton, ListItem, ListItemIcon, ListItemText, Avatar, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

// Internal imports
import './appbar.css';
import logo from '../../assets/img/dashboard-logo.svg';

const drawerWidth = 200;

// App bar style setup
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Drawer header setup
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '1rem',
    background: "#1565D8",
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const StyledList = styled(List)({
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
      backgroundColor: '#1D2B4F;',
      '&, & .MuiListItemIcon-root': {
        color: '#FFFFFF',
      },
    },
    
    // hover states
    '& .MuiListItemButton-root:hover': {
      backgroundColor: 'orange',
      '&, & .MuiListItemIcon-root': {
        color: 'yellow',
      },
    },
});

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const location = useLocation();
    const [open, setOpen] = React.useState(true);

    // Handle sidebar visibility on page load
    React.useEffect(() => {
        if (window.screen.width > 1000) {
            setOpen(true);
            return;
        }

        setOpen(false);
    }, [])

    // Handle sidebar visibility for different screen sizes
    window.addEventListener('resize', function() {
        if (window.screen.width > 1000) {
            setOpen(true);
            return;
        }

        setOpen(false);
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar
                    sx={{
                        background: 'white',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                        <MenuIcon />
                    </IconButton>
                    <div className="flex gap-6 topProfileArea">
                        <div className="pt-2">
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon color="action" />
                            </Badge>
                        </div>
                        <div>
                            <Avatar alt="Remy Sharp" src="https://cdn.vuetifyjs.com/images/john.png" />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: '#1565D8',
                    color: 'white'
                },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <img src={logo} alt="logo" width={100} height={50} />
                    <IconButton onClick={handleDrawerClose} className="hideSideBar">
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider /> 
                <StyledList>
                    <ListItem sx={{ marginBottom: '1rem' }} component={Link} to="/dashboard" selected={'/dashboard' === location.pathname ? true : false}>
                        <ListItemIcon sx={{ color: 'white'}}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Dashboard</ListItemText>
                    </ListItem>
                    <ListItem sx={{ marginBottom: '1rem'}} component={Link} to="/games" selected={'/games' === location.pathname ? true : false}>
                        <ListItemIcon sx={{ color: 'white'}}>
                            <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Games</ListItemText>
                    </ListItem>
                    <ListItem sx={{ marginBottom: '1rem'}} component={Link} to="/users" selected={'/users' === location.pathname ? true : false}>
                        <ListItemIcon sx={{ color: 'white'}}>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Customers</ListItemText>
                    </ListItem>
                    <ListItem sx={{ marginBottom: '1rem'}} button>
                        <ListItemIcon sx={{ color: 'white'}}>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Settings</ListItemText>
                    </ListItem>
                    <ListItem sx={{ marginBottom: '1rem'}} component={Link} to="/">
                        <ListItemIcon sx={{ color: 'white'}}>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ fontSize: '0.8rem'}} disableTypography>Logout</ListItemText>
                    </ListItem>
                </StyledList>
            </Drawer>
        </Box>
    );
}
