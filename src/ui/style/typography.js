import { css } from "styled-components";

const typography = css`
    h1,
    h2,
    h3,
    h4 {
        font-family: ${props => props.theme.headings.fontFamily};
        font-weight: 700;
        color: ${props => props.theme.colors.primary};
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 26px;
    }
`;

export default typography;
