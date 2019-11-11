import styled from "styled-components";

export const Host = styled.div`
    text-align: center;
    padding: 75px 0;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Content = styled.p`
    font-size: 18px;
    line-height: 2em;
    margin: 0;

    * + & {
        margin-top: 20px;
    }
`;
