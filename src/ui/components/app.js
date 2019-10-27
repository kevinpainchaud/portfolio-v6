import { h, Fragment, Component } from "preact";
import { Router } from "preact-router";

import Navbar from "./navbar";
import Footer from "./footer";

import Home from "../routes/home";
import Projects from "../routes/projects";
import Project from "../routes/project";
import About from "../routes/about";
import Error404 from "../routes/error-404";

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
                        <Project path="/projets/:project-slug" />
                        <About path="/a-propos" />
                        <Error404 default />
                    </Router>
                </div>
                <Footer />
            </>
        );
    }
}
