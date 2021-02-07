import { h } from "preact";
import PropTypes from "prop-types";

import Image from "../../dumb/image";

import { Host, Logo, Title, SubTitle, Meta } from "./style";

const Entity = ({ title, subTitle, metas, logo, logoAlt }) => (
    <Host>
        <div>
            {logo ? (
                <Logo>
                    <Image src={logo} alt={logoAlt} />
                </Logo>
            ) : null}
        </div>
        <div>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            {metas.map((meta, i) => (
                <Meta key={i}>{meta}</Meta>
            ))}
        </div>
    </Host>
);

Entity.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    metas: PropTypes.array,
    logo: PropTypes.string,
    logoAlt: PropTypes.string,
};

export default Entity;
