import { h, Component, Fragment } from "preact";

import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";
import tools from "../../../data/tools.json";
import experience from "../../../data/experience.json";
import education from "../../../data/education.json";

import { Container, Row, Col } from "../../components/grid/style";

export default class About extends Component {
    render() {
        const skillsItems = [],
            technologiesItems = [],
            toolsItems = [],
            experienceItems = [],
            educationItems = [];

        skills.forEach(s => {
            skillsItems.push(<li>{s.name}</li>);
        });

        technologies.forEach(t => {
            technologiesItems.push(<li>{t.name}</li>);
        });

        tools.forEach(t => {
            toolsItems.push(<li>{t.name}</li>);
        });

        experience.forEach(e => {
            experienceItems.push(
                <li>
                    {e.title} - {e.companyName}
                </li>
            );
        });

        education.forEach(e => {
            educationItems.push(
                <li>
                    {e.degreeName} - {e.schoolName}
                </li>
            );
        });

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>À propos</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {skillsItems.length > 0 ? <ul>{skillsItems}</ul> : ""}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {technologiesItems.length > 0 ? (
                            <ul>{technologiesItems}</ul>
                        ) : (
                            ""
                        )}
                    </Col>
                    <Col>
                        {toolsItems.length > 0 ? <ul>{toolsItems}</ul> : ""}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {experienceItems.length > 0 ? (
                            <ul>{experienceItems}</ul>
                        ) : (
                            ""
                        )}
                    </Col>
                    <Col>
                        {educationItems.length > 0 ? (
                            <ul>{educationItems}</ul>
                        ) : (
                            ""
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}
