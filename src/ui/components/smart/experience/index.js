import { h } from "preact";

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
            metas={[timePeriod, locationName]}
            logo={logo}
            logoAlt={`Logo ${companyName}`}
        />
    );
};

export default Experience;
