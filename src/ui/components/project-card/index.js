import { h } from "preact";

import Link from "../link";

import { Host, Cover, Body, Logo, Content, Title, Description } from "./style";
import { Meta } from "../meta/style";

import iconCalendar from "../../assets/images/icon-calendar.svg";

const ProjectCard = ({ project, width }) => (
    <Host>
        <Link href={`/projets/${project.slug}`} tagName="routerLink">
            <Cover
                className={width === "full" ? "lg" : ""}
                style="background-image: url('https://picsum.photos/id/277/700/300');"
            ></Cover>
            <Body>
                <Logo>
                    <img src="https://picsum.photos/id/305/300/300" alt="" />
                </Logo>
                <Content>
                    <Title>{project.name}</Title>
                    <Description>{project.description}</Description>
                    <Meta iconWidthXs>
                        <svg>
                            <use xlinkHref={`#${iconCalendar.id}`}></use>
                        </svg>
                        <div>Année : {project.date}</div>
                    </Meta>
                </Content>
            </Body>
        </Link>
    </Host>
);

export default ProjectCard;
