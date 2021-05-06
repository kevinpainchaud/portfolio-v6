import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

const Entities = styled.div`
    > * + * {
        border-top: 1px solid ${(props) => props.theme.colors.gray300};
        margin-top: 15px;
        padding-top: 15px;

        ${after(
            "sm",
            css`
                margin-top: 25px;
                padding-top: 25px;
            `
        )}
    }
`;

Entities.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1",
        },
    },
};

export default Entities;
