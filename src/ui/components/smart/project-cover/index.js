import { h } from "preact";

import Image from "../../dumb/image";
import { Container, Row, Col } from "../../styled/grid";
import { ButtonSecondary, ButtonWhiteOutline } from "../../styled/button";
import Meta from "../../styled/meta";

import {
    Host,
    BackgroundImage,
    Header,
    Body,
    BodyInner,
    Title,
    Metas
} from "./style";

import iconArrowLeft from "../../../assets/images/icon-arrow-left.svg";
import iconExternalLink from "../../../assets/images/icon-external-link.svg";
import iconCompany from "../../../assets/images/icon-company.svg";
import iconCalendar from "../../../assets/images/icon-calendar.svg";

const ProjectCover = ({ name, slug, company, date, url, topOffset }) => {
    let backgroundImageSrc = null;

    try {
        backgroundImageSrc = require(`../../../../statics/images/projects/covers/lg/cover-${slug}.jpg`);
    } catch (error) {}

    return (
        <Host
            slug={slug}
            style={{
                "margin-top": -topOffset + "px"
            }}
        >
            <BackgroundImage>
                <Image src={backgroundImageSrc} />
            </BackgroundImage>
            <Container
                style={{
                    "padding-top": topOffset + "px"
                }}
            >
                <Header class="hidden-xs">
                    <Row>
                        <Col>
                            <ButtonWhiteOutline
                                href="/projets/"
                                tagName="routerLink"
                                xs
                            >
                                <svg>
                                    <use
                                        xlinkHref={`#${iconArrowLeft.id}`}
                                    ></use>
                                </svg>
                                <span>Retour</span>
                            </ButtonWhiteOutline>
                        </Col>
                    </Row>
                </Header>
                <Body>
                    <Row>
                        <Col>
                            <BodyInner>
                                <Title>{name}</Title>
                                <Metas>
                                    <Meta reverseColor>
                                        <svg>
                                            <use
                                                xlinkHref={`#${iconCompany.id}`}
                                            ></use>
                                        </svg>
                                        <div>Pour : {company}</div>
                                    </Meta>
                                    <Meta reverseColor>
                                        <svg>
                                            <use
                                                xlinkHref={`#${iconCalendar.id}`}
                                            ></use>
                                        </svg>
                                        <div>Année : {date}</div>
                                    </Meta>
                                </Metas>
                                {url ? (
                                    <ButtonSecondary
                                        href={url}
                                        target="_blank"
                                        tagName="button"
                                        iconWidthXs
                                    >
                                        <svg>
                                            <use
                                                xlinkHref={`#${iconExternalLink.id}`}
                                            ></use>
                                        </svg>
                                        <span>Visiter le site</span>
                                    </ButtonSecondary>
                                ) : null}
                            </BodyInner>
                        </Col>
                    </Row>
                </Body>
            </Container>
        </Host>
    );
};

export default ProjectCover;
