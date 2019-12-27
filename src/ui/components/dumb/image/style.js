import styled from "styled-components";

export const Host = styled.div`
    display: inline-block;
    overflow: hidden;

    .lazy-load-image-background {
        display: block !important;
        height: 100%;
        width: 100%;

        > img {
            height: 100%;
            width: 100%;
        }
    }
`;
