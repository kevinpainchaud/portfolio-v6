import { h } from "preact";

import projects from "../../../data/projects.json";

import PageTitle from "../../components/page-title";
import ProjectCard from "../../components/project-card";

import { Container, Row, Col } from "../../components/grid/style";

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
        <Row>
            {projects.map(project => (
                <Col>
                    <ProjectCard project={project}></ProjectCard>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Projects;
