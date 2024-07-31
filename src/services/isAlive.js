import network from '@network/network.js';

 const isAlive = async () => {
    const response = await network.post('/auth/is-alive');
    return response;
}

export default {
    isAlive,
};