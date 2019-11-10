import styled from "styled-components";
import { darken } from "polished";

import Link from "../link";

export const Button = styled(Link)`
    align-items: center;
    background-color: transparent;
    border: ${props => props.theme.button.borderWidth} solid transparent;
    border-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.button.borderRadius};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    display: inline-flex;
    padding: 10px 20px;
    text-decoration: none;

    &:hover {
        background-color: ${props => darken(0.1, props.theme.colors.primary)};
        border-color: ${props => darken(0.1, props.theme.colors.primary)};
        color: #fff;

        > svg > use {
            fill: #fff;
        }
    }

    > svg {
        height: 16px;
        left: 0;
        min-width: 16px;
        position: relative;
        top: -1px;
        width: 16px;

        > use {
            fill: ${props => props.theme.colors.primary};
        }

        & + * {
            margin-left: 10px;
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

[Button, ButtonPrimary].forEach(b => {
    b.defaultProps = {
        theme: {
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
