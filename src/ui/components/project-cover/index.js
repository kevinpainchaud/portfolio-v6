import { h } from "preact";

import { Host, Header, Body, BodyInner, Title, Metas } from "./style";
import { Container, Row, Col } from "../grid/style";
import { Button } from "../button/style";
import { Meta } from "../meta/style";

import iconCalendar from "../../assets/images/icon-calendar.svg";

const ProjectCover = ({ name, company, date }) => (
    <Host>
        <Container>
            <Header>
                <Row>
                    <Col>
                        <Button>Retour</Button>
                    </Col>
                </Row>
            </Header>
            <Body>
                <Row>
                    <Col>
                        <BodyInner>
                            <Title>{name}</Title>
                            <Metas>
                                <Meta>
                                    <svg>
                                        <use
                                            xlinkHref={`#${iconCalendar.id}`}
                                        ></use>
                                    </svg>
                                    <div>Pour : {company}</div>
                                </Meta>
                                <Meta>
                                    <svg>
                                        <use
                                            xlinkHref={`#${iconCalendar.id}`}
                                        ></use>
                                    </svg>
                                    <div>Année : {date}</div>
                                </Meta>
                            </Metas>
                            <Button>Visiter le site</Button>
                        </BodyInner>
                    </Col>
                </Row>
            </Body>
        </Container>
    </Host>
);

export default ProjectCover;
