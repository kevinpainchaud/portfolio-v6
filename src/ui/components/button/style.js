import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
    background-color: transparent;
    border: ${props => props.theme.button.borderWidth} solid transparent;
    border-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.button.borderRadius};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    padding: 10px 20px;

    &:hover {
        background-color: ${props => darken(0.1, props.theme.colors.primary)};
        border-color: ${props => darken(0.1, props.theme.colors.primary)};
        color: #fff;
    }
`;

export const ButtonPrimary = styled(Button)`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
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