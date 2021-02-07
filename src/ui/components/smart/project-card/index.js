import { h } from "preact";
import PropTypes from "prop-types";

import Image from "../../dumb/image";
import Link from "../link";
import Meta from "../../styled/meta";

import { Host, Body, Inner, Logo, Content, Title, Mockup } from "./style";

import iconCalendar from "../../../assets/images/icon-calendar.svg";
import ipadMockup from "../../../assets/images/ipad-mockup.png";
import tvMockup from "../../../assets/images/tv-mockup.png";

const ProjectCard = ({
    name,
    slug,
    date,
    description,
    highlights,
    mockup,
    mockupType,
    reverse,
    className,
}) => {
    let logo = null,
        mockupContent = null;

    try {
        // eslint-disable-next-line no-undef
        logo = require(`../../../../statics/images/projects/logos/logo-${slug}.png`);

        if (mockup) {
            // eslint-disable-next-line no-undef
            mockupContent = require(`../../../../statics/images/projects/mockup-contents/mockup-content-${slug}.jpg`);
        }
    } catch (error) {}

    const bodyCols = [
        <Inner key="1">
            <Logo>
                <Image src={logo} alt={`Logo ${name}`} />
            </Logo>
            <Content>
                <Title>{name}</Title>
                <div>{description}</div>
                <ul>
                    {highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                    ))}
                </ul>
                <Meta iconWidthXs>
                    <svg>
                        <use xlinkHref={`#${iconCalendar.id}`}></use>
                    </svg>
                    <div>Année : {date}</div>
                </Meta>
            </Content>
        </Inner>,
        mockup &&
        (mockupType === "ipad" || mockupType === "tv") &&
        mockupContent ? (
            <Mockup
                key="2"
                class={`hidden-xs mockup-type--${mockupType} ${
                    reverse ? "mockup--reversed" : ""
                }`}
            >
                <div>
                    {mockupType === "ipad" ? <Image src={ipadMockup} /> : null}
                    {mockupType === "tv" ? <Image src={tvMockup} /> : null}
                    <Image src={mockupContent} />
                </div>
            </Mockup>
        ) : null,
    ];

    if (reverse) {
        bodyCols.reverse();
    }

    return (
        <Host className={className} hoverEffect>
            <Link href={`/projets/${slug}/`} tagName="routerLink">
                <Body>{bodyCols}</Body>
            </Link>
        </Host>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    highlights: PropTypes.array,
    mockup: PropTypes.string,
    mockupType: PropTypes.string,
    reverse: PropTypes.bool,
    className: PropTypes.string,
};

export default ProjectCard;
