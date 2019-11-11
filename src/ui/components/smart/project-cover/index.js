import { h } from "preact";

import { Container, Row, Col } from "../../styled/grid";
import { ButtonWhiteOutline } from "../../styled/button";
import Meta from "../../styled/meta";

import { Host, Header, Body, BodyInner, Title, Metas } from "./style";

import arrowLeft from "../../../assets/images/arrow-left.svg";
import iconExternalLink from "../../../assets/images/icon-external-link.svg";
import iconCompany from "../../../assets/images/icon-company.svg";
import iconCalendar from "../../../assets/images/icon-calendar.svg";

const ProjectCover = ({ name, company, date, url, topOffset }) => (
    <Host
        style={{
            "margin-top": -topOffset + "px"
        }}
    >
        <Container
            style={{
                "padding-top": topOffset + "px"
            }}
        >
            <Header>
                <Row>
                    <Col>
                        <ButtonWhiteOutline
                            href="/projets"
                            tagName="routerLink"
                            xs
                        >
                            <svg>
                                <use xlinkHref={`#${arrowLeft.id}`}></use>
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
                            <ButtonWhiteOutline
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
                            </ButtonWhiteOutline>
                        </BodyInner>
                    </Col>
                </Row>
            </Body>
        </Container>
    </Host>
);

export default ProjectCover;
