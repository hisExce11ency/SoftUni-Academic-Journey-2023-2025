export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return formattedDate;
};