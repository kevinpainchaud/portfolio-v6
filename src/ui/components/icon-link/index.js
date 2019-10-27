import { h } from "preact";

import StyledLink from "../styled-link";

import { Host } from "./style";

const IconLink = ({ href, target, icon, children }) => (
    <Host>
        <svg>
            <use xlinkHref={`#${icon.id}`}></use>
        </svg>
        <StyledLink href={href} target={target}>
            {children}
        </StyledLink>
    </Host>
);

export default IconLink;
