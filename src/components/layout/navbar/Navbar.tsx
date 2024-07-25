import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { DarkmodeContext } from "../../../context/darkmode";

function Navbar() {
  const { darkmode, toggle } = useContext(DarkmodeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Site</span>
        </Link>
        <HomeOutlinedIcon />
        <button onClick={toggle}>{darkmode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}</button>
        <GridViewOutlinedIcon />
      </div>
      <div className="search">
        <SearchOutlinedIcon />
        <input placeholder="Search..." type="text" />
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/18128249/pexels-photo-18128249/free-photo-of-asphalt-road-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          <span>Jason</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
