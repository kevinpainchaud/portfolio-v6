import { h } from "preact";
import { route } from "preact-router";
import { Link as RouterLink } from "preact-router/match";

const Link = ({
    href,
    target,
    tagName = "a",
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
            onClick={handleClick}
            className={className}
            activeClassName={activeClassName}
        >
            {children}
        </TagName>
    );
};

export default Link;
