import { h } from "preact";

import PageContent from "../../components/styled/page-content";
import { Container, Row, Col } from "../../components/styled/grid";
import StyledLink from "../../components/styled/styled-link";

const LegalNotice = () => {
    return (
        <PageContent>
            <Container>
                <Row>
                    <Col>
                        <h1>Mentions légales</h1>
                        <h2>Hébergement</h2>
                        <p>
                            Le site www.kevinpainchaud.fr est hébergé chez OVH.
                            <br />2 rue Kellermann 59100 Roubaix – France
                        </p>
                        <h2>Cookies</h2>
                        <p>
                            Un cookie est un fichier de petite taille identifié
                            par un nom et transmis à votre navigateur par un
                            site web sur lequel vous vous connectez. Ce dernier
                            peut contenir diverses informations d’ordre
                            technique, statistique ou publicitaire. Votre
                            navigateur le conservera et le renverra au serveur
                            web chaque fois que vous vous y re-connecterez
                            jusqu’à sa disparition conditionnée selon une
                            certaine durée.
                        </p>
                        <p>
                            Sur ce site, des cookies sont utilisés pour :<br />
                        </p>
                        <ul>
                            <li>des statistiques via Google Analytics</li>
                        </ul>
                        <h2>Ressources</h2>
                        <p>
                            Ci-dessous, une partie des ressources utilisées dans
                            le cadre de la réalisation de ce site web :
                        </p>
                        <ul>
                            <li>
                                Polices d’écriture :
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
                                Sets d’icônes :
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
                                    <li>
                                        <StyledLink
                                            href="https://ionicons.com"
                                            target="_blank"
                                        >
                                            Ionicons
                                        </StyledLink>{" "}
                                        par Ionic Framework team
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
                            <li>
                                Arrière-plans :
                                <ul>
                                    <li>
                                        Entête du projet Reowl par Blizzard
                                        Entertainment
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </PageContent>
    );
};

export default LegalNotice;
