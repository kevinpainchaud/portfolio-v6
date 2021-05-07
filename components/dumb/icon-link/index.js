import { h } from "preact";
import PropTypes from "prop-types";

import StyledLink from "../../styled/styled-link";

import Host from "./style";

const IconLink = ({
    href,
    target,
    tagName,
    onClick,
    icon,
    iconWidthXs,
    gray,
    className,
    children,
}) => (
    <Host iconWidthXs={iconWidthXs} gray={gray} className={className}>
        <svg>
            <use xlinkHref={`#${icon.id}`}></use>
        </svg>
        <StyledLink
            href={href}
            target={target}
            tagName={tagName}
            onClick={onClick}
        >
            {children}
        </StyledLink>
    </Host>
);

IconLink.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    tagName: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.object,
    iconWidthXs: PropTypes.bool,
    gray: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default IconLink;
