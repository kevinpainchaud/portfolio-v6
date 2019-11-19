import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";

import { Container, Row, Col } from "../../components/styled/grid";
import {
    Jumbotron,
    JumbotronInner,
    JumbotronContent,
    JumbotronIllustration
} from "../../components/styled/jumbotron";
import { ButtonPrimary } from "../../components/styled/button";

import illustration from "../../assets/images/illustration.svg";

const Home = () => {
    const jumbotronInner = useRef(null);
    const [minHeight, setMinHeight] = useState(0);

    const updateMinHeight = () =>
        setMinHeight(
            window.innerHeight -
                (document.body.clientHeight -
                    window
                        .getComputedStyle(jumbotronInner.current)
                        .getPropertyValue("height")
                        .replace("px", ""))
        );

    useEffect(() => {
        updateMinHeight();
        window.addEventListener("resize", updateMinHeight);

        return () => {
            window.removeEventListener("resize", updateMinHeight);
        };
    }, []);

    return (
        <Jumbotron>
            <Container>
                <Row alignItems="center">
                    <Col>
                        <JumbotronInner
                            ref={jumbotronInner}
                            style={`min-height: ${minHeight}px`}
                        >
                            <JumbotronIllustration>
                                <svg>
                                    <use
                                        xlinkHref={`#${illustration.id}`}
                                    ></use>
                                </svg>
                            </JumbotronIllustration>
                            <JumbotronContent>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Officia suscipit
                                    architecto minima pariatur optio. Laudantium
                                    nemo possimus ratione aspernatur.
                                </p>
                                <ButtonPrimary>
                                    Télécharger mon CV
                                </ButtonPrimary>
                            </JumbotronContent>
                        </JumbotronInner>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Home;
