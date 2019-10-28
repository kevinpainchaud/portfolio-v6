import { h, Fragment } from "preact";
import { Link } from "preact-router/match";

import projects from "../../../data/projects.json";

import { Container, Row, Col } from "../../components/grid/style";

const Projects = () => {
    const projectsItems = [];

    projects.forEach(project => {
        projectsItems.push(
            <li>
                <Link href={`/projets/${project.slug}`}>{project.name}</Link>
            </li>
        );
    });

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Projets</h1>
                    <p>
                        Ceci est le composant listant l'ensemble de mes projets.
                    </p>
                    <ul>{projectsItems}</ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
