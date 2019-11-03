import { h } from "preact";
import { Link } from "preact-router/match";

import { Host } from "./style";

const ProjectCard = ({ project }) => (
    <Host>
        <Link href={`/projets/${project.slug}`}>
            <div>{project.name}</div>
            <div>{project.description}</div>
            <div>Année : {project.date}</div>
        </Link>
    </Host>
);

export default ProjectCard;
