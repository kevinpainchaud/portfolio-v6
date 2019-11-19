import styled from "styled-components";

export const Jumbotron = styled.div``;

export const JumbotronInner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding: 45px 0;
    position: relative;
`;

export const JumbotronContent = styled.div`
    width: 40%;
    position: relative;

    > p {
        font-size: 18px;
        line-height: 2em;
        margin: 0;
    }

    > p + * {
        margin-top: 25px;
    }
`;

export const JumbotronIllustration = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;

    > svg {
        display: block;
        height: 100%;
        width: 100%;
    }
`;
