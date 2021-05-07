import { h } from "preact";
import PropTypes from "prop-types";
import Image from "next/image";

import Link from "../link";
import Meta from "../../styled/meta";

import { Host, Body, Inner, Logo, Content, Title, Mockup } from "./style";

import iconCalendar from "../../../public/images/icons/icon-calendar.svg";

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
    const bodyCols = [
        <Inner key="1">
            <Logo>
                <Image
                    src={`/images/projects/logos/logo-${slug}.png`}
                    width="64"
                    height="64"
                    alt={`Logo ${name}`}
                />
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
        mockup && (mockupType === "ipad" || mockupType === "tv") ? (
            <Mockup
                key="2"
                className={`hidden-xs mockup-type--${mockupType} ${
                    reverse ? "mockup--reversed" : ""
                }`}
            >
                <div>
                    {mockupType === "ipad" ? (
                        <img src="/images/ipad-mockup.png" />
                    ) : null}
                    {mockupType === "tv" ? (
                        <img src="/images/tv-mockup.png" />
                    ) : null}
                    <img
                        src={`/images/projects/mockup-contents/mockup-content-${slug}.jpg`}
                    />
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
    mockup: PropTypes.bool,
    mockupType: PropTypes.string,
    reverse: PropTypes.bool,
    className: PropTypes.string,
};

export default ProjectCard;
