import { h, Fragment } from "preact";

import Link from "../../components/link";

import { Container, Row, Col } from "../../components/grid/style";
import { Button, ButtonPrimary } from "../../components/button/style";

const Home = () => (
    <Container>
        <Row>
            <Col>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia suscipit architecto minima pariatur optio.
                    Laudantium nemo possimus ratione aspernatur.
                </p>
                <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
            </Col>
            <Col>ILLUSTRATION</Col>
        </Row>
    </Container>
);

export default Home;
