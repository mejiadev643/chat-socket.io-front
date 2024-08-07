
import network from '@network/network.js';

const getMessages = async () => {
    const response = await network.get('/messages');
    return response;
};
const search = async (search) => {
    const response = await network.get(`users/profileEmail?email=${search}`);
    return response;
};

export default {
    getMessages,
    search,

};