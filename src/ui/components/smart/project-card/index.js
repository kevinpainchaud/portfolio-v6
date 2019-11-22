import { h } from "preact";

import Link from "../link";
import Meta from "../../styled/meta";

import { Host, Cover, Body, Logo, Content, Title, Description } from "./style";

import iconCalendar from "../../../assets/images/icon-calendar.svg";

const ProjectCard = ({ name, slug, date, description, width }) => {
    let logoImageSrc = null,
        backgroundImageSrc = null;

    try {
        logoImageSrc = require(`../../../../statics/images/projects/logos/logo-${slug}.png`);
        backgroundImageSrc = require(`../../../../statics/images/projects/covers/md/cover-${slug}.jpg`);
    } catch (error) {}

    return (
        <Host hoverEffect>
            <Link href={`/projets/${slug}`} tagName="routerLink">
                <Cover
                    className={width === "full" ? "lg" : ""}
                    style={{ backgroundImage: `url(${backgroundImageSrc})` }}
                ></Cover>
                <Body>
                    <Logo>
                        <img src={logoImageSrc} alt={`Logo ${name}`} />
                    </Logo>
                    <Content>
                        <Title>{name}</Title>
                        <Description>{description}</Description>
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
