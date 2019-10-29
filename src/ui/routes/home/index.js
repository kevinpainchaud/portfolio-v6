import { h, Fragment } from "preact";

import Link from "../../components/link";

import { Container, Row, Col } from "../../components/grid/style";

const Home = () => (
    <Container>
        <Row>
            <Col>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia suscipit architecto minima pariatur optio.
                    Laudantium nemo possimus ratione aspernatur.
                </p>
                <Link>Télécharger mon CV</Link>
            </Col>
            <Col>ILLUSTRATION</Col>
        </Row>
    </Container>
);

export default Home;
