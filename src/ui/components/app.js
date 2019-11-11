import { h, Component, Fragment } from "preact";
import { useRef } from "preact/hooks";
import { Router } from "preact-router";

import Navbar from "./smart/navbar";
import Footer from "./smart/footer";

import Home from "../routes/home";
import Projects from "../routes/projects";
import Project from "../routes/project";
import About from "../routes/about";
import Error404 from "../routes/error-404";

export default class App extends Component {
    render() {
        const navbarRef = useRef();

        const handleRoute = e => {
            this.currentUrl = e.url;

            // We have to re-render navbar because
            // her styles can change depending on current page
            if (navbarRef.current) {
                navbarRef.current.forceUpdate();
            }
        };

        return (
            <>
                <Navbar ref={navbarRef} />
                <div>
                    <Router onChange={handleRoute}>
                        <Home path="/" />
                        <Projects path="/projets" />
                        <Project
                            path="/projets/:projectSlug"
                            navbarRef={navbarRef}
                        />
                        <About path="/a-propos" />
                        <Error404 default />
                    </Router>
                </div>
                <Footer />
            </>
        );
    }
}
