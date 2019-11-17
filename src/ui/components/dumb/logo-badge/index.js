import { h } from "preact";

import Host from "./style";

const logoBadge = ({ type, slug, name }) => {
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
            <div>
                <svg>
                    <use xlinkHref={`#${logoId}`}></use>
                </svg>
            </div>
            <div>{name}</div>
        </Host>
    );
};

export default logoBadge;
