import { h } from "preact";
import { Link } from "preact-router/match";

import { Host } from "./style";

const NavbarBrand = () => (
    <Host>
        <Link href="/">Kévin Painchaud</Link>
    </Host>
);

export default NavbarBrand;
