import axios from 'axios'
import { ENDPOINTS } from '../endpoints'

const url=ENDPOINTS.api + ENDPOINTS.getMatches


const fetchMatches = async (languageObject) => {

    try{
        const response = await axios.get(url ,{params: languageObject})
        return response.data;
    }

    catch(error){
        console.error("Error Fetching Matches :", error)
        throw error;
    }
}

export default fetchMatches;

