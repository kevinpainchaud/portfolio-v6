import styled from "styled-components";

export const Host = styled.div`
    display: inline-block;

    .lazy-load-image-background {
        display: block !important;
        height: 100%;
        width: 100%;
    }

    > img,
    .lazy-load-image-background > img {
        display: block;
        height: 100%;
        width: 100%;
    }
`;
