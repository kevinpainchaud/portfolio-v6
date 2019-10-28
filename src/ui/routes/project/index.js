import { h, Component, Fragment } from "preact";
import { Link } from "preact-router/match";
import Error404 from "../../routes/error-404";

import projects from "../../../data/projects.json";
import skills from "../../../data/skills.json";

import { Container, Row, Col } from "../../components/grid/style";

export default class Project extends Component {
    state = { project: null, skills: [] };

    constructor(props) {
        super();

        // Get project data
        this.state.project = this.getProject(props["project-slug"]);

        // Get related skills
        if (this.state.project && this.state.project.skills) {
            this.state.skills = this.getSkills();
        }
    }

    getProject(projectSlug) {
        return projects.find(project => project.slug === projectSlug);
    }

    getSkills() {
        return skills.filter(
            skill => this.state.project.skills.indexOf(skill.slug) >= 0
        );
    }

    render() {
        const skillsItems = [];

        this.state.skills.forEach(skill => {
            skillsItems.push(<li>{skill.name}</li>);
        });

        return this.state.project ? (
            <Container>
                <Row>
                    <Col>
                        <Link href="/projets">Retour</Link>
                        <h1>{this.state.project.name}</h1>
                        {skillsItems.length > 0 ? <ul>{skillsItems}</ul> : ""}
                    </Col>
                </Row>
            </Container>
        ) : (
            Error404()
        );
    }
}
