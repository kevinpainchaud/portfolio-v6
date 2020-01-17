import { h } from "preact";

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
            {metas.map(meta => (
                <Meta>{meta}</Meta>
            ))}
        </div>
    </Host>
);

export default Entity;
