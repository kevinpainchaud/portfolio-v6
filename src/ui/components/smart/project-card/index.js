import { h } from "preact";

import Link from "../link";
import Meta from "../../styled/meta";

import { Host, Body, Logo, Content, Title } from "./style";

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
    let logoImageSrc = null;

    try {
        logoImageSrc = require(`../../../../statics/images/projects/logos/logo-${slug}.png`);
    } catch (error) {}

    return (
        <Host className={className} hoverEffect>
            <Link href={`/projets/${slug}`} tagName="routerLink">
                <Body>
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
                </Body>
            </Link>
        </Host>
    );
};

export default ProjectCard;
