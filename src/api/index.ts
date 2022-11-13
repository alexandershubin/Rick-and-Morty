import axios from 'axios';

export const getDataCharacters = async (url: string) => {
    return await axios.get(url);
};
