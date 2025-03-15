import request from "../utils/request";


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
    async getAll() {
        const result = await request.get(baseUrl)
        // return request('GET', baseUrl);
        const games = Object.values(result)

        return games;
    },
    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);
    },
    create(gameData) {
        return request.post(baseUrl, gameData);
        // return request('POST', baseUrl, gameData)
    }
};