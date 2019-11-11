import styled from "styled-components";

import { gutterWidth } from "../../components/styled/grid";

const ProjectCards = styled.div`
    > * + * {
        margin-top: ${gutterWidth}px;
    }
`;

export default ProjectCards;
