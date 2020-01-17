import { h } from "preact";
import { getCurrentUrl } from "preact-router";

import projects from "../../../../data/projects.json";

import NavbarBrand from "../navbar-brand";
import NavbarNav from "../navbar-nav";
import { Container, Row, Col } from "../../styled/grid";

import { Host } from "./style";

const Navbar = () => {
    const isHomePage = /^\/$/.test(getCurrentUrl()),
        isProjectPage = new RegExp(
            `^/projets/(${projects.map(p => p.slug).join("|")})/$`
        ).test(getCurrentUrl());

    return (
        <Host noBorderBottom={isHomePage} transparent={isProjectPage}>
            <Container>
                <Row alignItems="center">
                    <Col colWidth="3">
                        <NavbarBrand reverseColor={isProjectPage} />
                    </Col>
                    <Col colWidth="9" class="hidden-xs">
                        <NavbarNav reverseColor={isProjectPage} />
                    </Col>
                </Row>
            </Container>
        </Host>
    );
};

export default Navbar;
