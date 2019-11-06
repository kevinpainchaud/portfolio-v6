import { h } from "preact";

import projects from "../../../data/projects.json";

import PageTitle from "../../components/page-title";
import ProjectCard from "../../components/project-card";

import { ProjectCards } from "./style";
import { Container, Row, Col } from "../../components/grid/style";

const Projects = () => {
    const getProjectCardsLayout = projectCards =>
        projectCards
            .reduce((rows, projectCard) => {
                let currentRow;

                const isFullWidthProjectCard = projectCard =>
                        projectCard.width === "full",
                    latestRow = rows[rows.length - 1]
                        ? rows[rows.length - 1]
                        : null;

                // 1 col/row: 1 full width project card
                // 2 col/row: 2 normal width project cards
                if (
                    latestRow === null ||
                    (latestRow.length === 2 ||
                        isFullWidthProjectCard(
                            latestRow.slice(-1).pop().props.children.props
                        ))
                ) {
                    currentRow = [];

                    rows.push(currentRow);
                } else {
                    currentRow = latestRow;
                }

                currentRow.push(
                    <Col
                        colWidth={
                            isFullWidthProjectCard(projectCard.props) ? 12 : 6
                        }
                    >
                        {projectCard}
                    </Col>
                );

                return rows;
            }, [])
            .map(cols => <Row>{cols}</Row>);

    return (
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
                {getProjectCardsLayout(
                    projects.map(project => (
                        <ProjectCard
                            project={project}
                            width={project.weight === 2 ? "full" : "normal"}
                        ></ProjectCard>
                    ))
                )}
            </ProjectCards>
        </Container>
    );
};

export default Projects;
