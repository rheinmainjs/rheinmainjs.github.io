module.exports = function germanDate(value) {
    const dateObject = new Date(value);
    const months = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ];

    return `${dateObject.getDate()}. ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};
