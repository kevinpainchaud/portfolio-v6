import styled from "styled-components";
import { darken } from "polished";

import Link from "../../smart/link";

export const Button = styled(Link)`
    align-items: center;
    background-color: transparent;
    border: ${props => props.theme.button.borderWidth} solid transparent;
    border-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.button.borderRadius};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    display: inline-flex;
    font-size: ${props => props.theme.base.fontSize - (props.xs ? 2 : 0)}px;
    padding: ${props => (props.xs ? "5px 10px" : "8px 18px")};

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
        left: 0;
        min-width: ${props =>
            props.iconWidthXs || props.xs ? "12px" : "16px"};
        position: relative;
        top: -1px;
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

export const ButtonWhiteOutline = styled(Button)`
    border-color: #fff;
    color: #fff;

    > svg > use {
        fill: #fff;
    }
`;

[Button, ButtonPrimary, ButtonWhiteOutline].forEach(b => {
    b.defaultProps = {
        theme: {
            base: {
                fontSize: 14
            },
            colors: {
                primary: "gray"
            },
            button: {
                borderRadius: "0px",
                borderWidth: "1px"
            }
        }
    };
});
