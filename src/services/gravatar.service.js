import axios from "axios";
import CryptoJS from "crypto-js";
import { SHA256 } from "crypto-js";

const getGravatarUrl= async (email)=>{
    
    const lowerCaseEmail = email.trim().toLowerCase();
    const md5Hash = CryptoJS.SHA256(lowerCaseEmail).toString();

    let gravatarUrl = `https://api.gravatar.com/v3/profiles/${md5Hash}`;
    try{
        let response = await axios.get(gravatarUrl,{
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_GRAVATAR}`
            }
        });
        return response;
    }
    catch (error) {
        //console.error('Error fetching Gravatar:', error);
        return null;
    }
}

export default {
    getGravatarUrl,
};