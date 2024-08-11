import axios from 'axios'
import { ENDPOINTS } from '../endpoints'

const url=ENDPOINTS.api + ENDPOINTS.makeMatch


const makeMatch = async (data) => {

    const token = getToken()

    try{
        const response = await axios.post(url , data , {
            headers: {
                Authorization: ' Bearer ' + token
            }
        })
        return response.data;
    }

    catch(error){
        console.error("Error Making Match :", error)
        throw error;
    }
}

export default fetchMatches;

