import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

import Box from "../box";

const SkillTag = styled(Box)`
    color: ${(props) => props.theme.colors.textColor};
    font-size: 14px;
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
