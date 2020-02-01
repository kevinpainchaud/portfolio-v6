import { h } from "preact";
import PropTypes from "prop-types";

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

ContentBlockMini.propTypes = {
    title: PropTypes.string,
    titleTagName: PropTypes.string,
    titleTextAlign: PropTypes.string,
    background: PropTypes.bool,
    backgroundWhite: PropTypes.bool,
    border: PropTypes.bool,
    noPaddingLeft: PropTypes.bool,
    noPaddingRight: PropTypes.bool,
    textAlign: PropTypes.string,
    children: PropTypes.element
};

export default ContentBlockMini;
