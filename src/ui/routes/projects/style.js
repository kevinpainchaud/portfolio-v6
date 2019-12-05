import styled from "styled-components";

import OriginalProjectCard from "../../components/smart/project-card";
import { gutterWidth } from "../../components/styled/grid";

export const ProjectCards = styled.div`
    padding-bottom: 80px;

    > * + * {
        margin-top: ${gutterWidth}px;
    }
`;

export const ProjectCard = styled(OriginalProjectCard)`
    height: 100%;
`;
