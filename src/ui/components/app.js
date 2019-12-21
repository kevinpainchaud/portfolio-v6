import { h, Component, Fragment, createContext } from "preact";
import { useRef } from "preact/hooks";
import { Router } from "preact-router";
import mitt from "mitt";

import Navbar from "./smart/navbar";
import Footer from "./smart/footer";
import ContactModal from "./smart/contact-modal";

import Home from "../routes/home";
import Projects from "../routes/projects";
import Project from "../routes/project";
import About from "../routes/about";
import Error404 from "../routes/error-404";

const emitter = mitt();

export const AppContext = createContext({ emitter });

export default class App extends Component {
    render() {
        const navbarRef = useRef();

        let projectsWindowScrollY = 0;

        // Store the window scroll top position on the project list
        window.addEventListener("scroll", () => {
            if (this.currentUrl === "/projets") {
                projectsWindowScrollY = window.scrollY;
            }
        });

        const handleRoute = e => {
            this.currentUrl = e.url;

            // Restore the window scroll top position
            // when the user back to the project list from the project index
            if (
                e.url === "/projets" &&
                e.previous &&
                e.previous.match(/^\/projets\/.*/)
            ) {
                setTimeout(() => window.scrollTo(0, projectsWindowScrollY));
            } else {
                window.scrollTo(0, 0);
            }

            // We have to re-render navbar because
            // her styles can change depending on current page
            if (navbarRef.current) {
                navbarRef.current.forceUpdate();
            }
        };

        return (
            <>
                <AppContext.Provider value={{ emitter }}>
                    <Navbar ref={navbarRef} />
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
                    <Footer />
                    <ContactModal></ContactModal>
                </AppContext.Provider>
            </>
        );
    }
}
