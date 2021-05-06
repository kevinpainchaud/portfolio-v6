import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import { subscribe } from "subscribe-ui-event";
import Error404 from "../404";

import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";

import ProjectCover from "../../components/smart/project-cover";
import ContentBlock from "../../components/dumb/content-block";
import LogoBadge from "../../components/dumb/logo-badge";
import IconLink from "../../components/dumb/icon-link";
import ProjectIntro from "../../components/dumb/project-intro";
import ProjectGallery from "../../components/smart/project-gallery";
import ButtonGroup from "../../components/styled/button-group";
import PageContent from "../../components/styled/page-content";
import { Button } from "../../components/styled/button";
import ActionsGroup from "../../components/styled/actions-group";
import SkillTags from "../../components/styled/skill-tags";
import SkillTag from "../../components/styled/skill-tag";
import LogoBadges from "../../components/styled/logo-badges";

import iconArrowLeft from "../../public/images/icons/icon-arrow-left.svg";
import iconExternalLink from "../../public/images/icons/icon-external-link.svg";

const Project = ({ navbarRef }) => {
    const router = useRouter();
    const project = projects.find((p) => p.slug === router.query.slug);

    if (project) {
        const host = useRef(null),
            [topOffset, setTopOffset] = useState(0),
            projectSkills =
                project.skills && project.skills.length > 0
                    ? skills.filter(
                          (skill) => project.skills.indexOf(skill.slug) >= 0
                      )
                    : null,
            projectTechnologies =
                project.technologies && project.technologies.length > 0
                    ? technologies.filter(
                          (technology) =>
                              project.technologies.indexOf(technology.slug) >= 0
                      )
                    : null;

        const updateTopOffset = () => {
            if (navbarRef.current) {
                setTopOffset(
                    parseFloat(
                        window
                            .getComputedStyle(navbarRef.current.base)
                            .getPropertyValue("height")
                            .replace("px", "")
                    )
                );
            }
        };

        useEffect(() => {
            updateTopOffset();

            const subscription = subscribe("resize", updateTopOffset, {
                throttleRate: 100,
            });

            return () => subscription.unsubscribe();
        }, []);

        return (
            <PageContent ref={host}>
                {/* Cover */}
                <ProjectCover
                    name={project.name}
                    slug={project.slug}
                    company={project.company}
                    date={project.date}
                    url={project.url}
                    repoUrl={project.repoUrl}
                    topOffset={topOffset}
                ></ProjectCover>

                {/* Intro */}
                <ContentBlock>
                    <ProjectIntro
                        title={project.presentation.title}
                        content={project.presentation.content}
                    ></ProjectIntro>
                </ContentBlock>

                {/* Skills */}
                {projectSkills ? (
                    <ContentBlock
                        title="Compétences"
                        background
                        noBorderRadiusBottom={projectTechnologies.length > 0}
                        textAlign="center"
                    >
                        <SkillTags>
                            {projectSkills.map((skill, i) => (
                                <SkillTag key={i} darker>
                                    {skill.name}
                                </SkillTag>
                            ))}
                        </SkillTags>
                    </ContentBlock>
                ) : null}

                {/* Technologies */}
                {projectTechnologies ? (
                    <ContentBlock
                        title="Technos"
                        background
                        noBorderRadiusTop={projectSkills.length > 0}
                        noPaddingTop
                        textAlign="center"
                    >
                        <LogoBadges>
                            {projectTechnologies.map((technology, i) => (
                                <LogoBadge
                                    key={i}
                                    type="technology"
                                    slug={technology.slug}
                                    name={technology.name}
                                    darker
                                ></LogoBadge>
                            ))}
                        </LogoBadges>
                    </ContentBlock>
                ) : null}

                {/* Gallery */}
                {project.galleryLayout && project.galleryLayout.length > 0 ? (
                    <ContentBlock noPaddingLeft noPaddingRight>
                        <ProjectGallery
                            slug={project.slug}
                            layout={project.galleryLayout}
                        ></ProjectGallery>
                    </ContentBlock>
                ) : null}

                <ContentBlock noPaddingBottom noPaddingTop>
                    <ActionsGroup>
                        {project.url ? (
                            <ButtonGroup>
                                {project.url ? (
                                    <Button
                                        href={project.url}
                                        target="_blank"
                                        iconWidthXs
                                    >
                                        <svg>
                                            <use
                                                xlinkHref={`#${iconExternalLink.id}`}
                                            ></use>
                                        </svg>
                                        <span>Visiter le site</span>
                                    </Button>
                                ) : null}
                                {project.repoUrl ? (
                                    <Button
                                        href={project.repoUrl}
                                        target="_blank"
                                        iconWidthXs
                                    >
                                        <svg>
                                            <use
                                                xlinkHref={`#${iconExternalLink.id}`}
                                            ></use>
                                        </svg>
                                        <span>Code source</span>
                                    </Button>
                                ) : null}
                            </ButtonGroup>
                        ) : null}
                        <IconLink
                            href="/projets/"
                            tagName="routerLink"
                            icon={iconArrowLeft}
                            iconWidthXs
                        >
                            Retour
                        </IconLink>
                    </ActionsGroup>
                </ContentBlock>
            </PageContent>
        );
    } else {
        return Error404();
    }
};

export default Project;
