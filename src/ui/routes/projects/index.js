import { h } from "preact";

import projects from "../../../data/projects.json";
import projectCardsLayout from "../../../data/project-cards-layout.json";

import ProjectCard from "../../components/smart/project-card";
import PageTitle from "../../components/dumb/page-title";
import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";

import ProjectCards from "./style";

const Projects = () => (
    <PageContent>
        <Container>
            <Row>
                <Col>
                    <PageTitle
                        title="Projets"
                        subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing"
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
                                        date={project.date}
                                        description={project.description}
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
