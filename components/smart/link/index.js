import { h } from "preact";
import RouterLink from "next/link";
import PropTypes from "prop-types";

const Link = ({
    href,
    target,
    tagName = "a",
    onClick,
    className,
    children,
}) => {
    const TagName = tagName === "routerLink" ? RouterLink : tagName;
    const SubTagName = tagName === "routerLink" ? "a" : "span";
    const virtualLink = ["a", "routerLink"].indexOf(tagName) === -1;

    const handleClick = (event) => {
        if (href && tagName !== "a") {
            event.preventDefault();

            if (tagName !== "routerLink") {
                if (target && target === "_blank") {
                    window.open(href);
                } else {
                    document.location = href;
                }
            }
        }
    };

    return (
        <TagName
            href={href && !virtualLink ? href : null}
            target={href && !virtualLink ? target : null}
            onClick={onClick || handleClick}
            class={className}
        >
            <SubTagName class={SubTagName === "a" ? className : null}>
                {children}
            </SubTagName>
        </TagName>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    tagName: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Link;
