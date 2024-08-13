import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBagShopping, faPenClip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Content = () => (
  <div id="content">
    <center>
      <h2>QUALITY TECH VIDEOS</h2>
      <div id="boxs">
        <div id="box1" className="box">
          <i></i>
          <a href="#">SHOP NOW</a>
        </div>
        <br />
        <div id="box2" className="box">
          <i></i>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} /> MKBHD
          </a>
        </div>
        <br />
        <div id="box3" className="box">
          <i></i>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} /> THE STUDIO
          </a>
        </div>
        <br />
        <div id="box4" className="box">
          <i></i>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} /> PODCAST
          </a>
        </div>
        <br />
        <div id="box5" className="box">
          <i></i>
          <a href="#">
            <FontAwesomeIcon icon={faPenClip} /> APPLY
          </a>
        </div>
        <br />
      </div>
    </center>
  </div>
);

export default Content;
