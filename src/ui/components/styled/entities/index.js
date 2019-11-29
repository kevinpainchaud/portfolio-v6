import styled from "styled-components";

const Entities = styled.div`
    > * + * {
        border-top: 1px solid ${props => props.theme.colors.gray300};
        margin-top: 25px;
        padding-top: 25px;
    }
`;

Entities.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1"
        }
    }
};

export default Entities;
