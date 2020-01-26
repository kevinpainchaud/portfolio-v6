import { css } from "styled-components";

import { breakpoints } from "../variables/breakpoints";

export const before = (breakpoint, properties) => css`
    @media (max-width: ${breakpoints[breakpoint] - 1}px) {
        ${properties}
    }
`;

export const after = (breakpoint, properties) => css`
    @media (min-width: ${breakpoints[breakpoint]}px) {
        ${properties}
    }
`;

export const between = (breakpointFrom, breakpointTo, properties) => css`
    @media (min-width: ${breakpoints[
            breakpointFrom
        ]}px) and (max-width: ${breakpoints[breakpointTo] - 1}px) {
        ${properties}
    }
`;
