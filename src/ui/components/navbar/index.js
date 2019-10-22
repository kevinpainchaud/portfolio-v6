import { h } from "preact";

import NavbarBrand from "../navbar-brand";
import NavbarNav from "../navbar-nav";

import { Header } from "./style";

const Navbar = () => (
    <Header>
        <NavbarBrand />
        <NavbarNav />
    </Header>
);

export default Navbar;
