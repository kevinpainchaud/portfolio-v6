import styled, { css } from "styled-components";

import { before, after } from "../../style/mixins/media-queries";

import Box from "../../components/styled/box";

export const IframeWrapper = styled(Box)`
    display: inline-block;
    margin-bottom: 10px;

    ${after(
        "sm",
        css`
            padding: 15px;
        `
    )}
`;

export const Iframe = styled.iframe`
    max-width: 100%;

    ${before(
        "sm",
        css`
            min-height: 300px;
        `
    )}
`;
