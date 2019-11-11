import styled from "styled-components";

const SkillTag = styled.div`
    color: ${props => props.theme.colors.textColor};
    border: 1px solid ${props => props.theme.colors.textColor};
    padding: 5px 8px;
`;

SkillTag.defaultProps = {
    theme: {
        colors: {
            textColor: "gray"
        }
    }
};

export default SkillTag;
