import { h } from "preact";
import PropTypes from "prop-types";

import { Host, Title, SubTitle } from "./style";

const NavbarNav = ({ title, subTitle }) => (
    <Host>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Host>
);

NavbarNav.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default NavbarNav;
