import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBagShopping, faPenClip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header>
    <nav id="nav1">
      <a id="bars" href="#">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    </nav>
    <div id="image">
      <img
        src="https://imgproxy.fourthwall.com/wkGkYtIGpYJb8RFdR8dWlQraEaFABvRNywKU25LJ8O0/w:48/dpr:2/plain/https://storage.googleapis.com/cdn.fourthwall.com/shops/sh_5a12e460-1e27-4680-b206-77074242703a/themes/f85d089b-d288-45af-a53c-7818c8f8c658.png"
        alt="Loading"
      />
    </div>
    <nav id="nav2">
      <a href="#">Shop</a>
      <a href="#">MKBHD</a>
      <a href="#">The Studio</a>
      <a href="#">Podcast</a>
      <a href="#">Apply</a>
      <FontAwesomeIcon icon={faBagShopping} />
    </nav>
  </header>
);

export default Header;
