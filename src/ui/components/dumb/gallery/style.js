import styled from "styled-components";

export const Host = styled.div`
    .pswp-thumbnails {
        display: flex;
        flex-wrap: wrap;
        margin: -15px;

        .thumbnail {
            cursor: zoom-in;
            margin: 15px;
            width: calc(50% - 30px);

            > img {
                width: 100%;
            }

            &--width-xxl {
                width: calc(100% - 30px);
            }
        }
    }
`;
