import { h } from "preact";

import { Host, Title, Content } from "./style";
import { Container, Row, Col } from "../grid/style";

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
