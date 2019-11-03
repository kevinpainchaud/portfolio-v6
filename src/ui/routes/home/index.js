import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";

import { Host } from "./style";
import {
    Jumbotron,
    JumbotronContent,
    JumbotronIllustration
} from "../../components/jumbotron/style";
import { Container, Row, Col } from "../../components/grid/style";
import { ButtonPrimary } from "../../components/button/style";

const Home = () => {
    const host = useRef(null);
    const [minHeight, setMinHeight] = useState(0);

    const updateMinHeight = () =>
        setMinHeight(
            window.innerHeight -
                (document.body.clientHeight -
                    window
                        .getComputedStyle(host.current)
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
        <Host ref={host} style={`min-height: ${minHeight}px`}>
            <Jumbotron>
                <Container>
                    <Row alignItems="center">
                        <Col>
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
                        </Col>
                        <Col>
                            <JumbotronIllustration>
                                <img
                                    src="https://picsum.photos/800/800?grayscale"
                                    alt=""
                                />
                            </JumbotronIllustration>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Host>
    );
};

export default Home;
