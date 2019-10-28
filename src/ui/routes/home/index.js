import { h, Fragment } from "preact";

import { Container, Row, Col } from "../../components/grid/style";

const Home = () => (
    <Container>
        <Row>
            <Col>
                <h1>Accueil</h1>
                <p>Ceci est le composant d'accueil.</p>
            </Col>
        </Row>
    </Container>
);

export default Home;
