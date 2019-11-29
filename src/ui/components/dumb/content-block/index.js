import { h } from "preact";

import { Container, Row, Col } from "../../styled/grid";

import { Host, Inner, Title, Content } from "./style";

const ContentBlock = ({
    title,
    titleTextAlign,
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
                        {title ? (
                            <Title textAlign={titleTextAlign}>{title}</Title>
                        ) : null}
                        <Content>{children}</Content>
                    </Inner>
                </Col>
            </Row>
        </Container>
    </Host>
);

export default ContentBlock;
