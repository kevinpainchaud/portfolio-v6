import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

export const ModalContent = styled.div`
    text-align: center;

    ${after(
        "sm",
        css`
            padding: 35px;
        `
    )}

    a {
        font-weight: 600;
        text-decoration: none;
    }
`;

export const Hr = styled.div`
    background-color: ${(props) => props.theme.colors.gray400};
    height: 1px;
    margin: 15px auto 10px auto;
    width: 100px;

    ${after(
        "sm",
        css`
            margin: 25px auto 20px auto;
        `
    )}
`;

Hr.defaultProps = {
    theme: {
        colors: {
            gray400: "#c4c4c4",
        },
    },
};
