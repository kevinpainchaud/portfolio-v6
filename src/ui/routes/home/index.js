import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import { subscribe } from "subscribe-ui-event";

import { getExperienceYears } from "../../../helpers/date";

import Image from "../../components/dumb/image";
import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";
import {
    Jumbotron,
    JumbotronInner,
    JumbotronContent,
    JumbotronImage
} from "../../components/styled/jumbotron";
import { ButtonPrimary } from "../../components/styled/button";

import me from "../../assets/images/me.png";

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

        const subscription = subscribe("resize", updateMinHeight, {
            throttleRate: 100
        });

        return () => subscription.unsubscribe();
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
                                <JumbotronContent>
                                    <p>
                                        Bonjour 👋,
                                        <br />
                                        Je suis{" "}
                                        <strong>
                                            développeur front-end
                                        </strong> à <strong>Rennes</strong>.
                                        <br />
                                        Après {getExperienceYears()} années
                                        d'expérience et quelques dizaines de
                                        projets web,
                                        <br />
                                        je travaille aujourd'hui pour le groupe
                                        HelloWork en tant que
                                        <br />
                                        responsable front-end sur le produit
                                        MaFormation.fr.
                                    </p>
                                    <ButtonPrimary
                                        href="/cv-kevin-painchaud.pdf"
                                        target="_blank"
                                    >
                                        Voir mon CV
                                    </ButtonPrimary>
                                </JumbotronContent>
                                <JumbotronImage>
                                    <Image src={me} />
                                </JumbotronImage>
                            </JumbotronInner>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </PageContent>
    );
};

export default Home;
