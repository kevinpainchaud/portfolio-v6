import { h } from "preact";
import PropTypes from "prop-types";

import Gallery from "../../dumb/gallery";

const ProjectGallery = ({ slug, layout = [] }) => {
    const items = [];

    // Construct the items array
    layout.forEach((row) => {
        row.forEach((image) => {
            const isXxlWidth = row.length === 1,
                item = {
                    width: isXxlWidth ? "xxl" : "default",
                    w: image.width,
                    h: image.height,
                };

            item.thumbnail = `/images/projects/gallery/${slug}/md/${image.filename}`;
            item.src = `/images/projects/gallery/${slug}/lg/${image.filename}`;

            items.push(item);
        });
    });

    return <Gallery items={items} />;
};

ProjectGallery.propTypes = {
    slug: PropTypes.string,
    layout: PropTypes.array,
};

export default ProjectGallery;
