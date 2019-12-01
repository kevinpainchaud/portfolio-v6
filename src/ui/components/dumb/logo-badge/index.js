import { h } from "preact";

import Box from "../../styled/box";

import Host from "./style";

const logoBadge = ({ type, slug, name, darker }) => {
    let dirName = null,
        logo = null;

    if (type === "technology") {
        dirName = "technologies";
    } else if (type === "tool") {
        dirName = "tools";
    }

    try {
        logo = require(`../../../../statics/images/${dirName}/logos/logo-${slug}.png`);
    } catch (error) {}

    return (
        <Host>
            <Box darker={darker}>
                <img src={logo} alt={`Logo ${name}`} />
            </Box>
            <div>{name}</div>
        </Host>
    );
};

export default logoBadge;
