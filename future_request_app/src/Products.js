import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBagShopping, faPenClip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Product = ({ imgSrc, title, price }) => (
  <article>
    <FontAwesomeIcon icon={faPlus} />
    <img src={imgSrc} alt="Loading" />
    <h3>{title}</h3>
    <h3 style={{ paddingBottom: '20px' }}>{price}</h3>
  </article>
);

const Products = () => (
  <div id="product">
    <Product imgSrc="https://imgproxy.fourthwall.com/YiGJNP6CkUiiZjG8QqJm8vvZw3VrzgUUV7HJCAtutQM/w:640/plain/https://storage.googleapis.com/cdn.fourthwall.com/offer/sh_5a12e460-1e27-4680-b206-77074242703a/60450aa6-9e63-4d4a-a6d2-71c94b73e860.png" title="LIGHT MODE ALPINE FLASK" price="$30.00" />
    <Product imgSrc="https://imgproxy.fourthwall.com/R7PMd1d8J0agnqsBtJJqj7KHPuZzQbI8HlycE5AumXA/w:640/plain/https://storage.googleapis.com/cdn.fourthwall.com/offer/sh_5a12e460-1e27-4680-b206-77074242703a/74a12fea-0b99-47d8-93cc-ff328ea49e81.png" title="DARK MODE ALPINE FLASK" price="$30.00" />
    <Product imgSrc="https://imgproxy.fourthwall.com/PscLxgt6lkCuuXLJAksvG1XWDEV75YNTHmSq5Rf6mTU/w:640/plain/https://storage.googleapis.com/cdn.fourthwall.com/offer/sh_5a12e460-1e27-4680-b206-77074242703a/035066ef-1cd8-4e65-bf3b-528921648ddb.png" title="DESK MAT" price="$30.00" />
    <Product imgSrc="https://imgproxy.fourthwall.com/Zi7VYL1D7SSMHOtKvNtcLlw-D2j95fIOQtuh5R5a-3k/w:640/plain/https://storage.googleapis.com/cdn.fourthwall.com/offer/sh_5a12e460-1e27-4680-b206-77074242703a/a73329a5-2d00-4ffb-97db-90f1ee9dd39d.png" title="NEW STUDIO SCENT" price="$30.00" />
    <Product imgSrc="https://imgproxy.fourthwall.com/dDXV5aii0rQfDkFsousxuClgNX_YM3AwcApJL5oR5DI/w:640/plain/https://storage.googleapis.com/cdn.fourthwall.com/offer/sh_5a12e460-1e27-4680-b206-77074242703a/ed68bac1-e123-41a0-a916-cca7e742e10c.png" title="WAVEFORM COFFEE MUG" price="$30.00" />
    <Product imgSrc="https://imgproxy.fourthwall.com/FiDrn27Wm2XZ0amqUFFrAqJAGemn_vfkzIc2IpeLFmI/w:640/plain/https://storage.googleapis.com/cdn.fourthwall.com/offer/sh_5a12e460-1e27-4680-b206-77074242703a/48138db5-08ae-4623-8d92-eb0400fb88b4.png" title="MATTE BLACK EVERYTHING T-SHIRT" price="$30.00" />
  </div>
);

export default Products;