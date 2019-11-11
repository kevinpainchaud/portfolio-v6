import { h } from "preact";

import StyledLink from "../../styled/styled-link";

import Host from "./style";

const IconLink = ({
    href,
    target,
    tagName,
    icon,
    iconWidthXs,
    className,
    children
}) => (
    <Host iconWidthXs={iconWidthXs} className={className}>
        <svg>
            <use xlinkHref={`#${icon.id}`}></use>
        </svg>
        <StyledLink href={href} target={target} tagName={tagName}>
            {children}
        </StyledLink>
    </Host>
);

export default IconLink;
