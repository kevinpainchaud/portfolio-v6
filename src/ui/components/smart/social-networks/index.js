import { h } from "preact";
import PropTypes from "prop-types";

import links from "../../../../data/links.json";

import IconLink from "../../dumb/icon-link";
import LinksGroup from "../../dumb/links-group";

import iconTwitter from "../../../assets/images/icon-twitter-circle.svg";
import iconLinkedIn from "../../../assets/images/icon-linkedin-circle.svg";

const SocialNetworks = ({ iconLinkGray }) => (
    <LinksGroup title="Me suivre sur">
        <IconLink
            href={links.find(l => l.slug === "twitter").url}
            target="_blank"
            icon={iconTwitter}
            gray={iconLinkGray}
        >
            Twitter
        </IconLink>
        <IconLink
            href={links.find(l => l.slug === "linkedin").url}
            target="_blank"
            icon={iconLinkedIn}
            gray={iconLinkGray}
        >
            LinkedIn
        </IconLink>
    </LinksGroup>
);

SocialNetworks.propTypes = {
    iconLinkGray: PropTypes.bool
};

export default SocialNetworks;
