// getUser.test.js
const getUser = require('./getUser');

test('Snapshot do usuário', () => {
    expect(getUser()).toMatchSnapshot();
});
