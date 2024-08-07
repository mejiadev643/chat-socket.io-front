
import network from '@network/network.js';

const getMessages = async () => {
    const response = await network.get('/messages');
    return response;
};