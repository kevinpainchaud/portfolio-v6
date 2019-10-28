import { h } from "preact";

import NavbarBrand from "../navbar-brand";
import NavbarNav from "../navbar-nav";

import { Container, Row, Col } from "../grid/style";
import { Host } from "./style";

const Navbar = () => (
    <Host>
        <Container>
            <Row>
                <Col colWidth="3">
                    <NavbarBrand />
                </Col>
                <Col colWidth="9">
                    <NavbarNav />
                </Col>
            </Row>
        </Container>
    </Host>
);

export default Navbar;
