import { h } from "preact";

import links from "../../../data/links.json";

import LinksGroup from "../links-group";
import StyledLink from "../styled-link";
import IconLink from "../icon-link";

import { Host } from "./style";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconLinkedIn from "../../assets/images/icon-linkedin.svg";
import iconGitLab from "../../assets/images/icon-gitlab.svg";

const Footer = () => (
    <Host>
        <div>
            <StyledLink type="span">Politique de Confidentialité</StyledLink>
        </div>
        <div>
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
        </div>
        <div>
            <LinksGroup title="Code source sur">
                <IconLink
                    href={links.find(l => l.slug === "gitlab-portfolio-v6").url}
                    target="_blank"
                    icon={iconGitLab}
                >
                    GitLab
                </IconLink>
            </LinksGroup>
        </div>
    </Host>
);

export default Footer;
