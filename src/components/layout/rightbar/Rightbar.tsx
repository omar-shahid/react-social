import React from "react";
import "./rightbar.scss";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1077392/pexels-photo-1077392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=640&h=419&dpr=1"
                alt=""
              />
              <span>John</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1077392/pexels-photo-1077392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>Doe</span> messaged you
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4143686/pexels-photo-4143686.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&dpr=1"
                alt=""
              />
              <p>
                <span>Hela</span> updated profile
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/16614544/pexels-photo-16614544/free-photo-of-cat-sleeping-on-table.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&dpr=1"
                alt=""
              />
              <p>
                <span>Jake</span> liked your post
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online</span>

          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/7128959/pexels-photo-7128959.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&dpr=1"
                alt=""
              />
              <div className="online"></div>
              <span>Carl</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/9545547/pexels-photo-9545547.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&dpr=1"
                alt=""
              />
              <div className="online"></div>
              <span>Lars</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1077392/pexels-photo-1077392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"></div>
              <span>Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
