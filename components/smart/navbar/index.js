import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useRouter } from "next/router";

import projects from "../../../data/projects.json";

import NavbarBrand from "../navbar-brand";
import NavbarNav from "../navbar-nav";
import { Container, Row, Col } from "../../styled/grid";

import { Host } from "./style";

const Navbar = () => {
    const router = useRouter();
    const [isHomePage, setIsHomePage] = useState(false);
    const [isProjectPage, setIsProjectPage] = useState(false);

    useEffect(() => {
        const handleRouteChange = (url) => {
            setIsHomePage(/^\/$/.test(url));
            setIsProjectPage(
                new RegExp(
                    `^/projets/(${projects.map((p) => p.slug).join("|")})$`
                ).test(url)
            );
        };

        handleRouteChange(router.pathname);
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    return (
        <Host noBorderBottom={isHomePage} transparent={isProjectPage}>
            <Container>
                <Row alignItems="center">
                    <Col colWidth="3">
                        <NavbarBrand reverseColor={isProjectPage} />
                    </Col>
                    <Col colWidth="9" className="hidden-xs">
                        <NavbarNav reverseColor={isProjectPage} />
                    </Col>
                </Row>
            </Container>
        </Host>
    );
};

export default Navbar;
