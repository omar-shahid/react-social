import Navbar from "./navbar/Navbar";
import Leftbar from "./leftbar/Leftbar";
import Rightbar from "./rightbar/Rightbar";
import { Outlet } from "react-router-dom";
import "./layout.scss";

function Layout() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default Layout;
