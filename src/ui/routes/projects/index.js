import { h, Fragment } from "preact";
import { Link } from "preact-router/match";

import projects from "../../../data/projects.json";

const Projects = () => {
    const projectsItems = [];

    projects.forEach(project => {
        projectsItems.push(
            <li>
                <Link href={`/projets/${project.slug}`}>{project.name}</Link>
            </li>
        );
    });

    return (
        <>
            <h1>Projets</h1>
            <p>Ceci est le composant listant l'ensemble de mes projets.</p>
            <ul>{projectsItems}</ul>
        </>
    );
};

export default Projects;
