import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";

import PageContent from "../../components/styled/page-content";
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
        <PageContent>
            <Jumbotron>
                <Container>
                    <Row alignItems="center">
                        <Col>
                            <JumbotronInner
                                ref={jumbotronInner}
                                style={`min-height: ${minHeight}px`}
                            >
                                {/* <JumbotronIllustration>
                                    <svg>
                                        <use
                                            xlinkHref={`#${illustration.id}`}
                                        ></use>
                                    </svg>
                                </JumbotronIllustration> */}
                                <JumbotronContent>
                                    <p>
                                        Hello 👋,
                                        <br />
                                        Je suis Kévin Painchaud,{" "}
                                        <strong>
                                            développeur front-end
                                        </strong> à <strong>Rennes</strong>.
                                        Passionné par le web en général, je me
                                        suis spécialisé dans la réalisation
                                        d'interfaces. Je m'intéresse aussi
                                        particulièrement à l'architecture de
                                        l'information et plus généralement à
                                        l'expérience utilisateur.
                                    </p>
                                    <ButtonPrimary>Voir mon CV</ButtonPrimary>
                                </JumbotronContent>
                            </JumbotronInner>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </PageContent>
    );
};

export default Home;
