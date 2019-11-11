import { h } from "preact";

import Host from "./style";

const LinksGroup = ({ title, children }) => (
    <Host>
        <div>{title}</div>
        {children}
    </Host>
);

export default LinksGroup;
