import { h, Fragment } from "preact";
import { useContext } from "preact/hooks";

import { AppContext } from "../../components/app";

import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";
import tools from "../../../data/tools.json";
import experience from "../../../data/experience.json";
import education from "../../../data/education.json";

import Experience from "../../components/smart/experience";
import Education from "../../components/smart/education";
import PageTitle from "../../components/dumb/page-title";
import ContentBlock from "../../components/dumb/content-block";
import ContentBlockMini from "../../components/dumb/content-block-mini";
import LogoBadge from "../../components/dumb/logo-badge";
import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";
import { Button, ButtonPrimary } from "../../components/styled/button";
import SkillTags from "../../components/styled/skill-tags";
import SkillTag from "../../components/styled/skill-tag";
import LogoBadges from "../../components/styled/logo-badges";
import ActionsGroup from "../../components/styled/actions-group";
import Entities from "../../components/styled/entities";

const About = () => {
    const appContext = useContext(AppContext);

    const handleContactBtnClick = () =>
        appContext.emitter.emit("TOGGLE_CONTACT_MODAL");

    return (
        <PageContent>
            <Container>
                <Row>
                    <Col>
                        <PageTitle
                            title="À propos"
                            subTitle="Quelques mots pour me présenter"
                        ></PageTitle>
                    </Col>
                </Row>
                {skills.length > 0 ? (
                    <ContentBlock
                        title="Mes compétences"
                        background={true}
                        textAlign="center"
                    >
                        <SkillTags>
                            {skills.map(skill => (
                                <SkillTag darker>{skill.name}</SkillTag>
                            ))}
                        </SkillTags>
                    </ContentBlock>
                ) : (
                    ""
                )}
                {technologies.length > 0 || tools.length > 0 ? (
                    <ContentBlock>
                        <Row>
                            {technologies.length > 0 ? (
                                <Col>
                                    <ContentBlockMini
                                        title="Ma stack actuelle"
                                        titleTagName="h2"
                                        textAlign="center"
                                        noPaddingLeft
                                        noPaddingRight
                                    >
                                        {technologies.length > 0 ? (
                                            <LogoBadges>
                                                {technologies
                                                    .filter(
                                                        technology =>
                                                            technology.currentStack ===
                                                            true
                                                    )
                                                    .map(technology => (
                                                        <LogoBadge
                                                            type="technology"
                                                            slug={
                                                                technology.slug
                                                            }
                                                            name={
                                                                technology.name
                                                            }
                                                        ></LogoBadge>
                                                    ))}
                                            </LogoBadges>
                                        ) : (
                                            ""
                                        )}
                                    </ContentBlockMini>
                                </Col>
                            ) : (
                                ""
                            )}
                            {tools.length > 0 ? (
                                <Col>
                                    <ContentBlockMini
                                        title="Mes outils"
                                        titleTagName="h2"
                                        textAlign="center"
                                        noPaddingLeft
                                        noPaddingRight
                                    >
                                        {tools.length > 0 ? (
                                            <LogoBadges>
                                                {tools.map(tool => (
                                                    <LogoBadge
                                                        type="tool"
                                                        slug={tool.slug}
                                                        name={tool.name}
                                                    ></LogoBadge>
                                                ))}
                                            </LogoBadges>
                                        ) : (
                                            ""
                                        )}
                                    </ContentBlockMini>
                                </Col>
                            ) : (
                                ""
                            )}
                        </Row>
                    </ContentBlock>
                ) : (
                    ""
                )}
                {experience.length > 0 || education.length > 0 ? (
                    <>
                        <ContentBlock
                            title="Mon parcours"
                            titleTextAlign="center"
                            background={true}
                        >
                            <Row>
                                {experience.length > 0 ? (
                                    <Col sameHeight>
                                        <ContentBlockMini
                                            title="Mes expériences"
                                            titleTextAlign="center"
                                            background
                                            backgroundWhite
                                            border
                                        >
                                            <Entities>
                                                {experience.map(e => (
                                                    <Experience
                                                        companyUrn={
                                                            e.companyUrn
                                                        }
                                                        title={e.title}
                                                        companyName={
                                                            e.companyName
                                                        }
                                                        timePeriod={
                                                            e.timePeriod
                                                        }
                                                        locationName={
                                                            e.locationName
                                                        }
                                                    />
                                                ))}
                                            </Entities>
                                        </ContentBlockMini>
                                    </Col>
                                ) : (
                                    ""
                                )}
                                {education.length > 0 ? (
                                    <Col sameHeight>
                                        <ContentBlockMini
                                            title="Mes formations"
                                            titleTextAlign="center"
                                            background
                                            backgroundWhite
                                            border
                                        >
                                            <Entities>
                                                {education.map(e => (
                                                    <Education
                                                        schoolUrn={e.schoolUrn}
                                                        schoolName={
                                                            e.schoolName
                                                        }
                                                        diploma={`${e.degreeName}, ${e.fieldOfStudy}`}
                                                        timePeriod={
                                                            e.timePeriod
                                                        }
                                                    />
                                                ))}
                                            </Entities>
                                        </ContentBlockMini>
                                    </Col>
                                ) : (
                                    ""
                                )}
                            </Row>
                        </ContentBlock>
                    </>
                ) : (
                    ""
                )}
                <ContentBlock noPaddingBottom>
                    <ActionsGroup>
                        <ButtonPrimary
                            href="/cv-kevin-painchaud.pdf"
                            target="_blank"
                            tagName="button"
                        >
                            Voir mon CV
                        </ButtonPrimary>
                        <Button onClick={handleContactBtnClick} tagName="span">
                            Me contacter
                        </Button>
                    </ActionsGroup>
                </ContentBlock>
            </Container>
        </PageContent>
    );
};

export default About;
