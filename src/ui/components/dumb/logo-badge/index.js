import { h } from "preact";
import PropTypes from "prop-types";

import Image from "../../dumb/image";
import Box from "../../styled/box";

import Host from "./style";

const LogoBadge = ({ type, slug, name, darker }) => {
    let dirName = null,
        logo = null;

    if (type === "technology") {
        dirName = "technologies";
    } else if (type === "tool") {
        dirName = "tools";
    }

    try {
        // eslint-disable-next-line no-undef
        logo = require(`../../../../statics/images/${dirName}/logos/logo-${slug}.png`)
            .default;
    } catch (error) {}

    return (
        <Host>
            <Box darker={darker}>
                <Image src={logo} alt={`Logo ${name}`} lazyload />
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
