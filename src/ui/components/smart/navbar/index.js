import { h } from "preact";
import { getCurrentUrl } from "preact-router";

import NavbarBrand from "../navbar-brand";
import NavbarNav from "../navbar-nav";
import { Container, Row, Col } from "../../styled/grid";

import Host from "./style";

const Navbar = () => {
    const isProjectPage = /^\/projets\/.*/.test(getCurrentUrl());

    return (
        <Host transparent={isProjectPage}>
            <Container>
                <Row alignItems="center">
                    <Col colWidth="3">
                        <NavbarBrand reverseColor={isProjectPage} />
                    </Col>
                    <Col colWidth="9">
                        <NavbarNav reverseColor={isProjectPage} />
                    </Col>
                </Row>
            </Container>
        </Host>
    );
};

export default Navbar;
