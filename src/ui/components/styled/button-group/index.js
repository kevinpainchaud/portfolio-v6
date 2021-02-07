import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

const ButtonGroup = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    ${after(
        "sm",
        css`
            flex-direction: row;
        `
    )}

    > * {
        &:not(:last-child) {
            margin-bottom: 15px;

            ${after(
                "sm",
                css`
                    margin-bottom: 0;
                    margin-right: 15px;
                `
            )}
        }
    }
`;

export default ButtonGroup;
