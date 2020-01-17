import { h } from "preact";

import StyledLink from "../../styled/styled-link";

import Host from "./style";

const IconLink = ({
    href,
    target,
    tagName,
    icon,
    iconWidthXs,
    gray,
    className,
    children
}) => (
    <Host iconWidthXs={iconWidthXs} gray={gray} className={className}>
        <svg>
            <use xlinkHref={`#${icon.id}`}></use>
        </svg>
        <StyledLink href={href} target={target} tagName={tagName}>
            {children}
        </StyledLink>
    </Host>
);

export default IconLink;
