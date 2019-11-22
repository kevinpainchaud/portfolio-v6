import { h, Fragment } from "preact";
import Helmet from "preact-helmet";

import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";

const Error404 = () => (
    <PageContent>
        <Helmet
            title="404"
            meta={[{ name: "prerender-status-code", content: "404" }]}
        />

        <Container>
            <Row textAlign="center">
                <Col>
                    <h1>404</h1>
                    <p>Page non trouvée</p>
                </Col>
            </Row>
        </Container>
    </PageContent>
);

export default Error404;
