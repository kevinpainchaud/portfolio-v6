import { h } from "preact";
import PropTypes from "prop-types";

import Link from "../link";

import Host from "./style";

const NavbarBrand = ({ reverseColor }) => (
    <Host reverseColor={reverseColor}>
        <Link href="/" tagName="routerLink">
            <img src="/images/logo.png" alt="Logo" width="42" height="42" />
            <span>Kévin Painchaud</span>
        </Link>
    </Host>
);

NavbarBrand.propTypes = {
    reverseColor: PropTypes.bool,
};

export default NavbarBrand;
