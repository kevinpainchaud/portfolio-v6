import { h } from "preact";

import Box from "../../styled/box";

import Host from "./style";

const logoBadge = ({ type, slug, name, darker }) => {
    let dirName = null,
        logoId = null;

    if (type === "technology") {
        dirName = "technologies";
    } else if (type === "tool") {
        dirName = "tools";
    }

    try {
        logoId = require(`../../../assets/images/logos/${dirName}/logo-${slug}.svg`)
            .default.id;
    } catch (error) {}

    return (
        <Host>
            <Box darker={darker}>
                <svg>
                    <use xlinkHref={`#${logoId}`}></use>
                </svg>
            </Box>
            <div>{name}</div>
        </Host>
    );
};

export default logoBadge;
