import styled from "styled-components";
import { darken } from "polished";

const Box = styled.div`
    background-color: #fff;
    border-radius: ${props => props.theme.base.borderRadius}px;
    box-shadow: ${props =>
            props.darker
                ? darken(0.1, props.theme.colors.gray400)
                : props.theme.colors.gray400}
        1px 2px 4px;
    transition: ${props =>
        props.hoverEffect
            ? `box-shadow ${props.theme.base.transitionDuration}s`
            : null};

    &:hover {
        box-shadow: ${props =>
            props.hoverEffect
                ? `${darken(0.1, props.theme.colors.gray400)} 1px 2px
            24px;`
                : null};
    }
`;

Box.defaultProps = {
    theme: {
        base: {
            borderRadius: 0,
            transitionDuration: 0
        },
        colors: {
            gray400: "#c4c4c4"
        }
    }
};

export default Box;
