import styled from "styled-components";

import Box from "../box";

const SkillTag = styled(Box)`
    color: ${props => props.theme.colors.textColor};
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px;
`;

SkillTag.defaultProps = {
    theme: {
        colors: {
            textColor: "gray"
        }
    }
};

export default SkillTag;
