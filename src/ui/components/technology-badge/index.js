import { h, Component, Fragment } from "preact";

import { Host } from "./style";

const TechnologyBadge = ({ technology }) => <Host>{technology.name}</Host>;

export default TechnologyBadge;
