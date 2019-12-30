import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.div`
    background-color: ${props =>
        props.background
            ? props.backgroundWhite
                ? "#fff"
                : props.theme.colors.gray300
            : "transparent"};
    border: ${props =>
        props.border ? `1px solid ${props.theme.colors.gray400}` : null};
    border-radius: ${props =>
        props.background ? props.theme.base.borderRadius : null}px;
    padding: 15px;
    padding-left: ${props => (props.noPaddingLeft ? "0px" : null)};
    padding-right: ${props => (props.noPaddingRight ? "0px" : null)};
    text-align: ${props => props.textAlign};

    ${after(
        "sm",
        css`
            padding: 25px;
        `
    )}
`;

const Title = css`
    margin: 0;
    text-align: ${props => props.textAlign};
`;

export const TitleH2 = styled.h2`
    ${Title}
`;

export const TitleH3 = styled.h3`
    ${Title}
`;

export const Content = styled.div`
    * + & {
        margin-top: 25px;
    }
`;

Host.defaultProps = {
    theme: {
        base: {
            borderRadius: 0
        },
        colors: {
            gray300: "#e1e1e1",
            gray400: "#c4c4c4"
        }
    }
};
