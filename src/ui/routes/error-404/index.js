import { h, Fragment } from "preact";
import Helmet from "preact-helmet";

const Error404 = () => (
    <>
        <Helmet
            title="404"
            meta={[{ name: "prerender-status-code", content: "404" }]}
        />

        <h1>404</h1>
        <p>Page non trouvée</p>
    </>
);

export default Error404;
