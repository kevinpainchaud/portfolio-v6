import { h } from "preact";
import PropTypes from "prop-types";
import Image from "next/image";

import Box from "../../styled/box";

import Host from "./style";

const LogoBadge = ({ type, slug, name, darker }) => {
    let dirName = null;

    if (type === "technology") {
        dirName = "technologies";
    } else if (type === "tool") {
        dirName = "tools";
    }

    return (
        <Host>
            <Box darker={darker}>
                <Image
                    src={`/images/${dirName}/logos/logo-${slug}.png`}
                    alt={`Logo ${name}`}
                    width="45"
                    height="45"
                    lazyload
                />
            </Box>
            <div>{name}</div>
        </Host>
    );
};

LogoBadge.propTypes = {
    type: PropTypes.string,
    slug: PropTypes.string,
    name: PropTypes.string,
    darker: PropTypes.bool,
};

export default LogoBadge;
