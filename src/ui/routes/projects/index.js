import { h } from "preact";

import projects from "../../../data/projects.json";
import projectCardsLayout from "../../../data/project-cards-layout.json";

import ProjectCard from "../../components/smart/project-card";
import PageTitle from "../../components/dumb/page-title";
import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";

import ProjectCards from "./style";

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
                        {row.map(projectSlug => {
                            const project = projects.find(
                                p => p.slug === projectSlug
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
                                        width={
                                            row.length === 1 ? "full" : "normal"
                                        }
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
