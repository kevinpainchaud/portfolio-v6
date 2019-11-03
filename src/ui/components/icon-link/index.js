import { h } from "preact";

import { StyledLink } from "../styled-link";

import { Host } from "./style";

export const IconLink = ({ href, target, icon, className, children }) => (
    <Host className={className}>
        <svg>
            <use xlinkHref={`#${icon.id}`}></use>
        </svg>
        <StyledLink href={href} target={target}>
            {children}
        </StyledLink>
    </Host>
);
