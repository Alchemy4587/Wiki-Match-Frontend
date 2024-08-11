import axios from 'axios'
import { ENDPOINTS } from '../endpoints'

const url=ENDPOINTS.api + ENDPOINTS.getMatches


const fetchMatches = async (languageCode) => {

    try{
        const response = await axios.get(url + languageCode)
        return response.data;
    }

    catch(error){
        console.error("Error Fetching Matches :", error)
        throw error;
    }
}

export default fetchMatches;

