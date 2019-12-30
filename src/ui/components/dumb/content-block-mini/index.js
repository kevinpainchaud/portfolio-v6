import { h } from "preact";

import { Host, TitleH2, TitleH3, Content } from "./style";

const ContentBlockMini = ({
    title,
    titleTagName = "h3",
    titleTextAlign,
    background,
    backgroundWhite,
    border,
    noPaddingLeft,
    noPaddingRight,
    textAlign,
    children
}) => {
    const Title = titleTagName === "h2" ? TitleH2 : TitleH3;

    return (
        <Host
            background={background}
            backgroundWhite={backgroundWhite}
            border={border}
            noPaddingLeft={noPaddingLeft}
            noPaddingRight={noPaddingRight}
            textAlign={textAlign}
        >
            {title ? <Title textAlign={titleTextAlign}>{title}</Title> : null}
            <Content>{children}</Content>
        </Host>
    );
};

export default ContentBlockMini;
