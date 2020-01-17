import { h } from "preact";

import { Container, Row, Col } from "../../styled/grid";

import { Host, Title, Content } from "./style";

const ProjectIntro = ({ title, content }) => (
    <Host>
        <Container>
            <Row justifyContent="center">
                <Col colWidth="8">
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                </Col>
            </Row>
        </Container>
    </Host>
);

export default ProjectIntro;
