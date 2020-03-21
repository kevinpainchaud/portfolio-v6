import { h } from "preact";
import { Link as RouterLink } from "preact-router/match";
import PropTypes from "prop-types";

const Link = ({
    href,
    target,
    tagName = "a",
    onClick,
    className,
    activeClassName,
    children
}) => {
    const TagName = tagName === "routerLink" ? RouterLink : tagName,
        virtualLink = ["a", "routerLink"].indexOf(tagName) === -1;

    const handleClick = event => {
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
            activeClassName={activeClassName}
        >
            {children}
        </TagName>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    tagName: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    children: PropTypes.element
};

export default Link;
