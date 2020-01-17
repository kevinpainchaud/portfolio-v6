import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

const logoWidth = 45,
    logoPaddingXs = 10,
    logoPaddingSm = 15;

const Host = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: column;

    > div {
        &:first-child {
            padding: ${logoPaddingXs}px;
            width: ${logoWidth + logoPaddingXs * 2}px;

            ${after(
                "sm",
                css`
                    padding: ${logoPaddingSm}px;
                    width: ${logoWidth + logoPaddingSm * 2}px;
                `
            )}

            > .img {
                display: block;
                height: ${logoWidth}px;
                width: ${logoWidth}px;
            }
        }

        &:last-child {
            color: ${props => props.theme.colors.textColor};
            font-size: 14px;
            margin-top: 10px;

            ${after(
                "sm",
                css`
                    font-size: 16px;
                `
            )}
        }
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            textColor: "gray"
        }
    }
};

export default Host;
