import { h } from "preact";
import PropTypes from "prop-types";

import Host from "./style";

const LinksGroup = ({ title, children }) => (
    <Host>
        <div>{title}</div>
        {children}
    </Host>
);

LinksGroup.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default LinksGroup;
