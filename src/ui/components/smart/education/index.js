import { h } from "preact";

import { getHumanizedTimePeriod } from "../../../../helpers/date";

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
            metas={[
                getHumanizedTimePeriod(timePeriod.startDate, timePeriod.endDate)
            ]}
            logo={logo}
            logoAlt={`Logo ${schoolName}`}
        />
    );
};

export default Education;
