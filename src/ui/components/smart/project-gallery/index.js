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
                    w: 1920,
                    h: 1080
                };

            let mdImageSrc = null,
                lgImageSrc = null;

            try {
                mdImageSrc = require(`../../../../statics/images/gallery/${slug}/md/${image}`);
                lgImageSrc = require(`../../../../statics/images/gallery/${slug}/lg/${image}`);
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
