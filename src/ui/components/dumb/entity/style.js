import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

import Box from "../../styled/box";

export const Host = styled.div`
    display: flex;

    > div {
        &:last-child {
            flex: 1;
            padding-left: 10px;

            ${after(
                "md",
                css`
                    padding-left: 20px;
                `
            )}

            > * + * {
                margin-top: 3px;
            }
        }
    }
`;

export const Logo = styled(Box)`
    padding: 10px;

    > .img {
        display: block;
        height: 48px;
        width: 48px;

        ${after(
            "md",
            css`
                height: 64px;
                width: 64px;
            `
        )}
    }
`;

export const Title = styled.div`
    font-weight: 600;
`;

export const SubTitle = styled.div`
    font-size: 14px;

    ${after(
        "md",
        css`
            font-size: 16px;
        `
    )}
`;

export const Meta = styled.div`
    color: ${(props) => props.theme.colors.grayBase};
    font-size: 14px;

    ${after(
        "md",
        css`
            font-size: 16px;
        `
    )}
`;

Meta.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray",
        },
    },
};
