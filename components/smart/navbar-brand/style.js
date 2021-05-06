import styled, { css } from "styled-components";

import { before, after } from "../../../assets/styles/mixins/media-queries";

const Host = styled.div`
    > a {
        align-items: center;
        display: flex;

        ${before(
            "sm",
            css`
                justify-content: center;
            `
        )}

        > *:not(:last-child) {
            margin-right: 12px !important;
        }

        img {
            height: 42px;
            min-width: 42px;
            width: 42px;

            ${after(
                "md",
                css`
                    height: 48px;
                    min-width: 48px;
                    width: 48px;
                `
            )}
        }

        > span {
            color: ${(props) =>
                props.reverseColor ? "#fff" : props.theme.colors.textBase};
            font-size: 21px;
            font-weight: 800;
            line-height: 1em;

            ${after(
                "md",
                css`
                    font-size: 23px;
                `
            )}
        }
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            textBase: "#000",
        },
    },
};

export default Host;
