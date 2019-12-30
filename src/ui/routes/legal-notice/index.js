import { h, Fragment } from "preact";

import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";
import StyledLink from "../../components/styled/styled-link";

import { IframeWrapper, Iframe } from "./style";

const LegalNotice = () => (
    <PageContent>
        <Container>
            <Row>
                <Col>
                    <h1>Mentions légales</h1>
                    <h2>Confidentialité</h2>
                    <p>
                        J’ai mis en place un tracker via le service{" "}
                        <StyledLink
                            href="https://fr.matomo.org"
                            target="_blank"
                        >
                            Matomo
                        </StyledLink>{" "}
                        (auto-hébergé).
                        <br />
                        Celui-ci me permet de comptabiliser le nombre de visites
                        sur ce site.
                        <br />
                        Si vous le souhaitez, vous pouvez à tout moment le
                        désactiver via le champ ci-dessous :
                    </p>
                    <IframeWrapper>
                        <Iframe
                            style="border: 0; height: 200px; width: 600px;"
                            src="https://piwik.kpcd.me/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=262626&fontSize=18px&fontFamily=%22HK%20Grotesk%22%2C%20sans-serif"
                        ></Iframe>
                    </IframeWrapper>
                    <h2>Hébergement</h2>
                    <p>
                        Le site www.kevinpainchaud.fr est hébergé chez OVH.
                        <br />2 rue Kellermann 59100 Roubaix – France
                    </p>
                    <h2>Ressources</h2>
                    <p>
                        Ci-dessous, une partie des ressources utilisées dans le
                        cadre de la réalisation de ce site web :
                    </p>
                    <ul>
                        <li>
                            Polices d'écriture :
                            <ul>
                                <li>
                                    <StyledLink
                                        href="https://www.fontsquirrel.com/fonts/hk-grotesk"
                                        target="_blank"
                                    >
                                        HK Grotesk
                                    </StyledLink>{" "}
                                    par Hanken Design Co.
                                </li>
                                <li>
                                    <StyledLink
                                        href="https://www.tinkov.info/gilroy.html"
                                        target="_blank"
                                    >
                                        Gilroy
                                    </StyledLink>{" "}
                                    par Radomir Tinkov
                                </li>
                            </ul>
                        </li>
                        <li>
                            Set d'icônes :
                            <ul>
                                <li>
                                    <StyledLink
                                        href="https://www.iconfinder.com/iconsets/ios-7-icons"
                                        target="_blank"
                                    >
                                        iOS 7 icons
                                    </StyledLink>{" "}
                                    par Visual Pharm
                                </li>
                            </ul>
                        </li>
                        <li>
                            Mockups :
                            <ul>
                                <li>
                                    <li>
                                        <StyledLink
                                            href="https://www.anthonyboyd.graphics/mockups/isometric-ipad-pro-2018-mockup/"
                                            target="_blank"
                                        >
                                            Isometric iPad Pro (2018) Mockup
                                        </StyledLink>{" "}
                                        par Anthony Boyd Graphics
                                    </li>
                                </li>
                                <li>
                                    <li>
                                        <StyledLink
                                            href="http://graphiclegion.com/tools/2016/08/11/4k-tv-mockup/"
                                            target="_blank"
                                        >
                                            4K TV Mockup
                                        </StyledLink>{" "}
                                        par Graphic Legion
                                    </li>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </PageContent>
);

export default LegalNotice;
