import styled from "styled-components";

import { gutterWidth } from "../../components/styled/grid";

const ProjectCards = styled.div`
    padding-bottom: 80px;

    > * + * {
        margin-top: ${gutterWidth}px;
    }
`;

export default ProjectCards;
