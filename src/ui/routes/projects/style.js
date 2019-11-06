import styled from "styled-components";

import { gutterWidth } from "../../components/grid/style";

export const ProjectCards = styled.div`
    > * + * {
        margin-top: ${gutterWidth}px;
    }
`;
