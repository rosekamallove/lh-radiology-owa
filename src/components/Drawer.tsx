import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import BreadCrumbs from "./BreadCrumbs";

import {
  Home,
  ListAlt,
  PersonAddAlt,
  PersonOutline,
} from "@mui/icons-material";
import Link from "@mui/material/Link";

const drawerWidth = 240;

interface p {
  window?: any;
  children: JSX.Element;
}

const ResponsiveDrawer: React.FC<p> = ({ window, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navbarLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Search Patient",
      href: "/search-patient",
      icon: PersonOutline,
    },
    {
      name: "Create Patient",
      href: "/create-patient",
      icon: PersonAddAlt,
    },
    {
      name: "Active Visit",
      href: "/active-visit",
      icon: ListAlt,
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <img
          width={drawerWidth - 60}
          src="https://librehealth.io/img/logo.png"
          alt="Logo"
        />
      </Toolbar>
      <Divider />
      <List>
        {navbarLinks.map((n) => (
          <Link href={n.href} key={n.href} underline="none" color="inherit">
            <ListItem disablePadding sx={{ backgroundColor: "" }}>
              <ListItemButton>
                <ListItemIcon>
                  <n.icon />
                </ListItemIcon>
                <ListItemText primary={n.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <BreadCrumbs />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#FFF9F3",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#FFF9F3",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          mt: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
