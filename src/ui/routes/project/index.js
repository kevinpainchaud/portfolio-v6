import { h, Component, Fragment } from "preact";
import { Link } from "preact-router/match";
import Error404 from "../../routes/error-404";

import projects from "../../../data/projects.json";

export default class Project extends Component {
    state = { project: null };

    constructor(props) {
        super();

        this.state.project = projects.find(
            project => project.slug === props["project-slug"]
        );
    }

    render() {
        return this.state.project ? (
            <>
                <Link href="/projets">Retour</Link>
                <h1>{this.state.project.name}</h1>
            </>
        ) : (
            Error404()
        );
    }
}
