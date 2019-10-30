import { h, Component, Fragment } from "preact";

import { Host } from "./style";

const SkillTag = ({ skill }) => <Host>{skill.name}</Host>;

export default SkillTag;