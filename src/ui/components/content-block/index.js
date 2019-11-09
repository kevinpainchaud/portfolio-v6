import { h } from "preact";

import { Host, Inner, Title, Content } from "./style";
import { Container, Row, Col } from "../grid/style";

const ContentBlock = ({ title, fullWidth, noPaddingTop, children }) => (
    <Host withBackground={fullWidth}>
        <Container>
            <Row>
                <Col>
                    <Inner
                        withBackground={!fullWidth}
                        noPaddingTop={noPaddingTop}
                    >
                        <Title>{title}</Title>
                        <Content>{children}</Content>
                    </Inner>
                </Col>
            </Row>
        </Container>
    </Host>
);

export default ContentBlock;
