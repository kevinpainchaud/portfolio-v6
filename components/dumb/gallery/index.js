import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { PhotoSwipeGallery } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";
import PropTypes from "prop-types";

import { Host } from "./style";

const Gallery = ({ items = [] }) => {
    const photoSwipeGalleryRef = useRef(),
        options = { history: false, shareEl: false },
        getThumbnailContent = (item) => {
            return <img src={item.thumbnail} />;
        };

    useEffect(() => {
        // Adding class to the thumbnails
        if (photoSwipeGalleryRef.current.thumbnails) {
            photoSwipeGalleryRef.current.thumbnails.forEach((thumbnail, i) => {
                thumbnail.classList.add(
                    "thumbnail",
                    `thumbnail--width-${items[i].width}`
                );
            });
        }
    }, []);

    return (
        <Host>
            <PhotoSwipeGallery
                ref={photoSwipeGalleryRef}
                items={items}
                options={options}
                thumbnailContent={getThumbnailContent}
            />
        </Host>
    );
};

Gallery.propTypes = {
    items: PropTypes.array,
};

export default Gallery;
