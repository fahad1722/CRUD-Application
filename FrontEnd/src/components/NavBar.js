import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={location.pathname}>
          <Tab
            label="HOME"
            component={Link}
            to="/"
            color="black"
            sx={location.pathname === "/" ? {color:'white'} : ''}
          />
          <Tab
            label="ALL USERS"
            component={Link}
            to="/all"
            sx={location.pathname === "/all" ? {color:'white'} : ''}
          />
          <Tab
            label="ADD USER"
            component={Link}
            to="/add"
            sx={location.pathname === "/add" ? {color:'white'} : ''}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
