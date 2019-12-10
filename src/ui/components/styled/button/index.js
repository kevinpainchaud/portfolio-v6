import styled from "styled-components";
import { darken } from "polished";

import Link from "../../smart/link";

export const Button = styled(Link)`
    align-items: center;
    background-color: transparent;
    border: ${props => props.theme.button.borderWidth}px solid transparent;
    border-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.button.borderRadius}px;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    display: inline-flex;
    font-size: ${props => props.theme.base.fontSize - (props.xs ? 2 : 0)}px;
    font-weight: 600;
    line-height: 1em;
    padding: ${props =>
        props.xs ? "4px 10px 5px 10px" : "9px 18px 10px 18px"};

    &:hover {
        background-color: ${props => darken(0.1, props.theme.colors.primary)};
        border-color: ${props => darken(0.1, props.theme.colors.primary)};
        color: #fff;

        > svg > use {
            fill: #fff;
        }
    }

    > svg {
        height: ${props => (props.iconWidthXs || props.xs ? "12px" : "16px")};
        min-width: ${props =>
            props.iconWidthXs || props.xs ? "12px" : "16px"};
        width: ${props => (props.iconWidthXs || props.xs ? "12px" : "16px")};

        > use {
            fill: ${props => props.theme.colors.primary};
        }

        & + * {
            margin-left: ${props => (props.xs ? "5px" : "10px")};
        }
    }
`;

export const ButtonPrimary = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;

    > svg > use {
        fill: #fff;
    }
`;

export const ButtonSecondary = styled(Button)`
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
    color: #fff;

    > svg > use {
        fill: #fff;
    }
`;

export const ButtonWhite = styled(Button)`
    background-color: #fff;
    border-color: #fff;
`;

export const ButtonSecondaryOutline = styled(Button)`
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};

    > svg > use {
        fill: ${props => props.theme.colors.secondary};
    }

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.secondary};
        color: #fff;

        > svg > use {
            fill: #fff;
        }
    }
`;

export const ButtonWhiteOutline = styled(Button)`
    border-color: #fff;
    color: #fff;

    > svg > use {
        fill: #fff;
    }
`;

[
    Button,
    ButtonPrimary,
    ButtonSecondary,
    ButtonWhite,
    ButtonSecondaryOutline,
    ButtonWhiteOutline
].forEach(b => {
    b.defaultProps = {
        theme: {
            base: {
                fontSize: 14
            },
            colors: {
                primary: "gray"
            },
            button: {
                borderRadius: 0,
                borderWidth: 1
            }
        }
    };
});
