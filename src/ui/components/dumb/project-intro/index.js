import { h } from "preact";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../../styled/grid";

import { Host, Title, Content } from "./style";

const ProjectIntro = ({ title, content }) => (
    <Host>
        <Container>
            <Row justifyContent="center">
                <Col colWidth="10">
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                </Col>
            </Row>
        </Container>
    </Host>
);

ProjectIntro.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

export default ProjectIntro;
