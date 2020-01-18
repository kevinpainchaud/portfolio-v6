import styled, { css } from "styled-components";

import { after } from "../../style/mixins/media-queries";

import OriginalProjectCard from "../../components/smart/project-card";
import { gutterWidth } from "../../components/styled/grid";

export const ProjectCards = styled.div`
    padding-bottom: 25px;

    ${after(
        "sm",
        css`
            padding-bottom: 40px;
        `
    )}

    ${after(
        "md",
        css`
            padding-bottom: 80px;
        `
    )}

    > * + * {
        margin-top: ${gutterWidth / 2}px;

        ${after(
            "sm",
            css`
                margin-top: ${gutterWidth}px;
            `
        )}
    }
`;

export const ProjectCard = styled(OriginalProjectCard)`
    height: 100%;
`;
