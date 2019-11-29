import { h } from "preact";

import Entity from "../../dumb/entity";

const Education = ({ schoolUrn, schoolName, diploma, timePeriod }) => {
    let logo = null;

    try {
        logo = require(`../../../../statics/images/schools/logos/logo-${schoolUrn}.png`);
    } catch (error) {}

    return (
        <Entity
            title={schoolName}
            subTitle={diploma}
            metas={[timePeriod]}
            logo={logo}
            logoAlt={`Logo ${schoolName}`}
        />
    );
};

export default Education;
