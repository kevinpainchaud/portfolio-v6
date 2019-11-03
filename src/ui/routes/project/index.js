import { h } from "preact";
import { Link } from "preact-router/match";
import Error404 from "../../routes/error-404";

import projects from "../../../data/projects.json";
import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";

import SkillTag from "../../components/skill-tag";
import TechnologyBadge from "../../components/technology-badge";

import { Container, Row, Col } from "../../components/grid/style";
import { StyledLink } from "../../components/styled-link";

const Project = ({ projectSlug }) => {
    const project = projects.find(p => p.slug === projectSlug);

    const projectSkills =
        project.skills && project.skills.length > 0
            ? skills.filter(skill => project.skills.indexOf(skill.slug) >= 0)
            : null;

    const projectTechnologies =
        project.technologies && project.technologies.length > 0
            ? technologies.filter(
                  technology =>
                      project.technologies.indexOf(technology.slug) >= 0
              )
            : null;

    return project ? (
        <Container>
            <Row>
                <Col>
                    <Link href="/projets">Retour</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>{project.name}</h1>
                    <div>Pour : {project.company}</div>
                    <div>Année : {project.date}</div>
                    <StyledLink href={project.url} target="_blank">
                        Visiter le site
                    </StyledLink>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{project.presentation.title}</h2>
                    <p>{project.presentation.content}</p>
                </Col>
            </Row>
            {projectSkills ? (
                <Row>
                    <Col>
                        <h2>Compétences</h2>
                        <div>
                            {projectSkills.map(skill => (
                                <SkillTag skill={skill}></SkillTag>
                            ))}
                        </div>
                    </Col>
                </Row>
            ) : (
                ""
            )}
            {projectTechnologies ? (
                <Row>
                    <Col>
                        <h2>Technos</h2>
                        <div>
                            {projectTechnologies.map(technology => (
                                <TechnologyBadge
                                    technology={technology}
                                ></TechnologyBadge>
                            ))}
                        </div>
                    </Col>
                </Row>
            ) : (
                ""
            )}
            <Row>
                <Col>
                    <StyledLink href={project.url} target="_blank">
                        Visiter le site
                    </StyledLink>
                    <Link href="/projets">Retour</Link>
                </Col>
            </Row>
        </Container>
    ) : (
        Error404()
    );
};

export default Project;
