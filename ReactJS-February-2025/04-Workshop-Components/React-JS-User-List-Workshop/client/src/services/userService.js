
const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const users = Object.values(result);

        return users
    },

    async getOne(userId) {
        const response = await fetch(`${baseUrl}/${userId}`);
        const user = await response.json();
        return user;
    },

    async create(userData) {
        const postData = transformUserData(userData);

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        return result;
    },
    async delete(userId) {
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result;
    },
    async update(userId, userData) {
        const existingUser = await this.getOne(userId); // Fetch existing user to keep `createdAt`
        const putData = transformUserData({ ...existingUser, ...userData }, true); // Keep `createdAt`

        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(putData),
        });

        return await response.json();
    },

}



function transformUserData(userData, keepCreatedAt = false) {
    const { country, city, street, streetNumber, createdAt, ...transformedData } = userData;

    transformedData.address = { country, city, street, streetNumber };

    if (!keepCreatedAt) {
        transformedData.createdAt = new Date().toISOString();
    } else if (createdAt) {
        transformedData.createdAt = createdAt;
    }

    transformedData.updatedAt = new Date().toISOString();
    return transformedData;
}