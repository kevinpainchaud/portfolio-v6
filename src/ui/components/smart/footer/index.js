import { h } from "preact";

import links from "../../../../data/links.json";

import SocialNetworks from "../../smart/social-networks";
import LinksGroup from "../../dumb/links-group";
import { Container, Row, Col } from "../../styled/grid";

import { Host, Inner, StyledLink, IconLink } from "./style";

import iconGithub from "../../../assets/images/icon-github-circle.svg";

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
                                                l.slug === "github-portfolio-v6"
                                        ).url
                                    }
                                    target="_blank"
                                    icon={iconGithub}
                                    gray
                                >
                                    GitHub
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
