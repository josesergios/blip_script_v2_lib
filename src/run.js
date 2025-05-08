require('dotenv').config();
import { request, context, time } from "./lib/core.js";


console.log('API_URL:', process.env.API_URL);
console.log('API_TOKEN:', process.env.API_TOKEN);

async function run() {
    const url = process.env.API_URL;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.API_TOKEN
        },
        body: {
            value: '3318476970'
        }
    };

    const response = await request.fetchAsync(url, options);

    if (response.success) {
        console.log('Resposta OK:', response.status);
        const jsonResponse = await response.jsonAsync();
        console.log('Resposta JSON:', jsonResponse);
    } else {
        console.error('Erro na resposta:', response.status, response.statusText);
    }
}
run().catch(console.error);

