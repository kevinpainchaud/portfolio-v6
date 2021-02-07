import { h } from "preact";
import PropTypes from "prop-types";

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

NavbarBrand.propTypes = {
    reverseColor: PropTypes.bool,
};

export default NavbarBrand;
