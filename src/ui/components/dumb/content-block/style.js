import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray300 : null};
`;

const getInnerBorderRadius = props => {
    let borderRadius = null;

    if (
        props.background &&
        !(props.noBorderRadiusBottom && props.noBorderRadiusTop)
    ) {
        if (props.noBorderRadiusBottom) {
            borderRadius = `${props.theme.base.borderRadius}px ${props.theme.base.borderRadius}px 0 0`;
        } else if (props.noBorderRadiusTop) {
            borderRadius = `0 0 ${props.theme.base.borderRadius}px ${props.theme.base.borderRadius}px`;
        } else {
            borderRadius = `${props.theme.base.borderRadius}px`;
        }
    }

    return borderRadius;
};

export const Inner = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray300 : null};
    border-radius: ${props => getInnerBorderRadius(props)};
    padding: 25px 15px;
    padding-bottom: ${props =>
        props.noPaddingBottom ? "0px !important" : null};
    padding-left: ${props => (props.noPaddingLeft ? "0px !important" : null)};
    padding-right: ${props => (props.noPaddingRight ? "0px !important" : null)};
    padding-top: ${props => (props.noPaddingTop ? "0px !important" : null)};
    text-align: ${props => (props.textAlign ? "center" : null)};

    ${after(
        "sm",
        css`
            padding: 50px;
        `
    )}
`;

export const Title = styled.h2`
    margin: 0;
    text-align: ${props => props.textAlign};
`;

export const Content = styled.div`
    * + & {
        margin-top: 20px;

        ${after(
            "sm",
            css`
                margin-top: 50px;
            `
        )}
    }
`;

Inner.defaultProps = {
    theme: {
        base: {
            borderRadius: 0
        },
        colors: {
            gray300: "#e1e1e1"
        }
    }
};
