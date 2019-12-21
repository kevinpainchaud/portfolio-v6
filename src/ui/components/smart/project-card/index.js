import { h } from "preact";

import Link from "../link";
import Meta from "../../styled/meta";

import { Host, Body, Logo, Content, Title, Mockup } from "./style";

import iconCalendar from "../../../assets/images/icon-calendar.svg";

const ProjectCard = ({
    name,
    slug,
    date,
    description,
    highlights,
    width,
    className
}) => {
    let logoImageSrc = null,
        mockupContent = null;

    try {
        logoImageSrc = require(`../../../../statics/images/projects/logos/logo-${slug}.png`);

        if (width === "xxl") {
            mockupContent = require(`../../../../statics/images/projects/mockup-contents/mockup-content-${slug}.jpg`);
        }
    } catch (error) {}

    return (
        <Host width={width} className={className} hoverEffect>
            <Link href={`/projets/${slug}`} tagName="routerLink">
                <Body>
                    <div>
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
                                    <use
                                        xlinkHref={`#${iconCalendar.id}`}
                                    ></use>
                                </svg>
                                <div>Année : {date}</div>
                            </Meta>
                        </Content>
                    </div>
                    {width === "xxl" ? (
                        <Mockup>
                            <img src={mockupContent} alt="" />
                        </Mockup>
                    ) : null}
                </Body>
            </Link>
        </Host>
    );
};

export default ProjectCard;
