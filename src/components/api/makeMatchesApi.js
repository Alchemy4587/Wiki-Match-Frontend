import axios from 'axios'
import { ENDPOINTS } from '../endpoints'

const url=API_BASE_URL + ENDPOINTS.makeMatch


const makeMatch = async (data) => {


    try{
        const response = await axios.post(url , data )
        return response.data;
    }

    catch(error){
        console.error("Error Making Match :", error)
        throw error;
    }
}

export default fetchMatches;

