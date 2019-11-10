import styled from "styled-components";

export const Host = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray300 : "transparent"};
`;

export const Inner = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray300 : "transparent"};
    padding: 50px;
    padding-top: ${props => (props.noPaddingTop ? "0px" : "inerith")};
    text-align: center;
`;

export const Title = styled.h3`
    margin: 0;
`;

export const Content = styled.div`
    * + & {
        margin-top: 25px;
    }
`;

Inner.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1"
        }
    }
};
