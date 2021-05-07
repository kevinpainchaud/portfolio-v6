import { h } from "preact";
import PropTypes from "prop-types";
import Image from "next/image";

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

import iconArrowLeft from "../../../public/images/icons/icon-arrow-left.svg";
import iconExternalLink from "../../../public/images/icons/icon-external-link.svg";
import iconCompany from "../../../public/images/icons/icon-company.svg";
import iconCalendar from "../../../public/images/icons/icon-calendar.svg";

const ProjectCover = ({
    name,
    slug,
    company,
    date,
    url,
    repoUrl,
    navbarOffset,
}) => {
    return (
        <Host slug={slug} navbarOffset={navbarOffset}>
            <BackgroundImage>
                <Image
                    src={`/images/projects/covers/cover-${slug}.jpg`}
                    width="1920"
                    height="580"
                />
            </BackgroundImage>
            <Container>
                <Header navbarOffset={navbarOffset} className="hidden-xs">
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
    navbarOffset: PropTypes.bool,
};

export default ProjectCover;
