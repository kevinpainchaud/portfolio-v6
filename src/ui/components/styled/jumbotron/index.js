import styled from "styled-components";

export const Jumbotron = styled.div``;

export const JumbotronInner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding: 45px 0;
`;

export const JumbotronContent = styled.div`
    width: 55%;

    > p {
        font-size: 18px;
        line-height: 2em;
        margin: 0;

        & + * {
            margin-top: 25px;
        }
    }
`;

export const JumbotronImage = styled.div`
    margin-left: 35px;
    width: 40%;
`;
