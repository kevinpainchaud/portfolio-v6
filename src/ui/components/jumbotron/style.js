import styled from "styled-components";

export const Jumbotron = styled.div`
    padding: 45px 0;
`;

export const JumbotronContent = styled.div`
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
    > img {
        width: 100%;
    }
`;
