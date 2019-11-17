import { h, Fragment } from "preact";
import { useContext } from "preact/hooks";

import { AppContext } from "../../components/app";

import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";
import tools from "../../../data/tools.json";
import experience from "../../../data/experience.json";
import education from "../../../data/education.json";

import PageTitle from "../../components/dumb/page-title";
import ContentBlock from "../../components/dumb/content-block";
import ContentBlockMini from "../../components/dumb/content-block-mini";
import LogoBadge from "../../components/dumb/logo-badge";
import { Container, Row, Col } from "../../components/styled/grid";
import { Button, ButtonPrimary } from "../../components/styled/button";
import SkillTags from "../../components/styled/skill-tags";
import SkillTag from "../../components/styled/skill-tag";
import LogoBadges from "../../components/styled/logo-badges";
import ActionsGroup from "../../components/styled/actions-group";

const About = () => {
    const appContext = useContext(AppContext);

    const handleContactBtnClick = () =>
        appContext.emitter.emit("TOGGLE_CONTACT_MODAL");

    return (
        <Container>
            <Row>
                <Col>
                    <PageTitle
                        title="À propos"
                        subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing"
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
                            <SkillTag>{skill.name}</SkillTag>
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
                                    textAlign="center"
                                    noPaddingLeft
                                    noPaddingRight
                                >
                                    {technologies.length > 0 ? (
                                        <LogoBadges>
                                            {technologies.map(technology => (
                                                <LogoBadge
                                                    type="technology"
                                                    slug={technology.slug}
                                                    name={technology.name}
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
                                    title="Outils que j'❤️"
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
                        background={true}
                        textAlign="center"
                    >
                        <Row>
                            {experience.length > 0 ? (
                                <Col sameHeight>
                                    <ContentBlockMini
                                        title="Mes expériences"
                                        background
                                        backgroundWhite
                                        border
                                        textAlign="center"
                                    >
                                        {experience.map(e => (
                                            <div>
                                                {e.title} - {e.companyName}
                                            </div>
                                        ))}
                                    </ContentBlockMini>
                                </Col>
                            ) : (
                                ""
                            )}
                            {education.length > 0 ? (
                                <Col sameHeight>
                                    <ContentBlockMini
                                        title="Mes formations"
                                        background
                                        backgroundWhite
                                        border
                                        textAlign="center"
                                    >
                                        {education.map(e => (
                                            <div>
                                                {e.degreeName} - {e.schoolName}
                                            </div>
                                        ))}
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
                    <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
                    <Button onClick={handleContactBtnClick} tagName="span">
                        Me contacter
                    </Button>
                </ActionsGroup>
            </ContentBlock>
        </Container>
    );
};

export default About;
