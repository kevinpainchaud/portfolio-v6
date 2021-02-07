import { h } from "preact";
import PropTypes from "prop-types";

import { getHumanizedTimePeriod } from "../../../../helpers/date";

import Entity from "../../dumb/entity";

const Education = ({ schoolUrn, schoolName, diploma, timePeriod }) => {
    let logo = null;

    try {
        // eslint-disable-next-line no-undef
        logo = require(`../../../../statics/images/schools/logos/logo-${schoolUrn}.png`)
            .default;
    } catch (error) {}

    return (
        <Entity
            title={schoolName}
            subTitle={diploma}
            metas={[
                getHumanizedTimePeriod(
                    timePeriod.startDate,
                    timePeriod.endDate
                ),
            ]}
            logo={logo}
            logoAlt={`Logo ${schoolName}`}
        />
    );
};

Education.propTypes = {
    schoolUrn: PropTypes.string,
    schoolName: PropTypes.string,
    diploma: PropTypes.string,
    timePeriod: PropTypes.object,
};

export default Education;
