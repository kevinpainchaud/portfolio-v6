import { h } from "preact";

import { Host, Title, SubTitle } from "./style";

const NavbarNav = ({ title, subTitle }) => (
    <Host>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Host>
);

export default NavbarNav;
