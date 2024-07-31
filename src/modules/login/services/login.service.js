import network from '@network/network.js';

const login = async (email, password) => {
    const response = await network.post('/auth/login', { email, password });
    return response;
}

export default {
    login,
};