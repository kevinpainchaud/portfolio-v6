import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.header`
    align-items: center;
    background-color: ${(props) =>
        props.transparent ? "transparent" : "#fff"};
    border-bottom: ${(props) =>
        props.noBorderBottom ? null : "1px solid transparent"};
    border-bottom-color: ${(props) =>
        props.transparent ? "transparent" : props.theme.colors.gray300};
    display: flex;
    padding: 15px 0;
    position: relative;
    z-index: 1;

    ${after(
        "sm",
        css`
            padding: 45px 0;
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
