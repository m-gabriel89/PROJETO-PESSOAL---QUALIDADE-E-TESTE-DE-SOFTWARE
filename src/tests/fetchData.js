// fetchData.js
async function fetchData(api) {
    const response = await fetch(api);
    return response.json();
}

module.exports = fetchData;
