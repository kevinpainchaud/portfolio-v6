import { h } from "preact";

import links from "../../../../data/links.json";

import IconLink from "../../dumb/icon-link";
import LinksGroup from "../../dumb/links-group";

import iconTwitter from "../../../assets/images/icon-twitter.svg";
import iconLinkedIn from "../../../assets/images/icon-linkedin.svg";

const SocialNetworks = () => (
    <LinksGroup title="Me suivre sur">
        <IconLink
            href={links.find(l => l.slug === "twitter").url}
            target="_blank"
            icon={iconTwitter}
        >
            Twitter
        </IconLink>
        <IconLink
            href={links.find(l => l.slug === "linkedin").url}
            target="_blank"
            icon={iconLinkedIn}
        >
            LinkedIn
        </IconLink>
    </LinksGroup>
);

export default SocialNetworks;
