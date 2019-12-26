import { h } from "preact";

import projects from "../../../data/projects.json";
import projectCardsLayout from "../../../data/project-cards-layout.json";

import PageTitle from "../../components/dumb/page-title";
import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";

import { ProjectCards, ProjectCard } from "./style";

const Projects = () => (
    <PageContent background>
        <Container>
            <Row>
                <Col>
                    <PageTitle
                        title="Projets"
                        subTitle="Sélection de projets sur lesquels j'ai eu l'occasion de travailler"
                    ></PageTitle>
                </Col>
            </Row>
            <ProjectCards>
                {projectCardsLayout.map(row => (
                    <Row>
                        {row.map(col => {
                            const project = projects.find(
                                p => p.slug === col.projectSlug
                            );

                            return (
                                <Col>
                                    <ProjectCard
                                        name={project.name}
                                        slug={project.slug}
                                        color={project.color}
                                        date={project.date}
                                        description={project.description}
                                        highlights={project.highlights}
                                        mockup={row.length === 1}
                                        mockupType={col.mockupType}
                                        reverse={col.reverse}
                                    ></ProjectCard>
                                </Col>
                            );
                        })}
                    </Row>
                ))}
            </ProjectCards>
        </Container>
    </PageContent>
);

export default Projects;
