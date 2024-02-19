import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

function Profile() {
  return (
    <div className="profile">
      <div className="topSection">
        <img
          src="https://images.pexels.com/photos/20188447/pexels-photo-20188447/free-photo-of-two-seagulls-flying-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />

        <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/1077392/pexels-photo-1077392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="profilePic"
              />
            </div>
            <div className="center">
              <div className="options">
                <span>John Doe</span>
                <MoreVertIcon />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span>USA</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>hasan.dev</span>
                </div>
              </div>
            </div>
            <div className="right">
              <button>follow</button>
              <EmailOutlinedIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
      <div className="posts">
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
