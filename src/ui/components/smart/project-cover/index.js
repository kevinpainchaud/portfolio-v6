import { h } from "preact";
import PropTypes from "prop-types";

import Image from "../../dumb/image";
import { Container, Row, Col } from "../../styled/grid";
import { ButtonSecondary, ButtonWhiteOutline } from "../../styled/button";
import ButtonGroup from "../../styled/button-group";
import Meta from "../../styled/meta";

import {
    Host,
    BackgroundImage,
    Header,
    Body,
    BodyInner,
    Title,
    Metas,
} from "./style";

import iconArrowLeft from "../../../assets/images/icon-arrow-left.svg";
import iconExternalLink from "../../../assets/images/icon-external-link.svg";
import iconCompany from "../../../assets/images/icon-company.svg";
import iconCalendar from "../../../assets/images/icon-calendar.svg";

const ProjectCover = ({
    name,
    slug,
    company,
    date,
    url,
    repoUrl,
    topOffset,
}) => {
    let backgroundImageSrc = null;

    try {
        // eslint-disable-next-line no-undef
        backgroundImageSrc = require(`../../../../statics/images/projects/covers/cover-${slug}.jpg`)
            .default;
    } catch (error) {}

    return (
        <Host
            slug={slug}
            style={{
                "margin-top": -topOffset + "px",
            }}
        >
            <BackgroundImage>
                <Image src={backgroundImageSrc} lazyload />
            </BackgroundImage>
            <Container
                style={{
                    "padding-top": topOffset + "px",
                }}
            >
                <Header className="hidden-xs">
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
                                {url || repoUrl ? (
                                    <ButtonGroup>
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
                                        {repoUrl ? (
                                            <ButtonWhiteOutline
                                                href={repoUrl}
                                                target="_blank"
                                                tagName="button"
                                                iconWidthXs
                                            >
                                                <svg>
                                                    <use
                                                        xlinkHref={`#${iconExternalLink.id}`}
                                                    ></use>
                                                </svg>
                                                <span>Code source</span>
                                            </ButtonWhiteOutline>
                                        ) : null}
                                    </ButtonGroup>
                                ) : null}
                            </BodyInner>
                        </Col>
                    </Row>
                </Body>
            </Container>
        </Host>
    );
};

ProjectCover.propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    repoUrl: PropTypes.string,
    url: PropTypes.string,
    topOffset: PropTypes.number,
};

export default ProjectCover;
