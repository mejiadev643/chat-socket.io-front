import network from '@network/network.js';

const login = async (email, password) => {
    const response = await network.post('/auth/login', { email, password });
    return response;
}
const logout = async () => {
    const response = await network.post('/auth/logout');
    return response;
}
const getUserInfo = async () => {
    const response = await network.get('/users/profile');
    return response;
}

export default {
    login,
    logout,
    getUserInfo,
};