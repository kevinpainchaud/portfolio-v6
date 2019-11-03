import { css } from "styled-components";

export const base = css`
    body {
        font-family: ${props => props.theme.base.fontFamily};
        font-size: 14px;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }
`;
