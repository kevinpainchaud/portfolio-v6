import styled from "styled-components";
import { darken } from "polished";

const Box = styled.div`
    background-color: #fff;
    border: 1px solid
        ${props =>
            props.darker
                ? darken(0.1, props.theme.colors.gray300)
                : props.theme.colors.gray300};
    border-radius: ${props => props.theme.base.borderRadius}px;
    box-shadow: ${props =>
            props.darker
                ? darken(0.1, props.theme.colors.gray300)
                : props.theme.colors.gray300}
        1px 2px 4px;
    transition: ${props =>
        props.hoverEffect
            ? `box-shadow ${props.theme.base.transitionDuration}s`
            : null};

    &:hover {
        box-shadow: ${props =>
            props.hoverEffect
                ? `${darken(0.1, props.theme.colors.gray300)} 1px 2px
            8px;`
                : null};
    }
`;

Box.defaultProps = {
    theme: {
        base: {
            borderRadius: 4,
            transitionDuration: 0.3
        },
        colors: {
            gray300: "#e1e1e1"
        }
    }
};

export default Box;
