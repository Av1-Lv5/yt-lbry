const axios = require("axios");
const handler = async (event) => {
    const perPage = event.queryStringParameters.perPage;
    const pageNum = event.queryStringParameters.pageNum;
    const collectionID = event.queryStringParameters.collectionID;

    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const url = `https://api.raindrop.io/rest/v1/raindrops/${collectionID}?perPage=${perPage}&page=${pageNum}`;

    try {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        const { status, statusText, headers, data } = error.response;
        return {
            statusCode: status,
            body: JSON.stringify({ status, statusText, headers, data }),
        };
    }
};

module.exports = { handler };
