import styled from "styled-components";

export const Host = styled.div`
    background-color: ${props => props.theme.colors.gray300};
    padding-bottom: 55px;
`;

export const Header = styled.div``;

export const Body = styled.div`
    * + & {
        margin-top: 200px;
    }
`;

export const BodyInner = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    > * + * {
        margin-top: 25px;
    }
`;

export const Title = styled.h1`
    margin: 0;
`;

export const Metas = styled.div`
    align-items: center;
    display: flex;
    margin: -10px;

    * + & {
        margin-top: 10px;
    }

    > div {
        margin: 10px;
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1"
        }
    }
};
