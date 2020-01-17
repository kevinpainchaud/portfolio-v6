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
