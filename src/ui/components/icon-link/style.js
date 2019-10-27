import styled from "styled-components";

import { colors } from "../../style/_variables";

export const Host = styled.div`
    align-items: center;
    display: flex;

    > svg {
        height: 24px;
        min-width: 24px;
        width: 24px;

        > use {
            fill: ${colors["gray-base"]};
        }

        & + * {
            margin-left: 5px;
        }
    }
`;
