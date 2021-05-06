import { h } from "preact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

import { Host } from "./style";

const Image = ({ src, alt, lazyload }) => (
    <Host className="img">
        {lazyload ? (
            <LazyLoadImage effect="none" threshold="300" src={src} alt={alt} />
        ) : (
            <img src={src} alt={alt} />
        )}
    </Host>
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
