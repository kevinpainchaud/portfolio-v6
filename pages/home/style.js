import styled, { css } from "styled-components";

import { before } from "../../assets/styles/mixins/media-queries";

import { Jumbotron as OriginalJumbotron } from "../../components/styled/jumbotron";

export const Jumbotron = styled(OriginalJumbotron)`
    ${before(
        "sm",
        css`
            padding-top: 0;
            min-height: auto !important;
        `
    )}
`;

export const WavingHandEmoji = styled.span`
    &:after {
        content: " 👋";
    }
`;
