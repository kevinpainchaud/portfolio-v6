import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";
import { layout } from "../../../assets/styles/variables/layout";

export const Host = styled.header`
    align-items: center;
    background-color: ${(props) =>
        props.transparent ? "transparent" : "#fff"};
    border-bottom: ${(props) =>
        props.noBorderBottom ? null : "1px solid transparent"};
    border-bottom-color: ${(props) =>
        props.transparent ? "transparent" : props.theme.colors.gray300};
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
`;

Host.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1",
        },
    },
};

export default Host;
