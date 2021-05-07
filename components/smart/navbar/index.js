import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import { useAppContext } from "../../../context/app-context";

import NavbarBrand from "../navbar-brand";
import NavbarNav from "../navbar-nav";
import { Container, Row, Col } from "../../styled/grid";

import { Host } from "./style";

const Navbar = () => {
    const specialPages = ["/", "/projets", "/projets/[slug]"];
    const appContext = useAppContext();
    const [isADefaultPage, setIsADefaultPage] = useState(
        !specialPages.includes(appContext.currentRoutePathname)
    );
    const [isProjectPage, setIsProjectPage] = useState(
        appContext.currentRoutePathname === "/projets/[slug]"
    );

    useEffect(() => {
        setIsADefaultPage(
            !specialPages.includes(appContext.currentRoutePathname)
        );
        setIsProjectPage(appContext.currentRoutePathname === "/projets/[slug]");
    }, [appContext.currentRoutePathname]);

    return (
        <Host borderBottom={isADefaultPage} transparent={isProjectPage}>
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
