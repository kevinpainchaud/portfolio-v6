import styled, { css } from "styled-components";

import { before, after } from "../../../style/mixins/media-queries";

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

        > .img {
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

            & + * {
                margin-left: 12px;
            }
        }

        > span {
            color: ${(props) =>
                props.reverseColor ? "#fff" : props.theme.colors.textBase};
            font-family: "Gilroy";
            font-size: 21px;
            font-weight: 700;
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
