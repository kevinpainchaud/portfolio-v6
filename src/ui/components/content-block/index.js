import { h } from "preact";

import { Host, Inner, Title, Content } from "./style";
import { Container, Row, Col } from "../grid/style";

const ContentBlock = ({
    title,
    background,
    backgroundFullWidth,
    noPaddingBottom,
    noPaddingTop,
    textAlign,
    children
}) => (
    <Host background={background && backgroundFullWidth}>
        <Container>
            <Row>
                <Col>
                    <Inner
                        background={background && !backgroundFullWidth}
                        noPaddingBottom={noPaddingBottom}
                        noPaddingTop={noPaddingTop}
                        textAlign={textAlign}
                    >
                        {title ? <Title>{title}</Title> : null}
                        <Content>{children}</Content>
                    </Inner>
                </Col>
            </Row>
        </Container>
    </Host>
);

export default ContentBlock;
