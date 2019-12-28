/**
 * Get number of months between 2 dates
 *
 * @param {date} startDate
 * @param {date} endDate
 * @returns {number}
 */
const getMonthsDiff = (startDate, endDate) =>
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

/**
 * Humanize a duration
 *
 * @param {date} startDate
 * @param {date} endDate
 * @returns {string} E.g. "3 ans 6 mois"
 */
const getHumanizedDuration = (startDate, endDate) => {
    let durationStr = "";

    if (!startDate) {
        return null;
    }

    const monthsDiff = getMonthsDiff(startDate, endDate ? endDate : new Date()),
        years = Math.floor(monthsDiff / 12),
        months = Math.round((monthsDiff / 12 - years) * 12);

    if (years > 0) {
        durationStr += years === 1 ? `1 an` : `${years} ans`;
    }

    if (months > 0) {
        if (durationStr.length > 0) {
            durationStr += " ";
        }

        durationStr += `${months} mois`;
    }

    return `(${durationStr})`;
};

/**
 * Humanize a time period
 *
 * @param {Object} startDate
 * @param {Object} endDate
 * @param {boolean} [duration=false]
 * @returns {string} E.g. "Oct. 2013 - Avr. 2017 (3 ans 6 mois)"
 */
export const getHumanizedTimePeriod = (
    startDate,
    endDate,
    duration = false
) => {
    let timePeriodStr = "",
        months = [
            "Janv.",
            "Fev.",
            "Mars",
            "Avr.",
            "Mai",
            "Juin",
            "Juil.",
            "Aout",
            "Sept.",
            "Oct.",
            "Nov.",
            "Dec."
        ];

    if (startDate.month) {
        timePeriodStr += `${months[startDate.month - 1]} `;
    }

    timePeriodStr += `${startDate.year} - `;

    if (endDate) {
        if (endDate.month) {
            timePeriodStr += `${months[endDate.month - 1]} `;
        }

        timePeriodStr += endDate.year;
    } else {
        timePeriodStr += `Aujourd'hui`;
    }

    if (duration) {
        const durationStr = getHumanizedDuration(
            new Date(
                `${startDate.year}${
                    startDate.month ? `-${startDate.month}` : ""
                }`
            ),
            endDate
                ? new Date(
                      `${endDate.year}${
                          endDate.month ? `-${endDate.month}` : ""
                      }`
                  )
                : null
        );

        if (durationStr) {
            timePeriodStr += ` ${durationStr}`;
        }
    }

    return timePeriodStr;
};
