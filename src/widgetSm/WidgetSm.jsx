import "./widgetsm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

const widgetSm = () => {
 return (  
  <div className="widgetSm">
   <span className="widgetSmTitle">New Join Members</span>
   <ul className="widgetSmList">
    <li className="widgetSmListItem">
     <img src="assets/images/1.webp" alt="" className="widgetSmImg" />
     <div className="widgetSmUser">
      <span className="widgetSmUsername">User 1</span>
      <span className="widgetSmUserTitle">Software Engineer</span>
     </div>
     <button className="widgetSmButton">
     <VisibilityIcon className="widgetSmIcon"  />
     Display
     </button>
    </li>

    <li className="widgetSmListItem">
     <img src="assets/images/1.webp" alt="" className="widgetSmImg" />
     <div className="widgetSmUser">
      <span className="widgetSmUsername">User 1</span>
      <span className="widgetSmUserTitle">Software Engineer</span>
     </div>
     <button className="widgetSmButton">
     <VisibilityIcon className="widgetSmIcon"  />
     Display
     </button>
    </li>

    <li className="widgetSmListItem">
     <img src="assets/images/1.webp" alt="" className="widgetSmImg" />
     <div className="widgetSmUser">
      <span className="widgetSmUsername">User 1</span>
      <span className="widgetSmUserTitle">Software Engineer</span>
     </div>
     <button className="widgetSmButton">
     <VisibilityIcon className="widgetSmIcon"  />
     Display
     </button>
    </li>

    <li className="widgetSmListItem">
     <img src="assets/images/1.webp" alt="" className="widgetSmImg" />
     <div className="widgetSmUser">
      <span className="widgetSmUsername">User 1</span>
      <span className="widgetSmUserTitle">Software Engineer</span>
     </div>
     <button className="widgetSmButton">
     <VisibilityIcon className="widgetSmIcon"  />
     Display
     </button>
    </li>

    <li className="widgetSmListItem">
     <img src="assets/images/1.webp" alt="" className="widgetSmImg" />
     <div className="widgetSmUser">
      <span className="widgetSmUsername">User 1</span>
      <span className="widgetSmUserTitle">Software Engineer</span>
     </div>
     <button className="widgetSmButton">
     <VisibilityIcon className="widgetSmIcon" />
     Display
     </button>
    </li>
   </ul>
  </div>
 );
}
 
export default widgetSm;