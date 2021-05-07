import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";
import { layout } from "../../../assets/styles/variables/layout";

export const Host = styled.header`
    align-items: center;
    background-color: ${(props) =>
        props.transparent ? "transparent" : "#fff"};
    display: flex;
    height: ${layout.navbarHeight}px;
    position: relative;
    z-index: 1;

    ${after(
        "sm",
        css`
            height: ${layout.navbarHeightMd}px;
        `
    )}

    &:after {
        background-color: ${(props) => props.theme.colors.gray300};
        bottom: 0;
        content: "";
        display: ${(props) => (props.borderBottom ? "block" : "none")};
        height: 1px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1",
        },
    },
};

export default Host;
