import { h } from "preact";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import { Host } from "./style";

const Image = ({ src, alt }) => (
    <Host class="img">
        <LazyLoadImage effect="blur" src={src} alt={alt} />
    </Host>
);

export default Image;