import { h } from "preact";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../../styled/grid";

import { Host, Inner, Title, Content } from "./style";

const ContentBlock = ({
    title,
    titleTextAlign,
    background,
    backgroundFullWidth,
    noBorderRadiusBottom,
    noBorderRadiusTop,
    noPaddingBottom,
    noPaddingLeft,
    noPaddingRight,
    noPaddingTop,
    textAlign,
    children,
}) => (
    <Host background={background && backgroundFullWidth}>
        <Container>
            <Row>
                <Col>
                    <Inner
                        background={background && !backgroundFullWidth}
                        noBorderRadiusBottom={noBorderRadiusBottom}
                        noBorderRadiusTop={noBorderRadiusTop}
                        noPaddingBottom={noPaddingBottom}
                        noPaddingLeft={noPaddingLeft}
                        noPaddingRight={noPaddingRight}
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

ContentBlock.propTypes = {
    title: PropTypes.string,
    titleTextAlign: PropTypes.string,
    background: PropTypes.bool,
    backgroundFullWidth: PropTypes.bool,
    noBorderRadiusBottom: PropTypes.bool,
    noBorderRadiusTop: PropTypes.bool,
    noPaddingBottom: PropTypes.bool,
    noPaddingLeft: PropTypes.bool,
    noPaddingRight: PropTypes.bool,
    noPaddingTop: PropTypes.bool,
    textAlign: PropTypes.string,
    children: PropTypes.element,
};

export default ContentBlock;
