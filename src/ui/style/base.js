import { css } from "styled-components";

const base = css`
    body {
        font-family: ${props => props.theme.base.fontFamily};
        font-size: 14px;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`;

export default base;