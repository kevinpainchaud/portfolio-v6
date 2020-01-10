import styled, { css, keyframes } from "styled-components";

import { before } from "../../style/mixins/media-queries";

import OriginalIframeWrapper from "../../components/dumb/iframe-wrapper";

export const IframeWrapper = styled(OriginalIframeWrapper)`
    margin-bottom: 10px;

    iframe {
        height: 200px;
        width: 600px;

        ${before(
            "sm",
            css`
                min-height: 300px;
            `
        )}
    }
`;
