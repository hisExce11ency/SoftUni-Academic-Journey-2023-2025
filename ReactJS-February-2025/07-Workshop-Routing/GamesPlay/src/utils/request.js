const request = async (method, url, data) => {
    let options = {};

    if (method !== 'GET') {
        options = {
            method,
        };
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(data),
        }
    }


    const responce = await fetch(url, options);
    const result = await responce.json();

    return result;
};

export default {
    get: request.bind(null, "GET"),
    // get: (...params) => request('GET', ...params) partial aplication equivalent to the above.
    post: request.bind(null, "POST"),
    put: request.bind(null, "PUT"),
    delete: request.bind(null, "DELETE"),
}