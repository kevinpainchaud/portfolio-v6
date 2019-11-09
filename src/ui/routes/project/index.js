import { h, Fragment } from "preact";
import { Link } from "preact-router/match";
import Error404 from "../../routes/error-404";

import projects from "../../../data/projects.json";
import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";

import ProjectCover from "../../components/project-cover";
import ProjectIntro from "../../components/project-intro";
import ContentBlock from "../../components/content-block";
import SkillTag from "../../components/skill-tag";
import TechnologyBadge from "../../components/technology-badge";

import { Host } from "./style";
import { Container, Row, Col } from "../../components/grid/style";
import { StyledLink } from "../../components/styled-link";

const Project = ({ projectSlug }) => {
    const project = projects.find(p => p.slug === projectSlug);

    const projectSkills =
        project.skills && project.skills.length > 0
            ? skills.filter(skill => project.skills.indexOf(skill.slug) >= 0)
            : null;

    const projectTechnologies =
        project.technologies && project.technologies.length > 0
            ? technologies.filter(
                  technology =>
                      project.technologies.indexOf(technology.slug) >= 0
              )
            : null;

    return project ? (
        <Host>
            {/* Cover */}
            <ProjectCover
                name={project.name}
                company={project.company}
                date={project.date}
            ></ProjectCover>

            {/* Intro */}
            <ProjectIntro
                title={project.presentation.title}
                content={project.presentation.content}
            ></ProjectIntro>

            {/* Skills */}
            {projectSkills ? (
                <ContentBlock title="Compétences" fullWidth={false}>
                    {projectSkills.map(skill => (
                        <SkillTag skill={skill}></SkillTag>
                    ))}
                </ContentBlock>
            ) : null}

            {/* Technologies */}
            {projectTechnologies ? (
                <ContentBlock title="Technos" fullWidth={false} noPaddingTop>
                    {projectTechnologies.map(technology => (
                        <TechnologyBadge
                            technology={technology}
                        ></TechnologyBadge>
                    ))}
                </ContentBlock>
            ) : null}

            <Container>
                <Row>
                    <Col>
                        <StyledLink href={project.url} target="_blank">
                            Visiter le site
                        </StyledLink>
                        <Link href="/projets">Retour</Link>
                    </Col>
                </Row>
            </Container>
        </Host>
    ) : (
        Error404()
    );
};

export default Project;
