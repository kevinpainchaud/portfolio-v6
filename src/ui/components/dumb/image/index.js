import { h } from "preact";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ src }) => <LazyLoadImage effect="blur" src={src} />;

export default Image;
