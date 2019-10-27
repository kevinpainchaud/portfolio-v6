import { h } from "preact";

const Link = ({ href, target, type = "a", className, children }) => {
    const TagName = type === "span" ? "span" : "a";

    const handleClick = event => {
        event.preventDefault();

        if (href && type === "span") {
            target && target === "_blank"
                ? window.open(href)
                : (document.location = href);
        }
    };

    return (
        <TagName
            href={href && type === "a" ? href : null}
            target={href && type === "a" ? target : null}
            onClick={type !== "a" ? handleClick : null}
            className={className}
        >
            {children}
        </TagName>
    );
};

export default Link;
