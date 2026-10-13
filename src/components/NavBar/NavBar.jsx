import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import {
  Clapperboard,
  Home,
  Info,
  Menu as MenuIcon,
  Plus,
  Tv,
  X
} from 'lucide-react'
import './NavBar.css'

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const menuItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/about', label: 'Sobre', icon: <Info size={20} /> },
    { path: '/create', label: 'Cadastrar', icon: <Plus size={20} /> },
    { path: '/series', label: 'Lista de series', icon: <Tv size={20} /> }
  ]

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} className="navbar-drawer-root">
      <Box className="navbar-drawer-close-wrap">
        <IconButton color="inherit">
          <X size={24} />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            className={`navbar-list-item${isActive(item.path) ? ' navbar-list-item-active' : ''}`}
          >
            <ListItemIcon className="navbar-list-item-icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Box className="navbar-logo-wrap">
          <Clapperboard size={24} className="navbar-logo-icon" />
          <Typography variant="h6" className="navbar-brand-title">
            Série <Box component="span" className="navbar-brand-accent">Journal</Box>
          </Typography>
        </Box>

        <Box className="navbar-desktop-menu">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              startIcon={item.icon}
              className={`navbar-desktop-button${isActive(item.path) ? ' navbar-desktop-button-active' : ''}`}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(true)}
          className="navbar-mobile-menu-button"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ className: 'navbar-drawer-paper' }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default NavBar
