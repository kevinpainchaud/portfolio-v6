import { h } from "preact";
import Image from "next/image";
import styled, { css } from "styled-components";

import { getExperienceYears } from "../helpers/date";
import { before } from "../assets/styles/mixins/media-queries";

import PageContent from "../components/styled/page-content";
import { Container, Row, Col } from "../components/styled/grid";
import {
    JumbotronContent,
    JumbotronImage,
} from "../components/styled/jumbotron";
import { ButtonPrimary } from "../components/styled/button";
import { Jumbotron as OriginalJumbotron } from "../components/styled/jumbotron";

const Jumbotron = styled(OriginalJumbotron)`
    ${before(
        "sm",
        css`
            padding-top: 0;
            min-height: auto !important;
        `
    )}
`;

const WavingHandEmoji = styled.span`
    &:after {
        content: " 👋";
    }
`;

const Home = () => {
    return (
        <PageContent justifyContent="center">
            <Container>
                <Row alignItems="center">
                    <Col>
                        <Jumbotron>
                            <JumbotronContent>
                                <p>
                                    Bonjour
                                    <WavingHandEmoji />
                                    ,
                                    <br />
                                    Je suis{" "}
                                    <strong>
                                        développeur front-end
                                    </strong> à <strong>Rennes</strong>.
                                    <br />
                                    Après {getExperienceYears()} années
                                    d’expérience et quelques dizaines de projets
                                    web, <br className="hidden-xs hidden-sm" />
                                    je travaille aujourd’hui pour le groupe
                                    HelloWork en tant que{" "}
                                    <br className="hidden-xs hidden-sm" />
                                    responsable front-end sur le produit
                                    MaFormation.fr.
                                </p>
                                <ButtonPrimary
                                    href="/documents/cv-kevin-painchaud.pdf"
                                    target="_blank"
                                >
                                    Voir mon CV
                                </ButtonPrimary>
                            </JumbotronContent>
                            <JumbotronImage>
                                <Image
                                    src="/images/me.png"
                                    width="444"
                                    height="498"
                                />
                            </JumbotronImage>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </PageContent>
    );
};

export default Home;
