const baseUrl = 'http://localhost:3030/jsonstore/games'


//export const CreateGame -Option 1

/*const create = () => {
  .....  
}

export default {
    create,
    ...,
} - Option 2*/

//Object method mutation in export default - Option 3

export default {
    async create(gameData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameData),
        });
        const result = await response.json()
        return result;
    }
};