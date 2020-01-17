import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.div`
    padding: 25px 0;
    text-align: center;

    ${after(
        "sm",
        css`
            padding: 80px 0;
        `
    )}
`;

export const Title = styled.h1`
    line-height: 1.15em;
    margin: 0;
`;

export const SubTitle = styled.div`
    color: ${props => props.theme.colors.grayBase};
    line-height: 1.35em;

    * + & {
        margin-top: 5px;

        ${after(
            "sm",
            css`
                margin-top: 15px;
            `
        )}
    }
`;

SubTitle.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray"
        }
    }
};
