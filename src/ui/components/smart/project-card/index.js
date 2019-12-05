import { h } from "preact";

import Link from "../link";
import Meta from "../../styled/meta";

import { Host, Body, Cover, Logo, Content, Title } from "./style";

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
        coverImageSrc = null;

    try {
        logoImageSrc = require(`../../../../statics/images/projects/logos/logo-${slug}.png`);
        coverImageSrc = require(`../../../../statics/images/projects/covers/project-card/project-card-cover-${slug}.jpg`);
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
                {width === "full" ? (
                    <Cover
                        style={{ backgroundImage: `url(${coverImageSrc})` }}
                    ></Cover>
                ) : null}
            </Link>
        </Host>
    );
};

export default ProjectCard;
