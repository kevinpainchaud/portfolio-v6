import { h } from "preact";

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
    className
}) => {
    let logoImageSrc = null,
        mockupContent = null;

    try {
        logoImageSrc = require(`../../../../statics/images/projects/logos/logo-${slug}.png`);

        if (mockup) {
            mockupContent = require(`../../../../statics/images/projects/mockup-contents/mockup-content-${slug}.jpg`);
        }
    } catch (error) {}

    const bodyCols = [
        <Inner>
            <Logo>
                <img src={logoImageSrc} alt={`Logo ${name}`} />
            </Logo>
            <Content>
                <Title>{name}</Title>
                <div>{description}</div>
                <ul>
                    {highlights.map(highlight => (
                        <li>{highlight}</li>
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
                class={`mockup-type--${mockupType} ${
                    reverse ? "mockup--reversed" : ""
                }`}
            >
                <div>
                    {mockupType === "ipad" ? <img src={ipadMockup} /> : null}
                    {mockupType === "tv" ? <img src={tvMockup} /> : null}
                    <img src={mockupContent} />
                </div>
            </Mockup>
        ) : null
    ];

    if (reverse) {
        bodyCols.reverse();
    }

    return (
        <Host className={className} hoverEffect>
            <Link href={`/projets/${slug}`} tagName="routerLink">
                <Body>{bodyCols}</Body>
            </Link>
        </Host>
    );
};

export default ProjectCard;
