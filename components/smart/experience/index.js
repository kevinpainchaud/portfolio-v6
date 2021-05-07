import { h } from "preact";
import PropTypes from "prop-types";

import { getHumanizedTimePeriod } from "../../../helpers/date";

import Entity from "../../dumb/entity";

const Experience = ({
    companyUrn,
    title,
    companyName,
    timePeriod,
    locationName,
}) => {
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
            logo={`/images/companies/logos/logo-${companyUrn}.png`}
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
