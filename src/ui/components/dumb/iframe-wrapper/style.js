import styled, { css, keyframes } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

import Box from "../../../components/styled/box";

const spin = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`;

export const Host = styled(Box)`
    display: inline-block;
    position: relative;
    overflow: hidden;

    ${after(
        "sm",
        css`
            padding: 15px;
        `
    )}
`;

export const Iframe = styled.iframe`
    border: 0;
    max-width: 100%;
`;

export const Loader = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.gray300};
    content: "";
    display: none;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    > svg {
        animation: ${spin} 1s infinite cubic-bezier(0.165, 0.84, 0.44, 1);
        height: 48px;
        min-width: 48px;
        width: 48px;

        > use {
            fill: ${props => props.theme.colors.primary};
        }
    }

    .loading & {
        display: flex;
    }
`;

[Loader].forEach(s => {
    s.defaultProps = {
        theme: {
            base: {
                borderRadius: 0
            },
            colors: {
                primary: "gray",
                gray300: "#c4c4c4"
            }
        }
    };
});
