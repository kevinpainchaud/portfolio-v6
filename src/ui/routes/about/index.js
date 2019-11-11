import { h, Fragment } from "preact";

import skills from "../../../data/skills.json";
import technologies from "../../../data/technologies.json";
import tools from "../../../data/tools.json";
import experience from "../../../data/experience.json";
import education from "../../../data/education.json";

import PageTitle from "../../components/dumb/page-title";
import ContentBlock from "../../components/dumb/content-block";
import LogoBadge from "../../components/dumb/logo-badge";
import Link from "../../components/smart/link";
import { Container, Row, Col } from "../../components/styled/grid";
import { Button, ButtonPrimary } from "../../components/styled/button";
import SkillTags from "../../components/styled/skill-tags";
import SkillTag from "../../components/styled/skill-tag";
import LogoBadges from "../../components/styled/logo-badges";
import ActionsGroup from "../../components/styled/actions-group";

const About = () => (
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
                            <h2>Ma stack actuelle</h2>
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
                        </Col>
                    ) : (
                        ""
                    )}
                    {tools.length > 0 ? (
                        <Col>
                            <h2>Outils que j'❤️</h2>
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
                            <Col>
                                <h3>Mes expériences</h3>

                                <div>
                                    {experience.map(e => (
                                        <div>
                                            {e.title} - {e.companyName}
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        ) : (
                            ""
                        )}
                        {education.length > 0 ? (
                            <Col>
                                <h3>Mes formations</h3>

                                <div>
                                    {education.map(e => (
                                        <div>
                                            {e.degreeName} - {e.schoolName}
                                        </div>
                                    ))}
                                </div>
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
                <Button>Me contacter</Button>
            </ActionsGroup>
        </ContentBlock>
    </Container>
);

export default About;
