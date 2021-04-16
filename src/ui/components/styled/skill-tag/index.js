import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

import Box from "../box";

const SkillTag = styled(Box)`
    color: ${(props) => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;

    ${after(
        "sm",
        css`
            font-size: 16px;
        `
    )}
`;

SkillTag.defaultProps = {
    theme: {
        colors: {
            textColor: "gray",
        },
    },
};

export default SkillTag;
