import { h } from "preact";
import PropTypes from "prop-types";

import { getHumanizedTimePeriod } from "../../../../helpers/date";

import Entity from "../../dumb/entity";

const Experience = ({
    companyUrn,
    title,
    companyName,
    timePeriod,
    locationName,
}) => {
    let logo = null;

    try {
        // eslint-disable-next-line no-undef
        logo = require(`../../../../statics/images/companies/logos/logo-${companyUrn}.png`)
            .default;
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
                locationName,
            ]}
            logo={logo}
            logoAlt={`Logo ${companyName}`}
        />
    );
};

Experience.propTypes = {
    companyUrn: PropTypes.string,
    title: PropTypes.string,
    companyName: PropTypes.string,
    timePeriod: PropTypes.object,
    locationName: PropTypes.string,
};

export default Experience;
