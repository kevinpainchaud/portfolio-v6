import { h } from "preact";

import { Host, Title, Content } from "./style";

const ContentBlockMini = ({
    title,
    background,
    backgroundWhite,
    border,
    noPaddingLeft,
    noPaddingRight,
    textAlign,
    children
}) => (
    <Host
        background={background}
        backgroundWhite={backgroundWhite}
        border={border}
        noPaddingLeft={noPaddingLeft}
        noPaddingRight={noPaddingRight}
        textAlign={textAlign}
    >
        {title ? <Title>{title}</Title> : null}
        <Content>{children}</Content>
    </Host>
);

export default ContentBlockMini;
