import { h, Fragment, Component } from "preact";
import { Router } from "preact-router";

import Navbar from "./navbar";

import Home from "../routes/home";
import Projects from "../routes/projects";

export default class App extends Component {
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <>
                <Navbar />
                <div>
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        <Projects path="/projets" />
                    </Router>
                </div>
            </>
        );
    }
}
