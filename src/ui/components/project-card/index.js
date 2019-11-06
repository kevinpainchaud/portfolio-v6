import { h } from "preact";
import { Link } from "preact-router/match";

import {
    Host,
    Cover,
    Body,
    Logo,
    Content,
    Title,
    Description,
    Meta
} from "./style";

const ProjectCard = ({ project, width }) => (
    <Host>
        <Link href={`/projets/${project.slug}`}>
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
                    <Meta>
                        {/* <svg>
                            <use xlinkHref=""></use>
                        </svg> */}
                        <div>Année : {project.date}</div>
                    </Meta>
                </Content>
            </Body>
        </Link>
    </Host>
);

export default ProjectCard;
