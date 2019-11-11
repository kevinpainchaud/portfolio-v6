import { h } from "preact";

import Link from "../link";

import Host from "./style";

const NavbarBrand = ({ reverseColor }) => (
    <Host reverseColor={reverseColor}>
        <Link href="/" tagName="routerLink">
            Kévin Painchaud
        </Link>
    </Host>
);

export default NavbarBrand;
