import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import Drawer from "./drawer";
import DarkModeSwitch from "./darkModeSwitch";
import { StaticImage } from "gatsby-plugin-image";

export default function Navigation() {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            color: "black",
            paddingY: "10px",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Logo */}
            <StaticImage src="../../images/logo.png" alt="Suwa Diviya" height={60} />
          </Typography>
          {/* Desktop Only */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Mobile Only */}
          <div className="md:hidden">
            <Drawer />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
