import { h } from "preact";

import { Host, Logo, Title, SubTitle, Meta } from "./style";

const Entity = ({ title, subTitle, metas, logo, logoAlt }) => (
    <Host>
        <div>
            {logo ? (
                <Logo>
                    <img src={logo} alt={logoAlt} />
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
