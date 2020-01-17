import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

const ActionsGroup = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > * + * {
        margin-top: 15px;

        ${after(
            "sm",
            css`
                margin-top: 25px;
            `
        )}
    }
`;

export default ActionsGroup;
