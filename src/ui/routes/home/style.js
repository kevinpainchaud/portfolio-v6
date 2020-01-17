import styled, { css } from "styled-components";

import { before } from "../../style/mixins/media-queries";

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
