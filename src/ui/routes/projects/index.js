import { h } from "preact";

import projects from "../../../data/projects.json";

import ProjectCard from "../../components/project-card";

import { Container, Row, Col } from "../../components/grid/style";

const Projects = () => (
    <Container>
        <Row>
            <Col>
                <h1>Projets</h1>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing</div>
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
