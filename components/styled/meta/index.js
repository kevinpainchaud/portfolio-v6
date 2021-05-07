import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

const Meta = styled.div`
    align-items: center;
    display: flex;

    > svg {
        height: ${(props) => (props.iconWidthXs ? "12px" : "18px")};
        min-width: ${(props) => (props.iconWidthXs ? "12px" : "18px")};
        width: ${(props) => (props.iconWidthXs ? "12px" : "18px")};

        ${after(
            "sm",
            css`
                height: ${(props) => (props.iconWidthXs ? "14px" : "24px")};
                min-width: ${(props) => (props.iconWidthXs ? "14px" : "24px")};
                width: ${(props) => (props.iconWidthXs ? "14px" : "24px")};
            `
        )}

        > use {
            fill: ${(props) =>
                props.reverseColor ? "#fff" : props.theme.colors.grayBase};
        }
    }

    > div {
        color: ${(props) =>
            props.reverseColor ? "#fff" : props.theme.colors.grayBase};
    }

    > svg + div {
        margin-left: 5px;

        ${after(
            "sm",
            css`
                margin-left: 10px;
            `
        )}
    }
`;

Meta.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray",
        },
    },
};

export default Meta;
