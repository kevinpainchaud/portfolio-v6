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
    width: 55%;
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
    align-items: center;
    display: flex;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;

    > .img {
        width: 100%;
    }
`;
