import styled from "styled-components";

export const Host = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray300 : null};
`;

export const Inner = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray300 : null};
    border-radius: ${props =>
        props.background ? props.theme.base.borderRadius : null}px;
    padding: 50px;
    padding-bottom: ${props => (props.noPaddingBottom ? "0px" : null)};
    padding-top: ${props => (props.noPaddingTop ? "0px" : null)};
    text-align: ${props => (props.textAlign ? "center" : null)};
`;

export const Title = styled.h2`
    margin: 0;
    text-align: ${props => props.textAlign};
`;

export const Content = styled.div`
    * + & {
        margin-top: 50px;
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
