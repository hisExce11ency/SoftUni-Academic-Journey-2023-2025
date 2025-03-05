export const formatDate = (isoDate) => {

    const date = new Date(isoDate);
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);

    return formattedDate;
};