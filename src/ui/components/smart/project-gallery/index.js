import { h } from "preact";

import Gallery from "../../dumb/gallery";

const ProjectGallery = ({ slug, layout = [] }) => {
    const items = [];

    // Construct the items array
    layout.forEach(row => {
        row.forEach(image => {
            const isXxlWidth = row.length === 1,
                item = {
                    width: isXxlWidth ? "xxl" : "default",
                    w: image.width,
                    h: image.height
                };

            let mdImageSrc = null,
                lgImageSrc = null;

            try {
                mdImageSrc = require(`../../../../statics/images/projects/gallery/${slug}/md/${image.filename}`);
                lgImageSrc = require(`../../../../statics/images/projects/gallery/${slug}/lg/${image.filename}`);
            } catch (error) {}

            if (mdImageSrc && lgImageSrc) {
                item.thumbnail = mdImageSrc;
                item.src = lgImageSrc;

                items.push(item);
            }
        });
    });

    return <Gallery items={items} />;
};

export default ProjectGallery;
