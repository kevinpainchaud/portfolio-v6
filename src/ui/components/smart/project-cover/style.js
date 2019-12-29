import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.div`
    padding-bottom: 35px;
    position: relative;

    ${after(
        "sm",
        css`
            padding-bottom: 55px;
        `
    )}
`;

export const BackgroundImage = styled.div`
    background-color: #000;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &:after {
        background-color: ${props => props.theme.colors.primary};
        content: "";
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

        ${after(
            "sm",
            css`
                opacity: 0.8;
            `
        )}
    }

    > .img {
        display: none;

        ${after(
            "sm",
            css`
                display: block;
                height: 100%;
                width: 100%;
            `
        )}

        img {
            object-fit: cover;
        }
    }
`;

export const Header = styled.div`
    position: relative;
    z-index: 1;
`;

export const Body = styled.div`
    position: relative;
    z-index: 1;

    * + & {
        margin-top: 25px;

        ${after(
            "sm",
            css`
                margin-top: 200px;
            `
        )}
    }
`;

export const BodyInner = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    > * + * {
        margin-top: 25px;
    }
`;

export const Title = styled.h1`
    color: #fff;
    margin: 0;
`;

export const Metas = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: -5px;

    ${after(
        "sm",
        css`
            flex-direction: row;
            margin: -10px;
        `
    )}

    * + & {
        margin-top: 10px;
    }

    > div {
        margin: 5px;

        ${after(
            "sm",
            css`
                margin: 10px;
            `
        )}
    }
`;

BackgroundImage.defaultProps = {
    theme: {
        colors: {
            primary: "gray",
            gray300: "#e1e1e1"
        }
    }
};
