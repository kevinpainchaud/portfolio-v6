import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.div`
    .pswp-thumbnails {
        display: flex;
        flex-wrap: wrap;
        margin: -5px;

        ${after(
            "sm",
            css`
                margin: -15px;
            `
        )}

        .thumbnail {
            border: 1px solid ${(props) => props.theme.colors.gray400};
            border-radius: ${(props) => props.theme.base.borderRadius}px;
            cursor: zoom-in;
            margin: 5px;
            overflow: hidden;
            width: calc(100% - 10px);

            ${after(
                "sm",
                css`
                    margin: 15px;
                    width: calc(50% - 30px);
                `
            )}

            > img {
                display: block;
                width: 100%;
            }

            &--width-xxl {
                ${after(
                    "sm",
                    css`
                        width: calc(100% - 30px);
                    `
                )}
            }
        }
    }
`;

Host.defaultProps = {
    theme: {
        base: {
            borderRadius: 0,
        },
        colors: {
            gray400: "#c4c4c4",
        },
    },
};
