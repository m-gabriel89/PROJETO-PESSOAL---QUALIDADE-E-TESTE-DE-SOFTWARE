// fetchData.test.js
const fetchData = require('./fetchData');

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ user: 'John Doe' }),
    })
);

test('Mockando chamada de API', async () => {
    const data = await fetchData('https://fakeapi.com/user');
    expect(data).toEqual({ user: 'John Doe' });
});
