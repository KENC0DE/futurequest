import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBagShopping, faPenClip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const VideoSection = () => (
  <div id="video">
    <nav>
      <article>
        <FontAwesomeIcon icon={faPlus} />
        <iframe
          src="https://www.youtube.com/embed/CkoquiSnqbk"
          title="Ford F150 Lightning is the iPhone of Pickup Trucks!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article>
      <article>
        <FontAwesomeIcon icon={faPlus} />
        <iframe
          src="https://www.youtube.com/embed/mrkAmmMakMg"
          title="The Nothing Phone LOOKS Different"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article>
      <article>
        <FontAwesomeIcon icon={faPlus} />
        <iframe
          src="https://www.youtube.com/embed/xcjZvAFBH_Y"
          title="This Was Ahead of its Time!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article>
      <article>
        <FontAwesomeIcon icon={faPlus} />
        <iframe
          src="https://www.youtube.com/embed/MjGMeMrH73I"
          title="M2 MacBook Air Impressions: Midnight Madness!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article>
    </nav>
  </div>
);

export default VideoSection;