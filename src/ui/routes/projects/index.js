import { h } from "preact";

import projects from "../../../data/projects.json";
import projectCardsLayout from "../../../data/project-cards-layout.json";

import ProjectCard from "../../components/smart/project-card";
import PageTitle from "../../components/dumb/page-title";
import { Container, Row, Col } from "../../components/styled/grid";

import ProjectCards from "./style";

const Projects = () => (
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
                    {row.map(projectSlug => (
                        <Col>
                            <ProjectCard
                                project={projects.find(
                                    p => p.slug === projectSlug
                                )}
                                width={row.length === 1 ? "full" : "normal"}
                            ></ProjectCard>
                        </Col>
                    ))}
                </Row>
            ))}
        </ProjectCards>
    </Container>
);

export default Projects;
