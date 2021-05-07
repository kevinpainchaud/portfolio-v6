import styled, { css } from "styled-components";

import { before, after } from "../../../assets/styles/mixins/media-queries";

import OriginalLink from "../link";

export const Host = styled.nav`
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    ${after(
        "sm",
        css`
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
        `
    )}

    > * + * {
        ${before(
            "sm",
            css`
                margin-top: 10px;
            `
        )}

        ${after(
            "sm",
            css`
                margin-left: 15px;
            `
        )}

        ${after(
            "md",
            css`
                margin-left: 30px;
            `
        )}
    }

    > a,
    > span,
    > button {
        font-size: 17px;

        ${after(
            "md",
            css`
                font-size: 18px;
            `
        )}
    }
`;

export const Link = styled(OriginalLink)`
    color: ${(props) =>
        props.reverseColor ? "#fff" : props.theme.colors.textBase};

    &.active {
        font-weight: 600;
    }
`;

Link.defaultProps = {
    theme: {
        colors: {
            textBase: "#000",
        },
    },
};
