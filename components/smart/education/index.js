import { h } from "preact";
import PropTypes from "prop-types";

import { getHumanizedTimePeriod } from "../../../helpers/date";

import Entity from "../../dumb/entity";

const Education = ({ schoolUrn, schoolName, diploma, timePeriod }) => {
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
            logo={`/images/schools/logos/logo-${schoolUrn}.png`}
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
