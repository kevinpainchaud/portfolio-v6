import styled from "styled-components";

export const Host = styled.div`
    background-color: ${props =>
        props.background
            ? props.backgroundWhite
                ? "#fff"
                : props.theme.colors.gray300
            : "transparent"};
    border: ${props =>
        props.border ? `1px solid ${props.theme.colors.grayBase}` : null};
    padding: 25px;
    padding-left: ${props => (props.noPaddingLeft ? "0px" : null)};
    padding-right: ${props => (props.noPaddingRight ? "0px" : null)};
    text-align: ${props => (props.textAlign ? "center" : null)};
`;
export const Title = styled.h2`
    margin: 0;
`;

export const Content = styled.div`
    * + & {
        margin-top: 25px;
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1",
            grayBase: "gray"
        }
    }
};
