import React from "react";
import "./leftbar.scss";
import friends from "../../../assets/1.png";
import groups from "../../../assets/2.png";
import market from "../../../assets/3.png";
import watch from "../../../assets/4.png";
import memories from "../../../assets/5.png";
import events from "../../../assets/6.png";
import gaming from "../../../assets/7.png";
import gallery from "../../../assets/8.png";
import videos from "../../../assets/9.png";
import messages from "../../../assets/10.png";
import tutorials from "../../../assets/11.png";
import courses from "../../../assets/12.png";
import funds from "../../../assets/13.png";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/1077392/pexels-photo-1077392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={funds} alt="" />
            <span>Funds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
