import { h, Fragment } from "preact";
import Error404 from "../../routes/error-404";

import projects from "../../../data/projects.json";
import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";

import ProjectCover from "../../components/project-cover";
import ProjectIntro from "../../components/project-intro";
import ContentBlock from "../../components/content-block";
import SkillTag from "../../components/skill-tag";
import TechnologyBadge from "../../components/technology-badge";
import { IconLink } from "../../components/icon-link";

import { Host } from "./style";
import { Container, Row, Col } from "../../components/grid/style";
import { Button } from "../../components/button/style";
import { ActionsGroup } from "../../components/actions-group/style";

import arrowLeft from "../../assets/images/arrow-left.svg";
import iconExternalLink from "../../assets/images/icon-external-link.svg";

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
                url={project.url}
            ></ProjectCover>

            {/* Intro */}
            <ProjectIntro
                title={project.presentation.title}
                content={project.presentation.content}
            ></ProjectIntro>

            {/* Skills */}
            {projectSkills ? (
                <ContentBlock
                    title="Compétences"
                    background={true}
                    textAlign="center"
                >
                    {projectSkills.map(skill => (
                        <SkillTag skill={skill}></SkillTag>
                    ))}
                </ContentBlock>
            ) : null}

            {/* Technologies */}
            {projectTechnologies ? (
                <ContentBlock
                    title="Technos"
                    background={true}
                    noPaddingTop
                    textAlign="center"
                >
                    {projectTechnologies.map(technology => (
                        <TechnologyBadge
                            technology={technology}
                        ></TechnologyBadge>
                    ))}
                </ContentBlock>
            ) : null}

            <ContentBlock noPaddingBottom>
                <ActionsGroup>
                    <Button href={project.url} target="_blank" iconWidthXs>
                        <svg>
                            <use xlinkHref={`#${iconExternalLink.id}`}></use>
                        </svg>
                        <span>Visiter le site</span>
                    </Button>
                    <IconLink
                        href="/projets"
                        tagName="routerLink"
                        icon={arrowLeft}
                        iconWidthXs
                    >
                        Retour
                    </IconLink>
                </ActionsGroup>
            </ContentBlock>
        </Host>
    ) : (
        Error404()
    );
};

export default Project;
