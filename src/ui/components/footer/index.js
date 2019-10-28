import { h } from "preact";

import links from "../../../data/links.json";

import LinksGroup from "../links-group";
import StyledLink from "../styled-link";
import IconLink from "../icon-link";

import { Container, Row, Col } from "../grid/style";
import { Host } from "./style";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconLinkedIn from "../../assets/images/icon-linkedin.svg";
import iconGitLab from "../../assets/images/icon-gitlab.svg";

const Footer = () => (
    <Host>
        <Container>
            <Row textAlign="center">
                <Col>
                    <StyledLink type="span">
                        Politique de Confidentialité
                    </StyledLink>
                </Col>
                <Col>
                    <LinksGroup title="Me suivre sur">
                        <IconLink
                            href={links.find(l => l.slug === "twitter").url}
                            target="_blank"
                            icon={iconTwitter}
                        >
                            Twitter
                        </IconLink>
                        <IconLink
                            href={links.find(l => l.slug === "linkedin").url}
                            target="_blank"
                            icon={iconLinkedIn}
                        >
                            LinkedIn
                        </IconLink>
                    </LinksGroup>
                </Col>
                <Col>
                    <LinksGroup title="Code source sur">
                        <IconLink
                            href={
                                links.find(
                                    l => l.slug === "gitlab-portfolio-v6"
                                ).url
                            }
                            target="_blank"
                            icon={iconGitLab}
                        >
                            GitLab
                        </IconLink>
                    </LinksGroup>
                </Col>
            </Row>
        </Container>
    </Host>
);

export default Footer;
