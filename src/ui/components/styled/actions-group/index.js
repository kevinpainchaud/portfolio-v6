import styled from "styled-components";

const ActionsGroup = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > * + * {
        margin-top: 25px;
    }
`;

export default ActionsGroup;
