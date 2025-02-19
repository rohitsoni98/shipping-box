import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { buttonConfig } from "../../../helper/constants/navbar";

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        {buttonConfig.map(({ label, to }, index) => (
          <Button
            to={to}
            color="inherit"
            component={Link}
            key={`navbar-btn-${index + 1}`}
            sx={{ borderBottom: location.pathname === to ? "1px solid #fff" : "none" }}
          >
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
