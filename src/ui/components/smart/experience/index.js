import { h } from "preact";

import { getHumanizedTimePeriod } from "../../../../helpers/date";

import Entity from "../../dumb/entity";

const Experience = ({
    companyUrn,
    title,
    companyName,
    timePeriod,
    locationName
}) => {
    let logo = null;

    try {
        logo = require(`../../../../statics/images/companies/logos/logo-${companyUrn}.png`);
    } catch (error) {}

    return (
        <Entity
            title={title}
            subTitle={companyName}
            metas={[
                getHumanizedTimePeriod(
                    timePeriod.startDate,
                    timePeriod.endDate,
                    true
                ),
                locationName
            ]}
            logo={logo}
            logoAlt={`Logo ${companyName}`}
        />
    );
};

export default Experience;
