import styled from "styled-components";

const Host = styled.div`
    align-items: center;
    display: inline-flex;

    > div:first-child {
        & + * {
            margin-left: 10px;
        }
    }

    > * + * {
        margin-left: 15px;
    }
`;

export default Host;
