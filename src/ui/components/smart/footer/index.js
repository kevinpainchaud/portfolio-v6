import { h } from "preact";

import links from "../../../../data/links.json";

import SocialNetworks from "../../smart/social-networks";
import LinksGroup from "../../dumb/links-group";
import { Container, Row, Col } from "../../styled/grid";

import { Host, Inner, StyledLink, IconLink } from "./style";

import iconGitLab from "../../../assets/images/icon-gitlab-circle.svg";

const Footer = () => (
    <Host>
        <Container>
            <Row textAlign="center">
                <Col>
                    <Inner>
                        <div>
                            <StyledLink
                                href="/mentions-legales/"
                                tagName="routerLink"
                            >
                                Mentions légales
                            </StyledLink>
                        </div>
                        <div>
                            <SocialNetworks iconLinkGray></SocialNetworks>
                        </div>
                        <div>
                            <LinksGroup title="Code source sur">
                                <IconLink
                                    href={
                                        links.find(
                                            l =>
                                                l.slug === "gitlab-portfolio-v6"
                                        ).url
                                    }
                                    target="_blank"
                                    icon={iconGitLab}
                                    gray
                                >
                                    GitLab
                                </IconLink>
                            </LinksGroup>
                        </div>
                    </Inner>
                </Col>
            </Row>
        </Container>
    </Host>
);

export default Footer;
