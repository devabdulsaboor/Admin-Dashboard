import "./user.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from "react-router-dom";

const User = () => {
 return ( 
  <div className="user">
   <div className="userTitleContainer">
    <h1 className="userTitle">Edit User</h1>
    <Link to="/newUser">
    <button className="userAddButton">Create</button>
    </Link>
   </div>
   <div className="userContainer">
    <div className="userShow">
     <div className="userShowTop">
      <img src="/assets/images/profile-11.jpg" alt="" className="userShowImg" />
      <div className="userShowTopTitle">
       <span className="userShowUserName">Johnny</span>
       <span className="userShowUserTitle">Software Engineer</span>
      </div>
     </div>
     <div className="userShowBottom">
      <span className="userShowTitle">Account  Details</span>
      <div className="userShowInfo">
      <PermIdentityIcon className="userShowIcon" />
      <span className="userShowInfoTitle">User199</span>
      </div>

      <div className="userShowInfo">
      <CalendarTodayIcon className="userShowIcon" />
      <span className="userShowInfoTitle">10.12.1999</span>
      </div>
      <span className="userShowTitle">Contact Details</span>
      <div className="userShowInfo">
      <PhoneAndroidIcon className="userShowIcon" />
      <span className="userShowInfoTitle">+1 123 456 780</span>
      </div>

      <div className="userShowInfo">
      <MailOutlineIcon className="userShowIcon" />
      <span className="userShowInfoTitle">User199@gmail.com</span>
      </div>

      <div className="userShowInfo">
      <LocationSearchingIcon className="userShowIcon" />
      <span className="userShowInfoTitle">City | Country</span>
      </div>
     </div>
    </div>
    <div className="userUpdate">
    <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="User199"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Johnny"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="user199@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="City | Country"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="/assets/images/profile-11.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default User;