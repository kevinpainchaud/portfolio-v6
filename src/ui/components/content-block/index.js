import { h } from "preact";

import { Host, Inner, Title, Content } from "./style";
import { Container, Row, Col } from "../grid/style";

const ContentBlock = ({
    title,
    background,
    fullWidth,
    noPaddingTop,
    children
}) => (
    <Host background={fullWidth && background}>
        <Container>
            <Row>
                <Col>
                    <Inner
                        background={!fullWidth && background}
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
