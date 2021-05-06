import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

export const Host = styled.div``;

export const Backdrop = styled.div`
    background-color: #000;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(-100%);
    transition: opacity 0.3s, transform 0s;
    transition-delay: 0s, 0.3s;
    z-index: 1;

    &.visible {
        opacity: 0.5;
        transform: translateY(0%);
        transition-delay: 0s, 0s;
    }
`;

export const Wrapper = styled.div`
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 30px;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(-100%);
    transition: transform 0s;
    transition-delay: 0.3s;
    z-index: 1;

    &.visible {
        transform: translateY(0%);
        transition-delay: 0s;
    }
`;

export const Outside = styled.div`
    display: ${(props) => (props.show ? "block" : "none")};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
`;

export const Dialog = styled.div`
    background-color: #fff;
    border-radius: ${(props) => props.theme.base.borderRadius}px;
    opacity: 0;
    margin: 30px auto;
    max-width: 500px;
    transform: translateY(-30px);
    transition: opacity 0.3s, transform 0.3s;
    transition-delay: 0s, 0s;

    ${after(
        "sm",
        css`
            margin-top: 50px;
        `
    )}

    &.visible {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const Content = styled.div``;

export const Header = styled.div`
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
    display: flex;
    padding: 15px;
`;

export const HeaderTitle = styled.div`
    color: ${(props) => props.theme.colors.primary};
    flex: 1;
    font-weight: 600;
    text-align: center;
`;

export const HeaderBtnClose = styled.div`
    cursor: pointer;
    margin-left: 15px;

    > svg {
        height: 16px;
        min-width: 16px;
        width: 16px;

        > use {
            fill: ${(props) => props.theme.colors.grayBase};
        }
    }
`;

export const Body = styled.div`
    padding: 15px;
`;

[Dialog, Header, HeaderTitle, HeaderBtnClose].forEach((s) => {
    s.defaultProps = {
        theme: {
            base: {
                borderRadius: 0,
            },
            colors: {
                primary: "gray",
                gray400: "#c4c4c4",
                grayBase: "gray",
            },
        },
    };
});
