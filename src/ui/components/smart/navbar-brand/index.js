import { h } from "preact";

import Image from "../../dumb/image";
import Link from "../link";

import Host from "./style";

import logo from "../../../assets/images/logo.png";

const NavbarBrand = ({ reverseColor }) => (
    <Host reverseColor={reverseColor}>
        <Link href="/" tagName="routerLink">
            <Image src={logo} alt="Logo" />
            <span>Kévin Painchaud</span>
        </Link>
    </Host>
);

export default NavbarBrand;
